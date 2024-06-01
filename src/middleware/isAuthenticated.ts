import useAuthStore from '~/stores/AuthStore';

export default defineNuxtRouteMiddleware(() => {
    const authStore = useAuthStore();

    if (!authStore.token) {
        return abortNavigation();
    }
});
