<template>
    <ul class="app-cart-grid">
        <AppCartItem v-for="item in items" :key="item.name" :item="item"/>
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
    },
    methods: {

    },
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