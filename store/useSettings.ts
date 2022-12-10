import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'
import {UserSettings, UserSettingsFinancial, UserSettingsCompanyAddress, UserSettingsCompany} from '@/api/types'

export type UserSettingsPersonal = {
    personal:{
      name: string
      surname: any
      email: string
      phone: string
    }
  }


  export type UserSettingsPersonalState = {
      name: string
      surname: any
      email: string
      phone: string
  }
  

export const useSettings = defineStore('settings', {
    state:() => ({
        userSettingsPersonal:{} as UserSettingsPersonalState,
    }),
    actions: {
        async getuserSettingsPersonal() {
            try {
                const res = await axiosInstance.get< UserSettingsPersonal>('/user/settings',)
               // const personal:UserSettingsPersonal = res.data.personal
                this.userSettingsPersonal = res.data.personal
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