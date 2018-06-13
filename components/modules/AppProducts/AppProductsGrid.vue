<template>
    <div class="products">
        <AppProductsItem v-for="item in items" :key="item.itemid" :product="item"/>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';
    import AppProductsItem from '~/components/modules/AppProducts/AppProductsItem.vue';

    export default  {
        components: {
            AppProductsItem,
        },
        mutations: {
            // incrementItemQuantity (state, { id }) {
            //     const cartItem = state.items.find(item => item.itemid === id)
            //     cartItem.qty++
            // },
        },
        data() {
            return  {

            }
        },
        computed: {
            ...mapGetters({
                items: 'shop/getItems',
                // getInventory: 'shop/getInventory',
            }),
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
.products {
    display: flex;
    color: #333;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1400px;
    padding: 40px 0;

    @media all and (max-width: 930px) {
        .product {
            width: 23%;
        }
    }

    @media all and (max-width: 730px) {
        .product {
            width: 30%;
        }
    }

    @media all and (max-width: 570px) {
        .product {
            width: calc(50% - 10px);
        }
    }

    @media all and (max-width: 430px) {
        .product {
            width: 80%;
        }
    }
}
</style>