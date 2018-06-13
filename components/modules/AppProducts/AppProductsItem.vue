<template>
    <div class="product" :class="{ selected : inCart }">
        <div v-if="product.status == 'sold' || product.inventory === 0" class="badge sold">SOLD</div>
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
            <span v-if="product.inventory > 0">{{ product.price | currencyFormat }}</span>
            <span v-else class="out-of-stock">Out of Stock</span>
        </p>
        <p class="product-stock">
            <span v-if="product.inventory > 0">
                {{ message }}
                <span v-if="product.inventory === 1">ONLY </span>{{ product.inventory }} available</span>
            <span v-else></span>
        </p>
        <p class="product-button">
            <a href="" v-if="product.status == 'in-stock' && product.inventory > 0" :class="className" class="btn btn--add-to-cart" @click.prevent="addToCart(product); requestSelected(); classActive(); changeInventory(product); incrementQty()">{{ buttonText }} <span class="btn-qty">{{ product.itemQty }}</span></a>
        </p>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';
    import currencyFormat from '~/assets/js/currencyFormat';

    export default  {
        data() {
            return {
                isActive: false,
                message: '',
                buttonText: 'Add To Cart',
                className: '',
                currentQty: 0,
            }
        },
        props: {
            product: {
                required: true,
                type: Object,
            }
        },
        computed: {
            ...mapGetters({
                getItemQty: 'shop/getItemQty',
                // getInventory: 'shop/getInventory',
            }),
            ...mapState({
                // items: state => state.cart.items,
                // products: state => state.shop.items,
            }),
            inCart() {
                return this.product.itemQty > 0
                // alert(this.product.itemQty)
            }
        },
        methods: {
            ...mapActions({
                addToCart: 'cart/addItem',
                changeInventory: 'shop/changeInventory',
            }),
            // addedToCart() {
            //     this.isActive = !this.isActive;
            // },
            requestSelected() {
                this.buttonText = 'Added';
            },
            classActive() {
                this.className = 'active';
            },
            incrementQty() {
                this.currentQty++;
            }
        },
        filters: {
            currencyFormat,
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
.selected .btn--add-to-cart {
    background: green;
    padding-right: 55px;

    .btn-qty {
        background: darken(green, 10%) !important;
        display: block !important;
        font-weight: 700;
    }

}

.product {
    align-items: stretch;
    background: #fff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 5px 5px 50px;
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
        padding: 5px 5px;

        h2 {
            display: block;
            font-size: 16px;
            font-weight: 700;
            padding: 0 10px;
            text-transform: uppercase;
        }
    }

    .product-stock {
        color: #888;
        font-size: 12px;
        font-weight: 700;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .product-price {
        align-items: flex-end;
        color: #777;
        display: flex;
        flex: 1 1 auto;
        font-size: 30px;
        font-weight: 900;
        justify-content: center;
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
        display: flex;
        margin: 0 auto;
        padding: 15px 15px 0 15px;
        position: relative;
        width: 75%;

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
        justify-content: center;
        margin: 0;
        margin-top: 10px;

        .btn--add-to-cart {
            position: relative;
        }

        // .btn--add-to-cart.active {
        //     background: green;
        //     padding-right: 55px;

        //     .btn-qty {
        //         background: darken(green, 10%);
        //         display: block;
        //         font-weight: 700;
        //     }
        // }

        .btn-qty {
            background: darken(red, 20%);
            border-radius: 0 4px 4px 0;
            display: none;
            padding: 10px;
            position: absolute;
                right: 0;
                top: 0;
        }
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