<template>
    <div class="app-cart">
        <div v-if="items.length">
            <app-cart-header />
            <app-cart-grid />
            <app-cart-footer />
        </div>

        <div v-else>
            <app-cart-empty />
        </div>
    </div>
</template>


<script>
import {mapState} from 'vuex';
import AppCartHeader from '~/components/modules/AppCart/AppCartHeader';
import AppCartGrid from '~/components/modules/AppCart/AppCartGrid';
import AppCartEmpty from '~/components/modules/AppCart/AppCartEmpty';
import AppCartFooter from '~/components/modules/AppCart/AppCartFooter';

export default {
    components: {
        AppCartHeader,
        AppCartGrid,
        AppCartEmpty,
        AppCartFooter,
    },
    computed: {
        ...mapState({
            items: state => state.cart.items,
        }),
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.app-cart {
    margin: 20px auto 60px;
    max-width: 900px;
    width: 100%;

    .empty-cart {
        font-size: 20px;
        margin: 40px 0;
        text-align: center;

        p {
            text-align: center;
        }
    }

    .face-icon {
        svg {
            fill: #aaa;
            height: 160px;
            width: 160px;
        }
    }
}
</style>