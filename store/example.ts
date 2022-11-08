import {defineStore} from 'pinia'
import axios from 'axios'
import {Token} from '@/store/configAxios'

axios.defaults.baseURL = 'https://quiz.bojarm.pl/api'
const token = Token

interface Post{ 
    "success": boolean,
    "data": string[],
    "message": string,
    "count": number
}

export const user = defineStore('user',{

    state:()=>({
        posts:[]
    }),
    actions:{
        async getPost(){
            const res = await  axios.get<Post[]>('/quizzes/fast-two',{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`,
                  }
            })
            try{
                this.posts = await res
            } catch (e){
                console.error(e)
            }
        }
    }

})