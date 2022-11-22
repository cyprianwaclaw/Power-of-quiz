import {defineStore} from 'pinia'
import {axiosInstance} from '@/axios.config'
import {User} from '@/api/types'

export const userObject = defineStore('user',{
    state:()=>({
        user: [],
    }),
    actions:{},
    getters:{
        async getUser(){
            const res = await  axiosInstance.get<User[]>('/users/current',{
            })
            try{
                this.user = await res.data
             }catch(e){
            console.log(e.response.data)
             }
          },
    },
})