<template>
    <div class="item-wrapper">
        <div class="thumb mb-2">
            <a :href="getCollectionViewUrl" class="link" target="_blank">
                <img :src="artworkUrl100" :alt="getName" class="img-fluid w-100" />
            </a>
        </div>
        <div class="content">
            <p class="h6 font-bold">
                <a :href="getCollectionViewUrl" class="link" target="_blank" v-text="getName"></a>
            </p>

            <p class="artist-name">
                <a :href="getArtistViewUrl" class="link" target="_blank" v-text="getArtistName"></a>
            </p>
            <p class="price" v-text="`Price: ${getCollectionPrice} (${getCurrency})`"></p>
            <p class="year small">
                <span class="text-uppercase" v-text="props.record.primaryGenreName"></span>
                <span class="px-1">-</span>
                <span v-text="getReleaseDate"></span>
            </p>
        </div>
        <!-- <pre v-text="props.record"></pre> -->
    </div>
</template>

<script setup lang="ts">
import type { iItem } from '../types/interface'
import { defineProps, computed } from 'vue'
import type { PropType } from 'vue'
const props = defineProps({
    record: {
        type: Object as PropType<iItem>,
        default() {
            return {}
        }
    }
})

const artworkUrl100 = computed(() => props?.record?.artworkUrl100 || '#')
const getName = computed(() => {
    return props?.record?.wrapperType === 'track'
        ? props.record.trackName
        : props.record.collectionName
})
const getArtistName = computed(() => props?.record?.artistName || '')
const getCollectionPrice = computed<string | number>(() => props?.record?.collectionPrice || 0)
const getCurrency = computed(() => props?.record?.currency || '')
const getArtistViewUrl = computed(() => props?.record?.artistViewUrl || '')
const getCollectionViewUrl = computed(() => props?.record?.collectionViewUrl || '')
const getReleaseDate = computed(() => {
    return props?.record?.releaseDate?.substr(0, 4) || ''
})
</script>

<style scoped>
.item-wrapper {
    height: 100%;
    padding: 10px;
    border: 1px solid #1a1a1a;
    border-radius: 6px;
}
.content > * {
    margin-bottom: 5px;
}
.year,
.price {
    opacity: 0.6;
}

.artist-name {
    color: #ff4949;
}
</style>
