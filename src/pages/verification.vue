<script setup lang="ts">
    import useAuthStore from '~/stores/AuthStore';

    definePageMeta({
        middleware: ['is-authenticated'],
    });

    const authStore = useAuthStore();

    const otp = ref<string>('');

    const showModal = ref(false);

    const router = useRouter();

    function onDeleteEmailClick() {
        authStore.email = '';
        authStore.password = '';
        authStore.token = '';

        router.replace('/');
    }
</script>

<template>
    <div class="flex h-screen">
        <div
            class="flex flex-none basis-1/2 items-center pl-[calc((100vw_-_1200px)_/_2)] pr-[120px]"
        >
            <div class="w-full">
                <h1 class="mb-[25px] text-[40px] font-bold leading-[25px]">
                    Enter OTP
                </h1>

                <div class="mb-[25px]">
                    <div class="text-[15px] text-[#71717A]">
                        Sent OTP on
                        <span class="font-semibold text-[#8098F9]">
                            {{ authStore.email }}
                        </span>
                    </div>

                    <button
                        @click="showModal = true"
                        class="font-bold text-[#8098F9]"
                    >
                        Change email
                    </button>

                    <Teleport to="body">
                        <BaseDialog
                            @close="
                                () => {
                                    showModal = false;
                                }
                            "
                            :show="showModal"
                        >
                            <template #default>
                                <h3
                                    class="text-base font-semibold leading-6 text-gray-900"
                                    id="modal-title"
                                >
                                    Вернуться к регистрации?
                                </h3>

                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">
                                        Если вы вернетесь к регистрации, ваша
                                        почта будет удалена.
                                    </p>
                                </div>
                            </template>

                            <template #buttons>
                                <div
                                    class="sm:flex sm:flex-row-reverse sm:gap-3 sm:px-6"
                                >
                                    <div class="w-auto">
                                        <BaseDialogButtonWarning
                                            @click="onDeleteEmailClick"
                                        >
                                            Удалить
                                        </BaseDialogButtonWarning>
                                    </div>

                                    <div class="w-auto">
                                        <BaseDialogButtonDefault
                                            @click="showModal = false"
                                        >
                                            Отмена
                                        </BaseDialogButtonDefault>
                                    </div>
                                </div>
                            </template>
                        </BaseDialog>
                    </Teleport>
                </div>

                <div>
                    <SingleDigit v-model="otp" />
                </div>

                <div class="mt-[25px]">
                    <BaseButton :is-disabled="otp.length < 6">
                        Sign up
                    </BaseButton>
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
                src="/images/verification.svg"
                class="absolute left-[57px] top-1/2 block -translate-y-1/2"
            />

            <div
                class="absolute left-[57px] top-[calc(50%_+_353px)] w-[606px] text-center text-[#E0EAFF]"
            >
                <div class="text-[20px] font-bold">
                    It's just OTP verification
                </div>

                <div class="font-medium">
                    You are one step away from recovering your password.
                </div>
            </div>
        </div>
    </div>
</template>
