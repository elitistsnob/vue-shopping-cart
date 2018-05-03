<template>
    <li class="app-cart-grid-item">
        <div class="app-cart-grid-thumb">
            <img :src="item.thumb">
        </div>

        <div class="app-cart-grid-title">
            <h4>{{ item.title }}</h4>
        </div>

        <div class="app-cart-grid-item-qty">
            <input type="number" value="1">
            <div class="qty-controls">
                <span class="" @click="removeFromCart(item.itemid)">Remove</span>
            </div>
            
        </div>

        <div class="app-cart-grid-item-total">
            <strong>{{ item.price | currencyFormat }}</strong>
        </div>
    </li>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import currencyFormat from '~/assets/js/currencyFormat'; 

 export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapActions({
            removeFromCart: 'cart/removeItem',
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

    &:nth-of-type(even) {
        background: #f1f1f1;
    }
}

.app-cart-grid-thumb {
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
    max-width: 440px;
    padding: 10px;
    text-align: left;

    h4 {
        display: block;
    }
}

.app-cart-grid-item-qty {
    // align-items: center;
    border-right: 1px solid #ddd;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: center;
    min-width: 130px;
    padding: 10px 15px;
    text-align: center;

    input[type=number] {
        -webkit-appearance: none;
        border: 1px solid #ccc;
        border-radius: 3px;
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
    padding: 10px 10px 10px 20px;

    strong {
        width: 100%;
    }

    span {
        display: block;
        margin-left: 20px;
    }
}
</style>