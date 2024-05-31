import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', () => {
    const email = useCookie('email', {
        default: () => ref(''),
    });
    const password = useCookie('password', {
        default: () => ref(''),
    });
    const token = useCookie('token', {
        default: () => ref(''),
    });

    function dropAuth() {
        email.value = '';
        password.value = '';
        token.value = '';
    }

    return {
        email,
        password,
        token,
        dropAuth,
    };
});

export default useAuthStore;
