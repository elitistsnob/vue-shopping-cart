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
import AppNav from "~/components/common/AppNav";

export default {
    components: {
        AppNav,
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.site-nav {
    // background: #F62B0A;
    background: #eee;
    color: #fff;

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    a {
        // color: #fff;
        color: #333;
        display: block;
        font-size: 16px;
        font-weight: 900;
        padding: 15px 35px 15px;
        text-decoration: none;
        text-transform: uppercase;
        transition: color .1s ease;

        &:hover {
            // background: #F62B0A;
            color: #F62B0A;
        }
    }
}

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
