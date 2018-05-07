<template>
    <div class="site-wrapper">
        <AppHomepage />
    </div>
</template>

<script>
import AppHomepage from '~/components/modules/AppHomepage/AppHomepage';

export default {
    components: {
        AppHomepage,
    },
    props: {
        headline: 'Shop Guitar Catalog',
        subhead: 'you want it? We go it!',
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">

</style>
