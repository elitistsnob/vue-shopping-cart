<template>
    <div>
        <div class="site-banner">Welcome to Hipster Guitars. A <span>safe-space</span> for Millenial musicians.</div>
        <header class="site-header">
            <nuxt-link to="/" class="site-logo">
                <app-logo />
            </nuxt-link>
            <nuxt-link to="/cart" class="cart-icon"><app-cart-icon /></nuxt-link>
            <div class="site-nav"><app-nav /></div>
        </header>

        <div v-if="$nuxt.$route.path === '/'"></div>
        <div v-else>
            <section class="promo">
                <div class="inner">
                    <h1 v-if="$nuxt.$route.name == 'shop'">Shop Guitars</h1>
                    <h1 v-if="$nuxt.$route.name == 'tips'">Tips &amp; Tricks</h1>
                    <h1 v-if="$nuxt.$route.name == 'locate'">Find a dealer</h1>
                    <h1 v-if="$nuxt.$route.name == 'support'">Support</h1>
                    <h1 v-if="$nuxt.$route.name == 'cart'">Your Cart </h1>
                    <h1 v-if="$nuxt.$route.name == 'index'">Welcome</h1>
                </div>
            </section>
        </div>
    </div>  
</template>

<script>
            
import {mapState} from 'vuex';
import AppLogo from "~/components/common/AppLogo";
import AppNav from "~/components/common/AppNav";
import AppCartIcon from "~/components/common/AppCartIcon";

export default {
    components: {
        AppNav,
        AppLogo,
        AppCartIcon,
    },
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.site-header {
    .site-header {
        // border-bottom: 1px solid #eee;
        // box-shadow: 0 2px 10px rgba(0, 0, 0, .08);
        position: relative;
        text-align: center;
    }


    @media all and (max-width: 730px) {
        .nav {
            ul {
                border-top: 1px solid #ddd;
                flex-direction: column;
            }

            a {
                border-bottom: 1px solid #ddd;
                padding: 10px;
            }
        }

        .cart-icon {
            right: 5px;
        }
    }
}

</style>