
import { defineStore } from "pinia"

export const useModalStore = defineStore({
    id: 'ModalStore',
    state: () => ({
        message: ''
    }),
    getters: {
        existsMessage: (state) => Boolean(state.message)
    }
});