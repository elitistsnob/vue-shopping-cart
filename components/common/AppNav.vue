<template>
    <nav class="nav">
        <ul class="menu">
            <li><nuxt-link to="/shop">Shop</nuxt-link></li>
            <li><nuxt-link to="/tips">Tips & Tricks</nuxt-link></li>
            <li><nuxt-link to="/locate">Find a dealer</nuxt-link></li>
            <li><nuxt-link to="/support">Support</nuxt-link></li>
        </ul>
    </nav>
</template>

<script>
import AppNav from "~/components/common/AppNav.vue";

export default {
    components: {
        AppNav,
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
nav {
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        font-weight: 600;
        text-decoration: none;
    }
}
</style>
