<template>
    <div>
        <div class="site-banner">Welcome to Hipster Guitars. A <span>safe-space</span> for Millenial guitar fans.</div>
        <header class="site-header">
            <a href="/" class="site-logo">
                <app-logo />
            </a>
            <nuxt-link to="/cart" class="cart-icon"><app-cart-icon /></nuxt-link>
            <div class="site-nav"><app-nav /></div>
        </header>
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
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import AppNav from "~/components/AppNav.vue";
import AppCartIcon from "~/components/AppCartIcon.vue";

export default {
    components: {
        AppNav,
        AppLogo,
        AppCartIcon,
    }
};
</script>