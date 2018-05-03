<template>
    <header class="app-cart-header">
        <div class="app-cart-header__items">
            Items in your cart
        </div>
        <div class="app-cart-header__qty">
            Qty
        </div>
        <div class="app-cart-header__price">
            Price
        </div>
        
    </header>
</template>

<script>

</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
.app-cart-header {
    background: #333;
    color: #fff;
    display: flex;
    font-weight: 600;
    justify-content: space-around;
    padding: 20px;
    
    h2 {
        margin: 0;
    }

    .app-cart-header__items {
        width: 50%;
    }
}
</style>