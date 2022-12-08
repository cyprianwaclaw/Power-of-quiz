import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'
import { UserSettingsPersonal, UserSettingsFinancial, UserSettingsCompanyAddress, UserSettingsCompany } from '@/api/types'

interface Test {
    email: string
    name: string
    phone: string
    surname: string
}

export const testStore = defineStore('test', {
    state: () => ({
        tests: []
    }),
    actions: {
        async getTestl() {
            try {
                const res = await axiosInstance.get('/user/settings')
                this.tests = res
            } catch (e) {
                console.log(e.response.data)
            }
        },

    }

})