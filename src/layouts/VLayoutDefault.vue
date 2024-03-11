<template>
    <div class="container-wrapper">
        <VHeader />
        <main class="main-wrapper">
            <slot></slot>
        </main>
        <VFooter />
    </div>
</template>

<script setup lang="ts">
import VHeader from './VHeader.vue'
import VFooter from './VFooter.vue'
</script>

<style lang="scss" scoped>
.container-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .main-wrapper {
        flex-grow: 1;
    }
}
</style>
