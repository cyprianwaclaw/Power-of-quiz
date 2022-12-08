import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'
import {UserSettingsPersonal, UserSettingsFinancial, UserSettingsCompanyAddress, UserSettingsCompany} from '@/api/types'

interface StateSettings{
    userSettingsPersonal: UserSettingsPersonal[],
    userSettingsFinancial: UserSettingsFinancial[],
    userSettingsCompanyAddress: UserSettingsCompanyAddress[],
    userSettingsCompany: UserSettingsCompany[]
}

export const useSettings = defineStore('settings', {
    state:():StateSettings => ({
        userSettingsPersonal:[],
        userSettingsCompany: [],
        userSettingsCompanyAddress: [],
        userSettingsFinancial: [],
    }),
    actions: {
        async userSettingsPersonal() {
            try {
                const res = await axiosInstance.get<UserSettingsPersonal[]>('/user/settings',)
               // const personal:UserSettingsPersonal = res.data.personal
                this.userSettingsPersonal = res
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async userSettingsCompany() {
            try {
                const res = await axiosInstance.get('/user/settings',)
                this.userSettingsCompany = await res.data.company
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async userSettingsCompanyAddress() {
            try {
                const res = await axiosInstance.get('/user/settings',)
                this.userSettingsCompanyAddress = await res.data.company.address
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async userSettingsFinancial() {
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