import { defineStore } from "pinia"
import axiosInstance from "@/plugins/axios"
import type { SuratState } from "@/type"

export const useSuratStore = defineStore('suratStore', {
    state: (): SuratState => ({
        suratList: [],
        loading: false,
        error:null
    }),
    actions: {
        async getAllSurat(endpoint:string) {
            this.loading = true;
            this.error = null

            try {
                const surat = await axiosInstance.get(endpoint)
                this.suratList = surat.data.data
                console.log('Surat List:', this.suratList);
            } catch (error) {   
                this.error = "Failed"
            } finally {
                this.loading = false;
            }
        },
        
        async getSuratbyNomor(nomor:number) {
            try {
                const surat = await axiosInstance.get(`/${nomor}`)
                this.suratList = surat.data.data
                console.log('Nomorrrrrr:', this.suratList);
            } catch {
                
            }
        }
  },
})