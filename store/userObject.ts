import {defineStore} from 'pinia'
import {axiosInstance} from '@/axios.config'
import {User} from '@/api/types'

export const userObject = defineStore('user',{
    state:()=>({
        user: [],
        name:[],
        loading: false,
    }),
    actions:{},
    getters:{
        async getUserName(){
            const res = await  axiosInstance.get('/users/current',{
            })
            try{
                this.loading = true
                this.name = await res.data.user.name
                this.loading = false
             }catch(e){
            console.log(e.response.data)
             }
          },
    },
})