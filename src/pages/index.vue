<script setup lang="ts"></script>

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
                    class="flex items-center text-center text-[15px] text-[#71717A]"
                >
                    <hr class="flex-1 border-[#71717A]" />

                    <div class="flex-none basis-[200px]">with email</div>

                    <hr class="flex-1 border-[#71717A]" />
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
