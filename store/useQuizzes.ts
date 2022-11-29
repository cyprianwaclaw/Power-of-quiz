import {defineStore} from 'pinia'
import {FastTwo} from '@/api/types'
import {axiosInstance} from '@/axios.config'

export const Quiz = defineStore('quiz',{

    state:()=>({
        fastTwo:[]
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
        }
    }

})