import { defineStore } from 'pinia'
import { FastTwo } from '@/api/types'
import { axiosInstance } from '@/axios.config'

export type  CategoryState = {
        id:string,
        name:string,
        created_at:string, 
        updated_at:string,
}

export type  Category = {
    data:{
        id:string,
        name:string,
        created_at:string, 
        updated_at:string,
    }
}


export const Quiz = defineStore('quiz', {

    state: () => ({
        fastTwo: [],
        allQuiz: [],
        categories:[] as CategoryState[],
    }),
    getters: {

    },
    actions: {
        async getFastTwo() {
            const res = await axiosInstance.get<FastTwo[]>('/quizzes/fast-two', {
            })
            try {
                this.fastTwo = await res
            } catch (e) {
                console.error(e)
            }
        },
        async getAllQuiz() {
            const res = await axiosInstance.get('/quizzes', {
            })
            try {
                this.allQuiz = await res.data.data.data
            } catch (e) {
                console.error(e)
            }
        },
        async getCategory() {
            const res = await axiosInstance.get<Category>('/categories', {
            })
            try {
                this.categories = await res.data.data
            } catch (e) {
                console.error(e)
            }
        }
    }

})