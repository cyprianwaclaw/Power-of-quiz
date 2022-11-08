import {defineStore} from 'pinia'
import axios from 'axios'

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
            const res = await axios.get<Post[]>('https://quiz.bojarm.pl/api/quizzes/fast-two',{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer 71|VfqwT2hId4gmZXjag0SOuwA23AwMiZwvMV8WfinQ`,
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