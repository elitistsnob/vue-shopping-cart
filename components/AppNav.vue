<template>
    <nav class="nav">
        <ul class="menu">
            <li><a href="/shop">Shop</a></li>
            <li><a href="/tips">Tips & Tricks</a></li>
            <li><a href="/locate">Find a dealer</a></li>
            <li><a href="/support">Support</a></li>
        </ul>
    </nav>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

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
