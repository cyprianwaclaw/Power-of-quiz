import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'


export const useAuth = defineStore('auth',{
    state: ()=>({
        user:[],
        access_token:[],
    }),//TODO przekierowanie po zalogowaniu 

    persist: true,
    getters:{

            },
    actions:{
        async LoginUser(email:string, password:string){
            try{
                const res = await axiosInstance.post('/login',{email, password,  withCredentials: true,})
                this.user = await res.data.user
                this.access_token = await res.data.access_token
                localStorage.setItem("access_token", res.data.access_token)
                await useRouter().push('/panel')
             // await window.location.replace("https://power-of-quiz-dev.vercel.app/panel");
              
             }catch(e){
            console.log(e.response.data)
             }
          },

          async RegisterUser(email:string, password:string, password_confirmation:string, invitation:string, name:string){
            try{
                const res = await axiosInstance.post('/register',{name, email, password, password_confirmation, invitation,  withCredentials: true,})
                this.user = await res.data.user
                this.access_token = await res.data.access_token
                localStorage.setItem("access_token", res.data.access_token)
                await useRouter().push('/panel')
              // await window.location.replace("https://power-of-quiz-dev.vercel.app/");
             }catch(e){
            console.log(e.response.data)
             }
          },

          logout() {
            this.user = null;
            this.access_token = null;
            localStorage.removeItem('access_token');
            useRouter().push('/login');
        }

    }

})