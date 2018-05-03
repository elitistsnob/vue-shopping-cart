<template>
    <div class="site-wrapper">
        <section class="container">
            <app-products-grid />
        </section>
    </div>
</template>

<script>
import AppProductsGrid from '~/components/modules/AppProducts/AppProductsGrid';

export default {
    components: {
        AppProductsGrid,
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">

</style>
