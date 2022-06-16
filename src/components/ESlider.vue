<template>
<Teleport to="body">
    <div class="overlay" @click="closeSlider"></div>
</Teleport>

<Teleport to="body">
   <div class="slider">
        <div class="product-image-slider">
            <div class="product-img-large-slider">
                <div class="img-large-slider-container">
                        <img :src="require(`@/assets/images/image-product-${currentSlide}.jpg`)" class="img-large-slider"
                        alt="productImage" />
                </div>

                <div class="next " @click="goNextSlide">
                    <img :src="require('@/assets/images/icon-next.svg')" alt="iconNext">
                </div>

                <div class="previous " @click="goPreviousSlide">
                    <img :src="require('@/assets/images/icon-previous.svg')" alt="iconPrevious">
                </div>

                <div class="close " @click="closeSlider">
                    <img :src="require('@/assets/images/icon-close.svg')" alt="iconClose">
                </div>
            </div>

            <div class="product-imgs-small-slider">
                <div class="img-small-container-slider" v-for="i in 4" :key="i" @click="activateSlide(i)" :class="{active:currentSlide === i}">
                    <img class=" img-small-slider" :src="require(`@/assets/images/image-product-${i}.jpg`)" alt="productImage">
                </div>
            </div>

        </div>
    </div>
</Teleport>
</template>
<script>


export default {
        data(){
                return{
                        currentSlide:this.$store.getters.activeSlide
                }
        },
        methods:{
                goNextSlide(){
                        if(this.currentSlide === 4) this.currentSlide=1
                        else this.currentSlide++
                },
                goPreviousSlide(){
                        if(this.currentSlide === 1) this.currentSlide=4
                        else this.currentSlide--
                },
                activateSlide(index){
                        this.currentSlide=index
                },
                 closeSlider(){
                        this.$store.dispatch('showActiveSlide',false)
                },

        },


}
</script>
<style scoped lang="scss">
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 125vh;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
}
.slider {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 15;
}

.product-image-slider {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .product-img-large-slider {
        width: 480px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        position: relative;

        .img-large-slider-container {
            width: 100%;
            grid-column: 1;
            grid-row: 1;


            .img-large-slider {
                width: 100%;
                border-radius: 12px;
            }
        }

        .next {
            @include btnMove();
            right: 0;
            transform: translate(50%, -50%);
            cursor: pointer;

            img {
                height: 40px;
                width: 14px;
                margin-inline: 13px;
                object-fit: contain
            }
        }

        .previous {
            @include btnMove();
            left: 0;
            transform: translate(-50%, -50%);
            cursor: pointer;


            img {
                height: 40px;
                width: 14px;
                object-fit: contain;
                margin-inline: 13px;

            }
        }

        .close {
            position: absolute;
            right: 0;
            top: -25px;
            cursor: pointer;
        }
    }

    .product-imgs-small-slider {
        display: flex;
        gap: 1rem;

        img {
            width: 112.5px;

        }

        .img-small-container-slider {
            border-radius: 12px;
            border: 2px solid transparent;
            overflow: hidden;
            cursor: pointer;

            .img-small-slider {
                width: 10.9rem;
                display: block;
            }
        }

        .img-small-container-slider.active {
            border-color: $Orange;

            .img-small-slider {
                opacity: 0.3;
            }
        }
    }
}
</style>
