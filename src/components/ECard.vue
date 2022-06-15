<template>
<Teleport to="body">
         <div class="cart">
                <div class="cart-header-container">
                        <h1 class="cart-header">Cart</h1>
                </div>

                <div class="cart-body ">
                        <p class='empty' v-if="!cardHasProduct">Your cart is empty.</p>

                        <div class="sneaker-info" v-if="cardHasProduct">
                                <div class="total-price">
                                        <div class="final-product">
                                                <img :src="require('@/assets/images/image-product-1.jpg')" alt="sneaker">
                                        </div>

                                        <p class="sneaker-description">Fall Limited Edition Sneakers <br>
                                                $125.00 &#215;
                                                <span class="num">{{cardHasProduct}}</span>
                                                <span class='tot-price'>${{totalPrice}}</span>
                                        </p>
                                        
                                        <div class="delete">
                                                <img :src="require('@/assets/images/icon-delete.svg')" alt="delete">
                                        </div>
                                </div>

                                <div>
                                        <button class="btn-checkout">Checkout</button>
                                </div>
                        </div>
                </div>

    </div>
</Teleport>  
</template>
<script>
export default {
    computed:{
        cardHasProduct(){ 
            return this.$store.getters.cardHasProduct
        },
        totalPrice(){
            return (this.$store.getters.productNumber * 125).toFixed(2)
        }
    }
        
}
</script>
<style scoped lang="scss">
.cart {
    width: 35rem;
    box-shadow: 1px 4px 19px 2px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 5rem;
    top: 8rem;
    border-radius: 12px;
    z-index: 100;
    background-color: $White;

    .cart-header-container {
        padding-top: 2rem;
        padding-inline: 2rem;
        padding-bottom: 2.5rem;
        border-bottom: 1px solid #f0f1f2;

        h1 {
            font-size: 2rem;
        }
    }

    .cart-body {
        padding: 2rem;
        height: 15rem;
        @include flex-container();

        .empty {
            color: hsl(219, 9%, 45%);
            font-weight: 700;
        }

        .sneaker-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .total-price {
                @include flex-container($justify: space-between);
                grid-gap: 1rem;

                .final-product {
                    img {
                        width: 60px;
                        border-radius: 8px;
                    }
                }

                .sneaker-description {
                    color: $GrayishBlue;
                    line-height: 1.5;

                    .tot-price {
                        color: $Black;
                        font-weight: 700;
                        margin-left: 0.5rem;
                    }
                }
            }

            .btn-checkout {
                width: 100%;
                color: $White;
                background-color: $Orange;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                padding: 1.5rem;
            }
        }
    }
}

</style>