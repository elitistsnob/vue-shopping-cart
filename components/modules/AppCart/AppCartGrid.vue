<template>
    <ul class="app-cart-grid">
        <app-cart-item v-for="item in items" :key="item.name" :item="item"/>
    </ul>
</template>

<script>
import {mapState} from 'vuex';
import AppCartItem from '~/components/modules/AppCart/AppCartItem';

export default {
    components: {
        AppCartItem,
    },
    computed: {
        ...mapState({
            items: state => state.cart.items,
        }),
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.app-cart-footer {
    background: #ddd;
    color: #fff;
    padding: 20px;

    .app-cart-total {
        color: #333;
        display: flex;
        font-size: 1.5em;
        margin: 0;

        span {
            display: block;
            text-align: right;
        }
    }
}

.app-cart-grid {
    padding: 0;
}
</style>