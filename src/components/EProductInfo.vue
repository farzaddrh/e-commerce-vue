<template>
         <div class="product-info">

            <p class='product-info-company'>Sneaker Company </p>

            <h1 class="product-info-title"> Fall Limited Edition Sneakers</h1>

            <p class="product-info-description">These low-profile sneakers are your perfect casual wear companion.Featuring adurable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>

            <div class="product-info-price">
                <span class="sale-pice">$125.00</span>

                <span class="sale-percent"> 50%</span>
            </div>

            <p class="real-price">$250.00</p>

            <div class="add-product">
                <div class="btns">
                    <button class="btn btn-minus" @click="subtractFromCart">
                        <img :src="require('@/assets/images/icon-minus.svg')" alt="minus">
                    </button>

                    <input type="text" name="product-num" id="product-num" :value="productNum" disabled>

                    <button class="btn btn-plus" @click="addToCart">
                        <img :src="require('@/assets/images/icon-plus.svg')" alt="plus">
                    </button>

                </div>

                <button class="btn-add" @click="addProductToCart" > 
                        <span>
                        <img :src="require('@/assets/images/icon-cart-white.svg')" alt="iconCart"> 
                        </span> 
                        Add to cart
                    </button>
            </div>
        </div>
</template>
<script>
export default {
    methods:{
        addToCart(){
            this.$store.dispatch('addToCart')
        },
        subtractFromCart(){
            this.$store.dispatch('subtractFromCart')
        },
        addProductToCart(){
            this.$store.dispatch('addProductToCard')
        }
    },
    computed:{
        productNum(){
            return this.$store.getters.productNumber
        }
    }
        
}
</script>
<style scoped lang="scss">
.product-info {
        padding-inline: 3rem;
        padding-block: 0;

        .product-info-company {
            color: $Orange;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 2rem;
            font-weight: 700;
        }

        .product-info-title {
            @include heading-font();
            margin-bottom: 3.5rem;
        }

        .product-info-description {
            line-height: 1.5;
            color: $VeryDarkBlue;
            margin-bottom: 2.5rem;
            word-spacing: 2px;
        }

        .product-info-price {
            @include flex-container($justify: flex-start);
            gap: 2rem;
            margin-bottom: 1rem;

            .sale-pice {
                @include heading-font();
                font-size: 2.8rem;
            }

            .sale-percent {
                color: $Orange;
                background-color: $PaleOrange;
                padding: 0.75rem;
                border-radius: 8px;
                display: inline-block;
                font-weight: 700;
            }
        }

        .real-price {
            color: $GrayishBlue;
            text-decoration: line-through;
            margin-bottom: 3rem;
        }

        .add-product {
            @include flex-container($justify: flex-start);
            gap: 2rem;
            padding-right: 3rem;

            .btns {
                @include flex-container();
                justify-content: space-between;
                background-color: #fffbf3;
                border-radius: 8px;
                flex-basis: 20rem;
                padding: 0.8rem;

                .btn {
                    border: none;
                    padding: 1rem;
                    color: $Orange;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    background: none;
                }

                #product-num {
                    border: none;
                    background-color: $PaleOrange;
                    @include heading-font();
                    font-size: 1.8rem;
                    width: 6rem;
                    text-align: center;
                    background: none;
                }
            }

            .btn-add {
                background-color: $Orange;
                color: $White;
                flex-basis: 35rem;
                border: none;
                border-radius: 8px;
                padding: 1.5rem;
                font-weight: 700;
                @include flex-container();
                gap: 1rem;
                cursor: pointer;
            }
        }
    }
</style>