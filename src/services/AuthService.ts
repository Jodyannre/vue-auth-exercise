import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthStore } from "@/store/authStore";
import router from "@/router";


export default class AuthService {
    private authStore = useAuthStore();

    async login(email:string, password:string): Promise<void> {
        const auth = getAuth();
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = await response.user.getIdTokenResult()
            this.authStore.login(email, user.token, true)
            alert('Logged in')
            router.push({name: 'card'})
        } catch (error: any) {
            this.authStore.login('', '', false, error.message)
            alert("Error en el inicio de sesión")
        }

        // OTra forma login con un server local o remoto
        // try {
        //     const response = await fetch('http://localhost:3000/login', {
        //         method: 'POST',
        //         headers: {
        //             method: 'POST',
        //             Content-Type: 'application/json',
        //             Accept: 'application/json'
        //         },
        //         body: JSON.stringify({ email, password })
        //     })
        //     const data = await response.json()
        //     if (response.ok) {
        //         this.authStore.login(email, data.token, true)
        //         alert('Logged in')
        //         router.push({name: 'card'})
        //     } else {
        //         this.authStore.login('', '', false, data.message)
        //         alert("Error en el inicio de sesión")
        //     }
        // } catch (error) {
        //     console.log(error)
        //     this.authStore.login('', '', false, 'Error en el inicio de sesión')
        //     alert("Error en el inicio de sesión")
        // }

    }
}


