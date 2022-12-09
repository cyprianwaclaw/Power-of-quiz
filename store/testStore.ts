import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'
import { UserSettingsPersonal, UserSettingsFinancial, UserSettingsCompanyAddress, UserSettingsCompany } from '@/api/types'

interface Test {
    personal:{
    email: string
    name: string
    phone: string
    surname: string
    }
}

interface Personal{
    email: string
    name: string
    phone: string
    surname: string
}

interface State {
   test: Personal
}


export const testStore = defineStore('test', {
    state: () => ({
        test:{} as Personal
    }),
    actions: {
        async getTestl() {
            try {
                const res = await axiosInstance.get<Test>('/user/settings')
                this.test = res.data.personal
            } catch (e) {
                console.log(e.response.data)
            }
        },

    }

})