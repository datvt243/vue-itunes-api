<script setup lang="ts">
import VIcon from './VIcon.vue'

import { ref, watch } from 'vue'
import { debouncedRef } from '../custom_ref/debouncedRef'
import { storeDefault } from '../stores/index.js'

const _storeDefault = storeDefault()

const API = 'https://itunes.apple.com/search?term='
const _search = debouncedRef<string>('')
const _entity = ref('album')
const refInputSearch = ref()

watch(_search, async (val: string): Promise<void> => {
    val && (await handlerSearch(val))
})
const handlerSearch = async function (val: string = ''): Promise<void> {
    val &&
        (await fetch(`${API}${val}&entity=${_entity.value}`)
            .then((res) => res.json())
            .then((res) => {
                _storeDefault.updateList(res)
            })
            .catch((err) => console.log(err)))
}
const handlerLearn = function () {
    _search.value = 'd'
    refInputSearch.value && refInputSearch.value.focus()
}
</script>

<template>
    <div class="form">
        <div class="input-group mb-0 position-relative">
            <span class="input-group-text px-3 hover" @click="handlerSearch(_search)">
                <VIcon icon="search" />
            </span>
            <input
                ref="refInputSearch"
                v-model.trim="_search"
                type="text"
                class="form-control form-control-lg"
                placeholder="... search"
            />
            <span v-if="_search" class="clearn" @click="handlerLearn()">
                <VIcon icon="time" />
            </span>
        </div>
    </div>
</template>

<style scoped>
.form {
    border-radius: 999px;
    overflow: hidden;
}
.clearn {
    position: absolute;
    top: 50%;
    right: 10px;
    color: red;
    transform: translateY(-50%);
    z-index: 10;
    line-height: 1;
    cursor: pointer;
}

.hover {
    cursor: pointer;
    :hover {
        opacity: 0.5;
    }
}
</style>
