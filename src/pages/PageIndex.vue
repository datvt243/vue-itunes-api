<template>
    <div class="container py-3">
        <div class="search-wrapper py-4">
            <VSearch />
        </div>
        <div v-if="_storeDefault.getTotal" class="resule-wrapper">
            <p v-text="`Total: ${_storeDefault.getTotal || 0}`"></p>
            <VList />
        </div>
    </div>
</template>

<script setup lang="ts">
import VSearch from '@/components/VSearch.vue'
import VList from '@/components/VList.vue'

/*  */
import { storeDefault } from '@/stores/index'
const _storeDefault = storeDefault()
</script>
