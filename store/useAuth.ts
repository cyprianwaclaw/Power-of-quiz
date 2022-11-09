import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'


export const useAuth = defineStore('auth',{
    state: ()=>({
        user:[],
        access_token:[],
    }),
    persist: true,
    actions:{
        async loginUser(email:string, password:string){
            try{
                const res = await axiosInstance.post('/login',{email, password,  withCredentials: true,})
                this.user = await res.data.user
                this.access_token = await res.data.access_token
                localStorage.setItem("access_token", res.data.access_token)
                console.log('zalogowano poprawnie')
                console.log('Imię użytkownika: ' + res.data.user.name)
                console.log('Email użytkownika: ' +res.data.user.email)
                console.log('Access token: ' +res.data.access_token)
               await useRouter().push('/')
              
             }catch(e){
            console.log(e.response.data)
        }
    },

    }

})