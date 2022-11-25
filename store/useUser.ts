import {defineStore} from 'pinia'
import {axiosInstance} from '@/axios.config'
import {User} from '@/api/types'

export const useUser = defineStore('userlogin',{
    state:()=>({
        user: [],
        plan: [],
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

          async getUserPlan(){
            try{
                this.loading = true
                const res = await  axiosInstance.get('/user/getPlan')
                this.plan = await res.data
                this.loading = false
             }catch(e){
            console.log(e.response.data)
             }
          },
    },
})