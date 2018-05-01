
<template>
    <div class="products">
        <AppProductsItem v-for="product in products" :key="product.itemid" :product="product"/>
    </div>
</template>

<script>
    import AppProductsItem from '~/components/modules/AppProducts/AppProductsItem.vue';
    export default  {
        components: {
            AppProductsItem,
        },
        data() {
            return  {
                products: [
                    { 
                        itemid: 'SECU24RW', 
                        title: 'PRS SE Custom 24 Sweetwater Exclusive - Natural Rosewood',
                        thumb: 'https://media.sweetwater.com/images/items/750/SECU24RW-large.jpg',
                        price: 200.95,
                    },
                    { 
                        itemid: 'LPTR18FHNH', 
                        title: 'Gibson Les Paul Tribute 2018 - Faded Honey Burst', 
                        thumb: 'https://media.sweetwater.com/images/items/750/LPTR18FHNH-large.jpg',
                        price: 80.00,
                    },
                    { 
                        itemid: 'SGS18HCCH', 
                        title: 'Gibson SG Standard 2018 - Heritage Cherry',
                        thumb: 'https://media.sweetwater.com/images/items/750/SGS18HCCH-large.jpg',
                        price: 200.50,
                    },
                    { 
                        itemid: 'TeleCPBjBl', 
                        title: 'Fender Classic Player Baja Telecaster - Blonde with Maple Fingerboard',
                        thumb: 'https://media.sweetwater.com/images/items/750/TeleCPBjBl-large.jpg',
                        price: '799.75',
                    },
                    { 
                        itemid: 'LPS18HSCH', 
                        title: 'Gibson Les Paul Standard 2018 - Heritage Cherry Sunburst', 
                        thumb: 'https://media.sweetwater.com/images/items/750/LPS18HSCH-large.jpg',
                        price: 3299.25,
                    },
                    { 
                        itemid: 'CE24BLACKOUT', 
                        title: 'PRS CE 24 Sweetwater Exclusive - Satin Blackout',
                        thumb: 'https://media.sweetwater.com/images/items/750/CE24BLACKOUT-large.jpg',
                        price: 1899.00,
                    },
                    { 
                        itemid: 'StratSBR3TSB', 
                        title: 'Fender Sandblasted Stratocaster, Sweetwater USA Exclusive',
                        thumb: 'https://media.sweetwater.com/images/items/750/StratSBR3TSB-large.jpg',
                        price: 1899.00,
                    },
                    { 
                        itemid: 'StratCV50SB', 
                        title: 'Squier Classic Vibe Stratocaster \'50s - 2-tone Sunburst',
                        thumb: 'https://media.sweetwater.com/images/items/750/StratCV50SB-large.jpg',
                        price: 399.00,
                    },
                ]
            }
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
.products {
    display: flex;
    color: #333;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1400px;
    padding: 40px 0;
}
</style>