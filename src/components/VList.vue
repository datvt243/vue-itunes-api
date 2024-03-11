<template>
    <div class="list-wrapper">
        <Suspense>
            <template #fallback>
                <p>...loading</p>
            </template>
            <div class="row">
                <div v-for="(el, idx) in listData" :key="idx" class="col-2 mb-4">
                    <VListItem :record="el" />
                </div>
            </div>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import VListItem from './VListItem.vue'
import { computed } from 'vue'
import { storeDefault } from '@/stores/index'

const _storeDefault = storeDefault()

const listData = computed(() => {
    return _storeDefault.getList
})
</script>
