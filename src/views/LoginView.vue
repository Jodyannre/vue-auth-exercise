<template>
    <div class="container mt-3">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary mt-2" @click.prevent="login">Submit</button>
        </form>
    </div>
</template>
  
<script lang="ts" setup>
    import { ref, Ref } from 'vue'
    import AuthService from '@/services/AuthService';
    

    const email: Ref = ref('')
    const password: Ref = ref('')
    const authService = new AuthService()

    const login = async () =>{
        try {
            await authService.login(email.value, password.value)
        } catch (error) {
            console.log(error)
        }
    }    
</script>
  
<style scoped>
</style>
  