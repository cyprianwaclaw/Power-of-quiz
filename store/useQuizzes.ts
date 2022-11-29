import {defineStore} from 'pinia'
import {FastTwo} from '@/api/types'
import {axiosInstance} from '@/axios.config'

export const Quiz = defineStore('quiz',{

    state:()=>({
        fastTwo:[],
        allQuiz:[],
    }),
    getters:{

    },
    actions:{
        async getFastTwo(){
            const res = await  axiosInstance.get<FastTwo[]>('/quizzes/fast-two',{
            })
            try{
                this.fastTwo = await res
            } catch (e){
                console.error(e)
            }
        },
        async getAllQuiz(){
            const res = await  axiosInstance.get('/quizzes',{
            })
            try{
                this.allQuiz = await res.data.data
            } catch (e){
                console.error(e)
            }
        }
    }

})