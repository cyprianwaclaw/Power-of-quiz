import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuth = defineStore('auth',{

    state: ()=>({
        user:[],
        acess_token:[],
    }),
    actions:{
        
    }

})