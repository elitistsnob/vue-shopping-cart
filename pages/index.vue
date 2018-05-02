<template>
    <div class="site-wrapper">
        <AppHeader />
        <AppHomepage />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppHomepage from '~/components/modules/AppHomepage/AppHomepage';
import AppFooter from '~/components/AppFooter';

export default {
    components: {
        AppHeader,
        AppHomepage,
        AppFooter,
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">

</style>
