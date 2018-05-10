<template>
    <div class="product">
        <div v-if="product.status == 'sold' || product.qty == 0" class="badge sold">SOLD</div>
        <div class="product-thumb">
            <div class="flex-fix">
            <!-- <div class="product-thumb" :style="{background: `url(https://media.sweetwater.com/images/items/750/${ product.itemid }-large.jpg) no-repeat scroll center center/78% 85%`}"> -->
                <img :src="`https://media.sweetwater.com/images/items/750/${ product.itemid }-large.jpg`">
            </div>
        </div>
        <div class="product-name">
            <h2>{{ product.title }}</h2>
        </div>
        <p class="product-price">
            <span v-if="product.qty != 0">{{ product.price }}</span>
            <span v-else class="out-of-stock">Out of Stock</span>
        </p>
        <p class="product-button">
            <a href="" v-if="product.status == 'in-stock' && product.qty != 0" class="btn btn--add-to-cart" @click.prevent="addToCart(product)">Add to Cart</a>
        </p>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default  {
        props: {
            product: {
                required: true,
                type: Object,
            }
        },
        methods: {
            ...mapActions({
                addToCart: 'cart/addItem',
            }),
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
.product {
    align-items: stretch;
    background: #fff;
    // border: 1px solid #ccc;
    border-radius: 3px;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    // flex-flow: row wrap;
    flex-wrap: nowrap;
    // flex: 1 1 auto;
    margin: 5px;
    overflow: hidden;
    padding: 0 0 25px 0;
    position: relative;
    text-align: center;
    width: calc( 19% -10px);

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    }

    .product-name {
        display: flex;
        flex: 1 1 auto;
        font-size: 18px;
        justify-content: center;
        margin-bottom: 20px;
        padding: 5px 5px;

        h2 {
            display: block;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
        }
    }

    .product-price {
        align-items: flex-end;
        color: #777;
        display: flex;
        font-size: 30px;
        font-weight: 900;
        justify-content: center;
        flex: 1 1 auto;
        margin: 0;
        padding: 5px;

        .out-of-stock {
            display: block;
            font-size: .7em;
            text-align: center;
            text-transform: uppercase;
        }
    }

    .product-thumb {
        // align-items: center;
        display: flex;
        // flex: 1 1 auto;
        margin: 0;
        padding: 15px 15px 0 15px;
        position: relative;

        .flex-fix {
            height: auto;
            padding-top: 150%;
            position: relative;
            width: 100%;
        }

        img {
            height: 100%;
            max-height: inherit;
            max-width: inherit;
            position: absolute;
                left: 0;
                top: 0;
            width: 100%;
        }
    }

    .product-button {
        display: flex;
        // flex: 1;
        justify-content: center;
        margin: 0;
        margin-top: 10px;
    }

    .badge {
        background: red;
        border-radius: 100%;
        color: #fff;
        font-weight: 900;
        height: 80px;
        line-height: 1;
        padding: 31px 0 23px;
        position: absolute;
            left: 20px;
            top: 20px;
        text-align: center;
        transform: rotate(-21deg);
        width: 80px;
        z-index: 2;
    }
}
</style>