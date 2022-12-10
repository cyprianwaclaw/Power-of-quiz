import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'
import {UserSettings, UserSettingsFinancial, UserSettingsCompanyAddress, UserSettingsCompany} from '@/api/types'

export const useSettings = defineStore('settings', {
    state:() => ({
        userSettings:{} as UserSettings,
    }),
    actions: {
        async getuserSettings() {
            try {
                const res = await axiosInstance.get<UserSettings>('/user/settings',)
               // const personal:UserSettingsPersonal = res.data.personal
                this.userSettings = res.data
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
        async UpdateCompany(company_name:string, nip:number, regon:number, city:string, postcode:any, street:string, building_number:string, house_number:string) {
            try {
                const res = await axiosInstance.post('/user/settings', { company_name, nip, regon, city, postcode, street, building_number, house_number})
                this.success = await res.data.sucess
                 } catch (e) {
                console.log(e.response.data)
            }
        },

    }

})