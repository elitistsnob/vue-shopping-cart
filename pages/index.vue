<template>
    <div class="site-wrapper">
       <app-header />
        <section class="container">
            <app-products-grid />
        </section>
        <app-footer />
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';
import AppProductsGrid from '~/components/modules/AppProducts/AppProductsGrid';
import AppFooter from '~/components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppProductsGrid,
        AppFooter,
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">

</style>
