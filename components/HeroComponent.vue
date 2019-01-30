<template>
    <section class="hero is-medium is-light">
        <div class="container">
            <div class="hero-body has-text-centered">
                <nuxt-link to="ProductAndService">
                    <div class="item">
                        <h1 class="title">สินค้าและบริการ</h1>
                        <h2 class="subtitle">Gallery & service</h2>
                    </div>
                </nuxt-link>
                <div class="item">
                    <h1 class="title">
                        ไอเดียงานพิมพ์
                    </h1>
                    <h2 class="subtitle">
                        idea product
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style scoped>
.hero-body {
    display: flex;
    flex-direction: row;
    justify-content: center
}

.item {
    padding: 6px 24px;
}
</style>


