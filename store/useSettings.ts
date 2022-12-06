import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'


export const useSettings = defineStore('settings', {
    state: () => ({
        userSettingsPersonal: [],
        userSettingsCompany: [],
        userSettingsFinancial: [],
        success: [],
    }),
    actions: {
        async getUserSettingsPersonal() {
            try {
                const res = await axiosInstance.get('/user/settings',)
                this.userSettingsPersonal = await res.data.personal
            } catch (e) {
                console.log(e.response.data)
            }
        },

        async getuserSettingsCompany() {
            try {
                const res = await axiosInstance.get('/user/settings',)
                this.userSettingsCompany = await res.data.company
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async getuserSettingsFinancial() {
            try {
                const res = await axiosInstance.get('/user/settings',)
                this.userSettingsFinancial = await res.data.financial
            } catch (e) {
                console.log(e.response.data)
            }
        },

        async UpdatePersonal(name:string, surname:string, email:string, phone:number) {
            try {
                const res = await axiosInstance.post('/user/settings', { name, surname, email, phone})
                this.success = await res.data.sucess
                 } catch (e) {
                console.log(e.response.data)
            }
        },
        async UpdateCompany(company_name, nip, regon, city, postcode, street, building_number, house_number) {
            try {
                const res = await axiosInstance.post('/user/settings', { company_name, nip, regon, city, postcode, street, building_number, house_number})
                this.success = await res.data.sucess
                 } catch (e) {
                console.log(e.response.data)
            }
        },
        async RegisterUser(email: string, password: string, password_confirmation: string, invitation: string, name: string) {
            try {
                const res = await axiosInstance.post('/register', { name, email, password, password_confirmation, invitation, withCredentials: true, })
                this.user = await res.data.user
                this.access_token = await res.data.access_token
                localStorage.setItem("access_token", res.data.access_token)
                await useRouter().push('/panel')
                window.location.reload();
                // await window.location.replace("https://power-of-quiz-dev.vercel.app/");
            } catch (e) {
                console.log(e.response.data)
            }
        },

    }

})