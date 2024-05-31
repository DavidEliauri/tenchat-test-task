<script setup lang="ts">
    import gsap from 'gsap';

    defineProps<{
        show: boolean;
    }>();

    let animation: GSAPTimeline | null = null;

    function onEnter(el: Element, done: any) {
        animation = gsap.timeline({
            onComplete: () => {
                done();
            },
        });

        animation.to(el, {
            height: 'auto',
            duration: 0.5,
        });

        animation.to(el, {
            autoAlpha: 1,
            duration: 0.5,
        });
    }

    function onLeave(el: Element, done: any) {
        animation = gsap.timeline({
            onComplete: () => {
                done();
            },
        });

        animation.to(el, {
            autoAlpha: 0,
            duration: 0.25,
        });

        animation.to(el, {
            height: 0,
            duration: 0.25,
        });
    }

    function onCancel() {
        animation?.progress(1);
    }
</script>

<template>
    <Transition
        @enter="onEnter"
        @enter-cancelled="onCancel"
        @leave="onLeave"
        @leave-cancelled="onCancel"
    >
        <div
            v-if="show"
            class="invisible h-0 opacity-0"
        >
            <slot />
        </div>
    </Transition>
</template>
