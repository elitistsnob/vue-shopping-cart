<template>
    <div class="site-wrapper">
        <section class="container">
            <AppCart />
        </section>
    </div>
</template>

<script>
import AppProductsGrid from '~/components/modules/AppProducts/AppProductsGrid';
import AppCart from '~/components/modules/AppCart/AppCart';

export default {
    components: {
        AppProductsGrid,
        AppCart,
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">

</style>
