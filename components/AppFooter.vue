<template>
    <footer class="site-footer">
        <section class="site-footer-topper">
            <h2>Why buy your guitar from <strike>Sweetwater</strike> Hipster Guitar?</h2>
            <a href="" class="btn">Tell me why!</a>
        </section>
        <div class="inner">
            <!-- <div class="footer-logo">
                <app-site-logo />
            </div> -->
            <div class="nav-column">
                <h4>Resources</h4>
                <app-nav />
            </div>

            <div class="nav-column">
                <h4>Help</h4>
                <nav>
                    <ul class="menu">
                        <li><a href="">Careers</a></li>
                        <li><a href="">Return Policy</a></li>
                        <li><a href="">Customer Service</a></li>
                        <li><a href="">Order Status</a></li>
                    </ul>
                </nav>
                
            </div>

            <div class="nav-column">
                <h4>Subscribe</h4>
                <div class="input-wrapper">
                    <input type="email" placeholder="enter your email" value="">
                    <input type="submit" value="Subscribe">
                </div>
            </div>
            
        </div>

        <div class="footer-logo">
            <a href=""><app-logo /></a>
        </div>

        <p class="copyright">&copy;{{ new Date().getFullYear() }} Hipster Guitars, Inc. All rights reserved. So don't steal our stuff or we'll sue you, jerks!</p>
         
        

    </footer>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import AppNav from "~/components/AppNav.vue";

export default {
    components: {
        AppLogo,
        AppNav,
    }
};
</script>


<style rel="stylesheet/scss" lang="scss" type="text/scss">
.site-footer {
    background: #eee;
    text-align: center;

    .copyright {
        color: #999;
        font-size: 13px;
        font-weight: 600;
        padding: 2em 0;
    }

    .site-footer-topper {
        background: url('https://ministryadvice.com/wp-content/uploads/2017/01/acoustic-guitars-for-worship-leaders.jpg') no-repeat fixed center center/cover;
        color: #fff;
        padding: 5em 2em;
        position: relative;

        .btn {
            background: #F62B0A;
            color: #fff;
            font-size: 20px;
            margin-top: 2.5em;
        }

        h2 {
            font-size: 30px;
        }

        * {
            position: relative;
        }

        &:before {
            background: rgba(0, 0, 0, .5);
            content: '';
            height: 100%;
            position: absolute;
                left: 0;
                top: 0;
            width: 100%;
        }
    }

    .inner {
        align-items: start;
        display: flex;
        justify-content: space-around;
        padding: 3em;
        margin: 0 auto;
        max-width: 1400px;

        nav {
            line-height: 1.5;
            text-align: left;

            a {
                color: #999;
                line-height: 2;

                &:hover {
                    color: #333;
                }
            }
        }

        h4 {
            margin: 1em 0;
            text-align: left;
        }

        .nav-column {
            flex: 1 1 auto;
            padding: 0 30px;
        }
    }

    .footer-logo {
        a {
            display: inline-block;
            opacity: .35;

             &:hover {
                opacity: .5;        
            }
        }

        svg {
            fill: #000 !important;
            height: 120px;
            width: 120px;
        }
    }

    .input-wrapper {
        position: relative;

        input[type=email],
        input[type=submit] {
            font-family: 'Montserrat';
            font-size: 16px;
            height: 43px;
            position: absolute;
            top: 0;
        }

        input[type=email] {
            -webkit-appearance: none;
            border: 1px solid #ccc;
            border-radius: 4px 0 0 4px;
            color: #333;
            left: 0;
            padding: 10px 110px 10px 10px;
            width: 100%;
        }

        input[type=submit] {
            -webkit-appearance: none;
            background: #333;
            border-radius: 0 4px 4px 0;
            border: 0;
            color: #fff;
            cursor: pointer;
            font-weight: 600;
            height: 43px;
            padding: 10px;
            right: 0;

            &:hover {
                background: darken(#333, 10%);
            }    
        }
    }
}
</style>