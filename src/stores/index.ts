import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { iListItem, iItem } from '../types/interface'

export const storeDefault = defineStore('default', () => {
    const _list = ref<iListItem>({})

    const getTotal = computed<number>(() => _list.value.resultCount || 0)
    const getList = computed<iItem[]>(() => _list.value.results || [])

    function updateList(res: iListItem): void {
        _list.value = res
    }

    return {
        _list,
        getList,
        getTotal,
        updateList
    }
})
