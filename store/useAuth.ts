import { defineStore } from 'pinia'
import { axiosInstance } from '@/configAxios'


export const useAuth = defineStore('auth',{

    state: ()=>({
        user:[],
        acess_token:[],
    }),

    actions:{
        async loginUser(email:string, password:string){
            try{
                const res = await axiosInstance.post('/login',{email, password})
                this.user = await res.data
        }catch(e){
            console.log(e)
        }
    },

    }

})