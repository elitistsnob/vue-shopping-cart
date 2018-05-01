<template>
    <div class="product">
        <div class="product-thumb">
            <div class="flex-fix">
            <!-- <div class="product-thumb" :style="{background: `url(https://media.sweetwater.com/images/items/750/${ product.itemid }-large.jpg) no-repeat scroll center center/78% 85%`}"> -->
                <img :src="`https://media.sweetwater.com/images/items/750/${ product.itemid }-large.jpg`">
            </div>
        </div>
        <div class="product-name">
            <h2>{{ product.title }}</h2>
        </div>
        <p class="product-price">${{ product.price }}</p>
        <p class="product-button">
            <a href="" class="btn btn--add-to-cart" @click.prevent="addToCart(product)">Add to Cart</a>
        </p>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default  {
         props: {
             product: {
                 required: true,
                 type: Object,
             }
         },
         methods: {
            ...mapActions({
                addToCart: 'cart/addItem'
            })
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
    padding: 0 0 25px 0;
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
}
</style>