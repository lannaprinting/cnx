<template>
    <div>
        <h1 class="title">Product and Service</h1>
        <div class="items">
            <thumbnail-component v-for="(item, index) in 8" :key="index" class="card">
            </thumbnail-component>
        </div>
    </div>
</template>

<script>
import ThumbnailComponent from '@/components/ThumbnailComponent'

export default {
    components: {
        ThumbnailComponent
    },

    data () {
        return {}
    }
}
</script>

<style scoped>
.items {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.item {
    width: 250px;
    background-color: antiquewhite;
    border: 1px solid black;
}
</style>


