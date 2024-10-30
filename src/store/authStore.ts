import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth',{
    state: ()=> { 
        const notes: Array<string> = []
        return { 
            user: '',
            token: '',
            loggedIn: false,    
            error: '',
            notes
        } 
    },
    actions:{
        login(userI: string, tokenI: string, loggedI: boolean, errorI = ''){
            this.user = userI
            this.token = tokenI
            this.loggedIn = loggedI
            this.error = errorI
        },
        saveDoc(text:Array<string>){
            this.notes = text
        },
        logOut(){
            this.user = ''
            this.token = ''
            this.loggedIn = false
            this.error = ''
            this.notes = []
        }
    }
})