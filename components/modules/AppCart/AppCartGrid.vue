<template>
    <transition-group
        v-bind:css="false"
        name="list"
        tag="ul"
        class="app-cart-grid"
        id="app-cart-grid"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        ref="cartGrid">
        <AppCartItem v-for="item in items" :key="item.itemid" :item="item" class=""/>
    </transition-group>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
import AppCartItem from '~/components/modules/AppCart/AppCartItem';

export default {
    components: {
        AppCartItem,
    },
    data() {
        return {
            showDiv: false,
        }
    },
    computed: {
        ...mapState({
            items: state => state.cart.items,
        }),
    },
    methods: {
        beforeLeave(el) {
            let gridHeight = this.$refs.cartGrid.$el.clientHeight;
            this.$refs.cartGrid.$el.style.height = `${gridHeight}px`;

        },
        leave(el) {
            let gridHeight = this.$refs.cartGrid.$el.clientHeight;

            // document.getElementById('app-cart-grid').style.height = gridHeight;
            let itemHeight = el.clientHeight;

            // this.$refs.cartGrid.$el.style.height = `${gridHeight}px`;
            // this.$nextTick(() => {
            this.$refs.cartGrid.$el.style.height = gridHeight - itemHeight - 3 + 'px';
            // });

        },
        afterLeave(el) {
            // this.$refs.cartGrid.$el.style.removeProperty('height');

            // let gridHeight = document.getElementById('app-cart-grid').clientHeight;
            // this.$nextTick(() => {
            //      this.$refs.cartGrid.$el.style.height = '';
            // })

            // let gridsHeight = document.getElementById('app-cart-grid').clientHeight + 'px';
        },
    },
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.app-cart-grid {
    height: inherit;
    padding: 0;
    position: relative;
    transition: height .5s ease;

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

// .list-enter-active,
// .list-leave-active {
//     transition: all 3s;
// }

.list-enter,
.list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}

.list-leave-active {
    position: absolute;
}
</style>