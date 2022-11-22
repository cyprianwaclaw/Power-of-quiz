import {defineStore} from 'pinia'
import {Post} from '@/api/types'
import {axiosInstance} from '@/axios.config'

export const user = defineStore('user',{

    state:()=>({
        posts:[]
    }),
    actions:{
        async getPost(){
            const res = await  axiosInstance.get<Post[]>('/quizzes/fast-two',{
            })
            try{
                this.posts = await res
            } catch (e){
                console.error(e)
            }
        }
    }

})