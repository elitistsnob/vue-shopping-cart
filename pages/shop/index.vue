<template>
    <div class="site-wrapper">
        <section class="container">
            <AppProductsGrid />
        </section>
    </div>
</template>

<script>
import AppProductsGrid from '~/components/modules/AppProducts/AppProductsGrid';

export default {
    components: {
        AppProductsGrid,
    }, 
    props: {
        headline: 'Shop Guitar Catalog',
        subhead: 'you want it? We go it!',
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">

</style>
