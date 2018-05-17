<template>
    <li class="app-cart-grid-item list-complete-item">
        <div class="app-cart-grid-thumb">
            <img :src="item.thumb">
        </div>

        <div class="app-cart-grid-title">
            <h4>{{ item.title }}</h4>
        </div>

        <div class="app-cart-grid-item-qty">
            <NumberInputSpinner
                :max="item.inventory"
                :min="1"
                :inputClass="spinner"
                :buttonClass="spinnerButton"
                :integerOnly="true"
                v-model="item.qty"
            />
            <!-- <input type="number" @focus="qtyChange( { item, qty: + $event.target.value } )" name="qty"  :value="item.qty"> -->
            <div class="qty-controls">
                <span style="font-weight: 600;">x {{ item.qty }} </span> | <span class="" @click="removeFromCart(item)">Remove</span>
            </div>

        </div>

        <div class="app-cart-grid-item-total">
            <strong :number="number">{{ item.price * item.qty | currencyFormat }}</strong>
        </div>
    </li>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';
import currencyFormat from '~/assets/js/currencyFormat';
import NumberInputSpinner from 'vue-number-input-spinner'


 export default {
    components: {
        NumberInputSpinner,
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    computed: {

    },
    methods: {
        ...mapActions({
            removeFromCart: 'cart/removeFromCart',
            itemQty: 'cart/itemQty',
            qtyChange: 'cart/qtyChange',
        }),
    },
    filters: {
        currencyFormat,
    },
 }

</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.app-cart-grid-item {
    // align-items: center;
    border-bottom: 2px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    transition: all .5s ease;
    width: 100%;

    &:nth-of-type(even) {
        background: #f1f1f1;
    }
}

.app-cart-grid-thumb {
    background: #fff;
    // border: 1px solid #ddd;
    max-width: 80px;
    padding: 10px 15px;

    img {
        display: block;
        max-width: 50px;
    }
}

.app-cart-grid-title {
    align-items: center;
    border-right: 1px solid #ddd;
    display: flex;
    max-width: 490px;
    padding: 10px 20px;
    text-align: left;
    width: 100%;

    h4 {
        display: block;
    }
}

.app-cart-grid-item-qty {
    // align-items: center;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
    // justify-content: center;
    min-width: 150px;
    padding: 10px 15px;
    text-align: center;

    .vnis {
        margin-left: 1em;
        width: 100%;
    }

    .vnis__button {
        -webkit-font-smoothing: none;
        background: #f1f1f1 !important;
        border: 1px solid #ccc !important;
        color: #555 !important;
        font-weight: 600;
        transition: background .1s ease !important;
        width: 25px !important;

        &:hover {

            // background: darken(#ccc, 8%) !important;
            background: #333 !important;
            border-color: #333 !important;
            color: #fff !important;
        }

        &:first-of-type {
            border-radius: 4px 0 0 4px;
        }

        &:last-of-type {
            border-radius: 0 4px 4px 0;
        }
    }

    input[type=number] {
        -webkit-appearance: none;
        border: 1px solid #ccc;
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        font-family: 'Montserrat';
        font-size: 16px;
        margin-bottom: 5px;
        // margin-top: 20px;
        max-width: 65px;
        padding: 10px;
        text-align: center
    }

    span {
        cursor: pointer;
        display: block;
        font-size: 10px;
        font-weight: 600;
        padding: 3px 10px;
        // text-transform: uppercase;

        &:hover {
            text-decoration: underline;
        }
    }

    .qty-controls {
        align-items: center;
        display: flex;
        font-size: 12px;
        justify-content: center;
        margin-top: 5px;
    }
}

.app-cart-grid-item-total {
    align-items: center;
    display: flex;
    font-size: 1.5em;
    max-width: 180px;
    padding: 10px 10px 10px 20px;
    text-align: right;
    width: 100%;

    strong {
        width: 100%;
    }

    span {
        display: block;
        margin-left: 20px;
    }
}
</style>