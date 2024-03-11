<template>
    <footer class="footer-wrapper border-top py-2">
        <div class="container">
            <p class="text-center mb-0 small">
                <span v-text="`${_year} © copyright by me`"></span>
                <span class="vue-version ps-2" v-text="`Vue.js ver ${version}`"></span>
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { version, computed } from 'vue'
const _year = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.vue-version {
    opacity: 0.4;
    font-style: italic;
}
</style>
