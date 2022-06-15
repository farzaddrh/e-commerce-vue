<template>
  <div class="product-image">
            <div class="slider-mobile hidden">


                <div class="img-large-slider-mobile">

                    <div class="slide-mobile ">
                        <img src="images/image-product-4.jpg" class="img-large-slider" alt="productImage" />
                    </div>
                    <div class="slide-mobile  ">
                        <img src="images/image-product-3.jpg" class="img-large-slider" alt="productImage" />
                    </div>
                    <div class="slide-mobile  "><img src="images/image-product-2.jpg" class="img-large-slider"
                            alt="productImage" /></div>
                    <div class="slide-mobile"> <img src="images/image-product-1.jpg" class="img-large-slider"
                            alt="productImage" /></div>
                    <div class="next-mobile ">
                        <img src="images/icon-next.svg" alt="iconNext">
                    </div>
                    <div class="previous-mobile ">
                        <img src="images/icon-previous.svg" alt="iconPrevious">
                    </div>

                </div>


            </div>

            <div class="product-img-large" @click="showSlider">
                <img :src="require(`@/assets/images/image-product-${activeImage}.jpg`)" alt="productImage" id="large-img">
            </div>

            <div class="product-imgs-small">
                <div class="img-small-container" v-for="i in 4" :key="i" @click="activateImage(i)" :class="{'img-small-container-active':i === activeImage}">
                    <img class="img-small" :src="require(`@/assets/images/image-product-${i}.jpg`)" alt="productImage">
                </div>
            </div>

        </div>
        
</template>
<script>
export default {
    data(){
        return {
            activeImage:1
        }
    },
    methods:{
        activateImage(index){
              this.activeImage=index
        },
        showSlider(){
            this.$store.dispatch('showActiveSlide',this.activeImage)
            
        },
    }
        
}
</script>
<style scoped lang="scss">
    .hidden{
        display: none;
    }
    .product-image {
        justify-self: end;
        padding-right: 0;

        .product-img-large {
            cursor: pointer;
            overflow: hidden;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 2rem;

            img {
                border-radius: 12px;
                width: 48rem;
            }
        }

        .product-imgs-small {
            display: flex;
            justify-content: end;
            width: 100%;
            justify-content: end;
            gap: 1rem;

            .img-small-container {
                border-radius: 12px;
                border: 2px solid transparent;
                overflow: hidden;
                cursor: pointer;

                .img-small {
                    width: 10.9rem;
                    display: block;
                }
            }

            .img-small-container.img-small-container-active {
                border-color: $Orange;

                .img-small {
                    opacity: 0.4;
                }
            }
        }
    }

</style>