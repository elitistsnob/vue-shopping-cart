<template>
    <div>
        <footer class="app-cart-footer">
            <p class="app-cart-total">
            <strong>Cart total: </strong>  <span>{{ total | currencyFormat }}</span></p>
        </footer>
        <div class="app-cart-checkout">
            <nuxt-link to="/cart/checkout" class="btn btn--add-to-cart">Checkout</nuxt-link>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import currencyFormat from '~/assets/js/currencyFormat';

export default {
    computed: {
        ...mapState({
            items: state => state.cart.items,

        }),
        total() {
            return this.items.reduce((total, item) => total + item.price * item.qty, 0);
        }
    },
    filters: {
        currencyFormat,
    },
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.app-cart-footer {
    background: #ddd;
    color: #fff;
    padding: 20px;

    .app-cart-total {
        color: #333;
        display: block;
        font-size: 1.5em;
        margin: 0;
        text-align: right;

        strong {
            font-weight: 700;
        }

        span {
            display: inline-block;
            font-size: 1.35em;
            font-weight: 900;
            margin-left: 10px;
        }
    }
}

.app-cart-checkout {
    font-size: 1.5em;
    padding: 30px 0 0;
    text-align: right;
}
</style>