<template>
    <div class="container">
        <h3> Tarjeta </h3>
        <textarea class="form-control" placeholder="Ingresar texto" v-model="text"></textarea>
        <div class="container mt-2">
            <button type="submit" class="btn btn-primary mt-2" @click.prevent="saveDoc(text)">Guardar texto</button>
        </div>
        <button type="submit" class="btn btn-primary mt-2" @click.prevent="getCollection">Obtener tarjetas</button>
    </div>

    <div class="container mt-3">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Notas</th>
                </tr>
            </thead>
            <tbody v-for="(doc,index) in authStore.notes" v-bind:key="index">
                <tr>
                    <th scope="row">{{doc}}</th>
                </tr>
            </tbody>
            </table>
    </div>
</template>
  
<script lang="ts" setup>
    import { db } from '@/config/firebaseConfig'
    import { collection, getDocs, setDoc, doc } from 'firebase/firestore/lite'
    import { useAuthStore } from '@/store/authStore';
    import { ref, Ref, onMounted } from 'vue'

    let text: Ref = ref('')

    const authStore = useAuthStore()

    const getCollection = async () =>{
        try{
            const contacts = collection(db, 'tarjetas')
            const contactSnapshot = await getDocs(contacts)
            /*
            contactSnapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data().body)
                authStore.saveDoc(doc.data().body)
            })
            */
            const resultArray: Array<string> = contactSnapshot.docs.map( doc => {
                return doc.data().body
            })
            authStore.saveDoc(resultArray)

        }catch(error){
            console.log(error)
        }
    }

    const saveDoc = async (body:string) =>{
        try{
            const contacts = collection(db, 'tarjetas')
            await setDoc(doc(contacts), {
                user: authStore.user,
                body: body
            }).then(()=>{
                alert('Documento guardado')
                text.value = ''
            }).then(()=>{
                getCollection()
            })
        }catch(error){
            console.log(error)
        }
    }

    onMounted(async ()=>{
        await getCollection()
    })
    
</script>
  
<style scoped>
    .space {
        margin-top: 20px;
    }
</style>
  