import {defineStore} from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = 'https://quiz.bojarm.pl/api'
const token = '71|VfqwT2hId4gmZXjag0SOuwA23AwMiZwvMV8WfinQ'

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