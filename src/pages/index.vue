<script setup lang="ts">
    import useAuthStore from '~/stores/AuthStore';
    import DummyApi, { LoginError } from '~/api/DummyApi/DummyApi';

    const router = useRouter();

    const authStore = useAuthStore();

    const isButtonDisabled = computed(() => {
        if (!!authStore.email && !!authStore.password) {
            return false;
        }

        return true;
    });

    const requestStatus = ref<'default' | 'pending' | 'success' | 'error'>(
        'default',
    );

    const errorMessage = ref('');

    async function login() {
        if (requestStatus.value === 'pending') {
            return;
        }

        errorMessage.value = '';

        requestStatus.value = 'pending';

        try {
            const token = await DummyApi.login(
                authStore.email,
                authStore.password,
            );

            authStore.token = token;

            router.push('/verification');

            requestStatus.value = 'success';
        } catch (e) {
            if (e instanceof LoginError) {
                errorMessage.value = e.fieldsErrors.message ?? '';
            }

            requestStatus.value = 'error';
        }
    }
</script>

<template>
    <div class="flex h-screen">
        <div
            class="flex flex-none basis-1/2 items-center pl-[calc((100vw_-_1200px)_/_2)] pr-[120px]"
        >
            <div class="w-full">
                <h1
                    class="mb-[25px] text-center text-[40px] font-bold leading-[25px]"
                >
                    Login to your Account
                </h1>

                <div
                    class="mb-[25px] flex items-center text-center text-[15px] text-[#71717A]"
                >
                    <hr class="flex-1 border-[#71717A]" />

                    <div class="flex-none basis-[200px]">with email</div>

                    <hr class="flex-1 border-[#71717A]" />
                </div>

                <div class="space-y-[10px]">
                    <BaseInput
                        v-model="authStore.email"
                        icon-src="/sprite.svg#envelope"
                        placeholder="Email"
                    />

                    <BaseInput
                        v-model="authStore.password"
                        icon-src="/sprite.svg#shield"
                        placeholder="Password"
                        :is-password="true"
                    />
                </div>

                <div class="mt-[25px]">
                    <BaseButton
                        @click="login"
                        :is-pending="requestStatus === 'pending'"
                        :is-disabled="isButtonDisabled"
                    >
                        Log in
                    </BaseButton>

                    <BaseMessage :show="!!errorMessage">
                        <div class="pt-5">
                            <div
                                class="rounded bg-[#fef2f2] p-4 text-[#991b1b]"
                            >
                                {{ errorMessage }}
                            </div>
                        </div>
                    </BaseMessage>

                    <div class="mt-5 text-center text-[#71717A]">
                        Don`t have account?
                        <NuxtLink
                            href="/registration"
                            class="font-bold text-[#8098F9]"
                        >
                            Create an account
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="relative flex flex-none basis-1/2 items-center bg-[#6172F3]"
        >
            <img
                src="/images/bg-ring.svg"
                class="absolute left-[57px] top-1/2 block h-[606px] w-[606px] -translate-y-1/2"
            />

            <img
                src="/images/login-screen-image.svg"
                class="absolute left-[57px] top-1/2 block -translate-y-1/2"
            />

            <div
                class="absolute left-[57px] top-[calc(50%_+_353px)] w-[606px] text-center text-[#E0EAFF]"
            >
                <div class="text-[20px] font-bold">
                    Connect with any device.
                </div>

                <div class="font-medium">
                    Everything you need is an internet connection.
                </div>
            </div>
        </div>
    </div>
</template>
