import {defineStore} from 'pinia'
import {axiosInstance} from '@/axios.config'
import {User} from '@/api/types'

export const userObject = defineStore('userObject',{
    state:()=>({
        user: [],
        loading: false,
    }),
    actions:{
        async getUser(){
            try{
                this.loading = true
                const res = await  axiosInstance.get('/users/current')
                this.user = await res.data.user
                this.loading = false
             }catch(e){
            console.log(e.response.data)
             }
          },
    },
})