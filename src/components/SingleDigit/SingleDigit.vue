<script setup lang="ts">
    const props = defineProps<{
        modelValue: string;
    }>();

    const emit = defineEmits<{
        'update:modelValue': [value: string];
    }>();

    const value = computed({
        get() {
            return props.modelValue;
        },
        set(newValue) {
            emit('update:modelValue', newValue);
        },
    });

    const inputs = ref<HTMLInputElement[]>([]);

    onMounted(() => {
        function onInput() {
            value.value = inputs.value
                .map((input) => input.value)
                .filter((value) => !!value)
                .join('');
        }

        inputs.value.forEach((input, index) => {
            input.addEventListener('paste', (event) => {
                event.preventDefault();
            });

            input.addEventListener('focus', () => {
                input.selectionStart = input.selectionEnd = input.value.length;
            });

            input.addEventListener('input', () => {
                if (input.value === '') {
                    onInput();

                    return;
                }

                if (input.value.length > 1) {
                    input.value = input.value.at(-1)!;
                }

                if (index === inputs.value.length - 1) {
                    input.blur();
                } else {
                    inputs.value[index + 1].focus();
                }

                onInput();
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    (() => {
                        if (index === 0) {
                            return;
                        }

                        inputs.value[index - 1].focus();

                        return;
                    })();
                }

                if (e.key === 'ArrowRight') {
                    (() => {
                        if (index === inputs.value.length - 1) {
                            return;
                        }

                        inputs.value[index + 1].focus();

                        return;
                    })();
                }

                if (e.key === 'Backspace') {
                    (() => {
                        if (index !== 0 && input.value === '') {
                            const prevInput = inputs.value[index - 1];
                            prevInput.value = '';
                            prevInput.focus();
                        }

                        return;
                    })();
                }

                onInput();
            });
        });
    });
</script>

<template>
    <div class="flex justify-between">
        <input
            v-for="n in 6"
            :key="n"
            ref="inputs"
            placeholder="-"
            type="text"
            class="block h-16 w-16 flex-none rounded-[10px] border border-[#8098F9]/50 bg-[#8098F9]/10 text-center font-Inter text-4xl placeholder-[#2D31A6]/20"
        />
    </div>
</template>
