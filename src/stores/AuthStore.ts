import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', () => {
    const email = ref('');
    const password = ref('');

    return {
        email,
        password,
    };
});

export default useAuthStore;
