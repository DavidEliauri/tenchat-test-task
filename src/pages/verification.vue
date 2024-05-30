<script setup lang="ts">
    const otp = ref<string>('');
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
                            johndoe@gmail.com
                        </span>
                    </div>

                    <button class="font-bold text-[#8098F9]">
                        Change email
                    </button>
                </div>

                <div>
                    <SingleDigit v-model="otp" />
                </div>

                <div class="mt-[25px]">
                    <BaseButton>Sign up</BaseButton>

                    <div class="mt-5 text-center text-[#71717A]">
                        You have account?
                        <NuxtLink
                            href="/"
                            class="font-bold text-[#8098F9]"
                        >
                            Login now
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
