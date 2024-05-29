<script setup lang="ts">
    const props = defineProps<{
        iconSrc: string;
        placeholder?: string;
        isPassword?: boolean;
    }>();

    const type = ref<'text' | 'password'>(
        props.isPassword ? 'password' : 'text',
    );
</script>

<template>
    <div class="relative">
        <svg
            class="absolute left-[10px] top-1/2 block h-[30px] w-[30px] -translate-y-1/2 fill-[#2D31A6]/20"
        >
            <use :xlink:href="iconSrc"></use>
        </svg>

        <button
            v-if="isPassword"
            @click="
                () => {
                    if (type === 'password') {
                        type = 'text';

                        return;
                    }

                    type = 'password';
                }
            "
            class="absolute right-[10px] top-1/2 block -translate-y-1/2 fill-[#2D31A6]/20 transition-colors duration-100 hover:fill-[#2D31A6] focus:fill-[#2D31A6]"
        >
            <svg class="block h-[30px] w-[30px]">
                <use xlink:href="/sprite.svg#eye"></use>
            </svg>
        </button>

        <input
            :placeholder="placeholder"
            :type="type"
            :class="{
                'pr-[50px]': isPassword,
            }"
            class="h-16 w-full rounded-[10px] border border-[#8098F9]/50 bg-[#8098F9]/10 px-[10px] pl-[50px] font-Inter text-lg placeholder-[#2D31A6]/20 outline-none transition duration-75 focus:border-[#6172F3] focus:ring focus:ring-[#6172F3] focus:ring-opacity-50"
        />
    </div>
</template>
