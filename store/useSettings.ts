import { defineStore } from 'pinia'
import { axiosInstance } from '@/axios.config'
import { StateSettings, UserSettingsPersonal, UserSettingsFinancial, UserSettingsCompanyAddress, UserSettingsCompany } from '@/api/types'

export const useSettings = defineStore('settings', {
    state: () => ({
        success: {},
        userSettingsPersonal: {},
        userSettingsCompany: {},
        userSettingsCompanyAddress: {},
        userSettingsFinancial: {},
    } as StateSettings),
    actions: {
        async getUserSettingsPersonal() {
            try {
                const res = await axiosInstance.get<UserSettingsPersonal>('/user/settings',)
                this.userSettingsPersonal = res.data.personal
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async getUserSettingsCompany() {
            try {
                const res = await axiosInstance.get<UserSettingsCompany>('/user/settings',)
                this.userSettingsCompany = res.data.company
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async getUserSettingsCompanyAddress() {
            try {
                const res = await axiosInstance.get<UserSettingsCompanyAddress>('/user/settings',)
                this.userSettingsCompanyAddress = res.data.company.address
            } catch (e) {
                console.log(e.response.data)
            }
        },
        async getUserSettingsFinancial() {
            try {
                const res = await axiosInstance.get<UserSettingsFinancial>('/user/settings',)
                this.userSettingsFinancial = res.data.financial
            } catch (e) {
                console.log(e.response.data)
            }
        },

        async UpdatePersonal(name: string, surname: string, email: string, phone:string) {
            try {
                const res = await axiosInstance.post('/user/settings', { name, surname, email, phone })
                this.success = await res.data.sucess
            } catch (e) {
                console.log(e.response.data)
            }
        },

        async UpdateTest(name: string) {
            try {
                const res = await axiosInstance.post('/user/settings', { name })
                this.success = await res.data.sucess
                window.location.reload();
            } catch (e) {
                console.log(e.response.data)
            }
        },


        async UpdateCompany(
            company_name: string,
            nip: string,
            regon: string,
            postcode: string,
            city: string,
            street: string,
            building_number: string,
            house_number: string,
        ) {
            try {
                const res = await axiosInstance.post('/user/settings', {
                    company_name,
                    nip,
                    regon,
                    postcode,
                    city,
                    street,
                    building_number,
                    house_number,
                })
                this.success = await res.data.sucess
            } catch (e) {
                console.log(e.response.data)
            }
        },


    }

})