<template>
    <div>
        <div class="sale-message">
            <div class="inner">
                <h2>Newest Arrivals!</h2>
                <p>
                    Bacon ipsum dolor amet doner meatball pork rump shoulder. Meatloaf corned beef leberkas, andouille ball tip pork chop pig venison swine fatback. Capicola brisket burgdoggen pancetta venison boudin porchetta shoulder turkey shankle. Pancetta porchetta corned beef burgdoggen, ball tip strip steak salami swine filet mignon spare ribs boudin. Swine ham biltong filet mignon pastrami rump, beef ribs leberkas. Burgdoggen frankfurter flank turkey ball tip pork alcatra meatball ham boudin kevin shank hamburger shoulder.
                </p>
            </div>
        </div>
        <section class="container">
            <AppProductsGrid />
        </section>
    </div>
</template>

<script>
import AppProductsGrid from '~/components/modules/AppProducts/AppProductsGrid';

export default  {
    components: {
        AppProductsGrid,
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.sale-message {
    background: #333 url('https://i.pinimg.com/originals/f6/4a/b9/f64ab9ebb6019247f53b0409d511443c.jpg') no-repeat fixed center center/cover;
    color: #fff;
    padding: 2em;
    position: relative;

    &:before {
        background: rgba(0, 0, 0, .65);
        content: '';
        height: 100%;
        position: absolute;
            left: 0;
            top: 0;
        width: 100%;
    }

    text-align: center;

    .inner {
        margin: 0 auto;
        max-width: 900px;
        position: relative;

        h2 {
            font-size: 2em;
            margin-bottom: 20px;
        }

        p {
            font-size: 18px;
            line-height: 1.5;
        }
    }
}
</style>
