<script setup lang="ts">
    const email = ref('');
    const username = ref('');
    const password = ref('');
    const repeatPassword = ref('');
</script>

<template>
    <div class="flex h-screen">
        <div
            class="flex flex-none basis-1/2 items-center pl-[calc((100vw_-_1200px)_/_2)] pr-[120px]"
        >
            <div class="w-full">
                <h1 class="mb-[25px] text-[40px] font-bold leading-[25px]">
                    Create your account
                </h1>

                <div class="mb-[25px] text-[15px] text-[#71717A]">
                    Unlock all Features!
                </div>

                <div class="space-y-[10px]">
                    <BaseInput
                        v-model="username"
                        icon-src="/sprite.svg#user"
                        placeholder="Username"
                    />

                    <BaseInput
                        v-model="email"
                        icon-src="/sprite.svg#envelope"
                        placeholder="Email"
                    />

                    <BaseInput
                        v-model="password"
                        icon-src="/sprite.svg#shield"
                        placeholder="Password"
                        :is-password="true"
                    />

                    <BaseInput
                        v-model="repeatPassword"
                        icon-src="/sprite.svg#shield"
                        placeholder="Confirm Password"
                        :is-password="true"
                    />
                </div>

                <div class="mt-[25px]">
                    <BaseButton
                        :is-disabled="
                            !username || !email || !password || !repeatPassword
                        "
                        >Sign up</BaseButton
                    >

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
                src="/images/registration.svg"
                class="absolute left-[57px] top-1/2 block -translate-y-1/2"
            />

            <div
                class="absolute left-[57px] top-[calc(50%_+_353px)] w-[606px] text-center text-[#E0EAFF]"
            >
                <div class="text-[20px] font-bold">Join us!</div>

                <div class="font-medium">
                    Just go through the boring process of creating an account.
                </div>
            </div>
        </div>
    </div>
</template>
