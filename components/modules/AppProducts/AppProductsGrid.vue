
<template>
    <div class="products">
        <AppProductsItem v-for="item in items" :key="item.itemid" :product="item"/>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';
    import AppProductsItem from '~/components/modules/AppProducts/AppProductsItem.vue';
    import VuePersist from 'vue-persist';
 
    // Vue.use(VuePersist);
    
    export default  {
        components: {
            AppProductsItem,
        },
        data() {
            return  {
                items: [
                    { 
                        itemid: 'SECU24RW', 
                        title: 'PRS SE Custom 24 Sweetwater Exclusive - Natural Rosewood',
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/SECU24RW-large.jpg',
                        price: 200.95,
                        qty: 1,
                    },
                    { 
                        itemid: 'LPTR18FHNH', 
                        title: 'Gibson Les Paul Tribute 2018 - Faded Honey Burst', 
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/LPTR18FHNH-large.jpg',
                        price: 80.00,
                        qty: 1,
                    },
                    { 
                        itemid: 'SGS18HCCH', 
                        title: 'Gibson SG Standard 2018 - Heritage Cherry',
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/SGS18HCCH-large.jpg',
                        price: 200.50,
                        qty: 0,
                    },
                    { 
                        itemid: 'TeleCPBjBl', 
                        title: 'Fender Classic Player Baja Telecaster - Blonde with Maple Fingerboard',
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/TeleCPBjBl-large.jpg',
                        price: '799.75',
                        qty: 1,
                    },
                    { 
                        itemid: 'LPS18HSCH', 
                        title: 'Gibson Les Paul Standard 2018 - Heritage Cherry Sunburst', 
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/LPS18HSCH-large.jpg',
                        price: 3299.25,
                        qty: 1,
                    },
                    { 
                        itemid: 'CE24BLACKOUT', 
                        title: 'PRS CE 24 Sweetwater Exclusive - Satin Blackout',
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/CE24BLACKOUT-large.jpg',
                        price: 1899.00,
                        qty: 1,
                    },
                    { 
                        itemid: 'StratSBR3TSB', 
                        title: 'Fender Sandblasted Stratocaster, Sweetwater USA Exclusive',
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/StratSBR3TSB-large.jpg',
                        price: 1899.00,
                        qty: 1,
                    },
                    { 
                        itemid: 'StratCV50SB', 
                        title: 'Squier Classic Vibe Stratocaster \'50s - 2-tone Sunburst',
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/StratCV50SB-large.jpg',
                        price: 399.00,
                        qty: 1,
                    },

                    { 
                        itemid: 'PBassVMILPB', 
                        title: 'Squier Vintage Modified Precision Bass PJ',
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/PBassVMILPB-large.jpg',
                        price: 299.99,
                        qty: 1,
                    },
                    { 
                        itemid: 'L4402RTTSdns', 
                        title: 'Lakland Skyline 44-02 Standard "Dent and Scratch"',
                        status: 'in-stock',
                        thumb: 'https://media.sweetwater.com/images/items/750/L4402RTTSdns-large.jpg',
                        price: 998.00,
                        qty: 1,
                    },
                ],

            }
        },
        methods: {
            beforeCreate() {
                this.$store.commit('initialiseStore');
            }
        },
        persist: ['itemid'],
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

    @media all and (max-width: 930px) {
        .product {
            width: 23%;
        }
    }

    @media all and (max-width: 730px) {
        .product {
            width: 30%;
        }
    }

    @media all and (max-width: 570px) {
        .product {
            width: calc(50% - 10px);
        }
    }

    @media all and (max-width: 430px) {
        .product {
            width: 80%;
        }
    }
}
</style>