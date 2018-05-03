<template>
    <div id="app">
        <AppHeader />
        <nuxt/>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '~/components/common/AppHeader';
import AppFooter from '~/components/common/AppFooter';

export default {
    components: {
        AppHeader,
        AppFooter,
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
    // @import '/assets/css/styles.scss';
    /*---------------------------------------------
        HEADER 
    ---------------------------------------------*/
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    .container {
        text-align: left;

        p {
            line-height: 1.5;
            margin: 2em 0;
            text-align: left;
        }
    }

    .container.interior--page {
        display: block;
        padding: 1em 1.5em;
        margin: 0 auto;
        max-width: 1000px;
        min-height: auto;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        background: #fff;
        color: #333;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    h1,
    h2,
    h3 {
        display: block;
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        font-weight: 900;
        margin-top: 20px;
        text-transform: uppercase;
    }

    .site-banner {
        background: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;

        span {
            // color: #F62B0A;
        }
    }

    .site-header {
        // border-bottom: 1px solid #eee;
        // box-shadow: 0 2px 10px rgba(0, 0, 0, .08);
        position: relative;
        text-align: center;
    }

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

    .site-logo {
        display: inline-block;
        padding: 5px 15px 0;
        text-align: center;

        svg {
            display: block;
            fill: #333;
            /* height: 160px; */
            margin: 0 auto;
            transition: fill .1s ease;
            // width: 160px;
            width: 190px;

            @media all and (max-width: 480px) {
                width: 140px;
            }

            .guitar {
                fill: #ccc;
            }

            &:hover {
                fill: #F62B0A;
            }
        }
    }

    .container {
        align-items: center;
        display: flex;
        justify-content: center;
        // min-height: 100vh;
        text-align: center;
    }

    .title {
        display: block;
        color: #35495e;
        font-size: 100px;
        font-weight: 700;
        letter-spacing: 1px;
    }

    .subtitle {
        color: #526488;
        font-size: 42px;
        font-weight: 300;
        padding-bottom: 15px;
        word-spacing: 5px;
    }

    .links {
        padding-top: 15px;
    }

    .btn {
        background: #333;
        border-radius: 4px;
        color: #fff;
        display: inline-block;
        font-weight: 900;
        padding: 10px 20px;
        text-decoration: none;
        transition: background .15s ease;
        text-transform: uppercase;

        &:hover {
            background: darken(#333, 10%);
        }

        &.btn--add-to-cart {
            background: #F62B0A;

            &:hover {
                background: darken(#F62B0A, 10%);
            }
        }
    }

    .promo {
        position: relative;

        // &:before {
        //     background: rgba(250, 159, 67, .45);
        //     content: '';
        //     height: 100%;
        //     position: absolute;
        //         left: 0;
        //         top: 0;
        //     width: 100%;
        // }

        .inner {
            // color: #fff;
            padding: 1em;
            margin: 0 auto;
            max-width: 1400px;
            position: relative;
            text-align: center;

            h1 {
                font-size: 2.5em;
                font-weight: 900;
                // text-shadow: 5px 5px 0 rgba(198, 116, 9, .6);
                text-transform: uppercase;

                 @media all and (max-width: 480px) {
                    font-size: 2em;
                }
            }
        }
    }

    .cart-icon {
        display: block;
        height: 60px;
        position: absolute;
            right: 20px;
            top: 10px;
        width: 60px;

        &:hover svg {
            fill: #EB0C08 !important;
        }

        svg {
            fill: #333;
            height: 50px;
            width: 50px;

            &:hover {
                fill: #EB0C08 !important;
            }
        }
    }
</style>
