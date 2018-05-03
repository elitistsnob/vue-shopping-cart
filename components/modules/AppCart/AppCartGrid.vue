<template>
    <ul class="app-cart-grid">
        <app-cart-item v-for="item in items" :key="item.name" :item="item"/>
    </ul>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
import AppCartItem from '~/components/modules/AppCart/AppCartItem';

export default {
    components: {
        AppCartItem,
    },
    computed: {
        ...mapState({
            items: state => state.cart.items,
        }),
        // cartItems() { return this.$store.getters.cartItems; },
    },
    methods: {
        ...mapActions({
            removeItemFromCart: 'cart/removeItem',
        }),
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.app-cart-grid {
    padding: 0;

    @media all and (max-width: 570px) {
        .app-cart-grid-item {
            align-items: center;
            flex-direction: column;
        }

        .app-cart-grid-title {
            text-align: center;
        }

        .app-cart-grid-title,
        .app-cart-grid-item-qty {
            border-right: 0;
        }
    }
}

@media all and (max-width: 900px) {
    .app-cart {
        margin: 20px auto 0;
    }
}
</style>