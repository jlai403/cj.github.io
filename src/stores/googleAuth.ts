import { useSessionStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useGoogleAuthStore = defineStore('googleAuth', {
  state: () => ({
    googleAccessToken: useSessionStorage('googleAccessToken', '')
  })
})


