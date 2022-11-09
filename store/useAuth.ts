import { defineStore } from 'pinia'
import { axiosInstance } from '@/configAxios'


export const useAuth = defineStore('auth',{

    state: ()=>({
        user:[],
        access_token:[],
    }),

    actions:{
        async loginUser(email:string, password:string){
            try{
                const res = await axiosInstance.post('/login',{email, password})
                this.user = await res.data.user
                this.access_token = await res.data.access_token

                console.log('zalogowano poprawnie')
                console.log('Imię użytkownika: ' + res.data.user.name)
                console.log('Email użytkownika: ' +res.data.user.email)
                console.log('Access token: ' +res.data.access_token)
        }catch(e){
            console.log(e.response.data)
        }
    },

    }

})