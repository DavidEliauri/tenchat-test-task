<script setup lang="ts">
    defineProps<{
        isPending?: boolean;
    }>();
</script>

<template>
    <button
        class="relative h-16 w-full rounded-[10px] bg-[#6172F3] fill-white font-Inter text-[20px] font-bold uppercase text-white"
    >
        <span
            :class="{
                '!opacity-0': isPending,
            }"
            class="transition-opacity duration-100"
        >
            <slot />
        </span>

        <span
            :class="{
                '!opacity-100': isPending,
            }"
            class="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-100"
        >
            <BaseLoading />
        </span>
    </button>
</template>
