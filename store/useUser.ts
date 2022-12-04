import {defineStore} from 'pinia'
import {axiosInstance} from '@/axios.config'
import {User} from '@/api/types'

export const useUser = defineStore('userlogin',{
    state:()=>({
        user: [],
        point: [],
        invited:[],
        invitationToken: [],
        plan:[],
        answer:[],
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
                this.plan = await res
                this.loading = false
             }catch(e){
            console.log(e.response.data)
             }
          },

          async getInvited(){
            try{
                this.loading = true
                const res = await  axiosInstance.get('/user/getInvitedUsers')
                this.invited = await res.data
                this.loading = false
             }catch(e){
            console.log(e.response.data)
             }
          },

          async getAnswers(){
            try{
                this.loading = true
                const res = await  axiosInstance.get('/user/stats')
                this.answer = await res.data.data
                this.loading = false
             }catch(e){
            console.log(e.response.data)
             }
          },

          async getInvitationToken(){
            try{
                this.loading = true
                const res = await  axiosInstance.get('/user/getInvitationToken')
                this.invitationToken = await res.data.invitationToken
                this.loading = false
             }catch(e){
            console.log(e.response.data)
             }
          },
    },
})