<template>
    <footer class="app-cart-footer">
        <p class="app-cart-total">
            <strong>Cart total: </strong>  <span>$0</span></p>
    </footer>
</template>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.app-cart-footer {
    background: #ddd;
    color: #fff;
    padding: 20px;

    .app-cart-total {
        color: #333;
        display: block;
        font-size: 1.5em;
        margin: 0;
        text-align: right;

        span {
            display: inline-block;
            font-weight: 600;
            margin-left: 10px;
        }
    }
}
</style>