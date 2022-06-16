<template>
  <e-header></e-header>

  <section  class="section-product">
  <e-product-image></e-product-image>

  <e-product-info></e-product-info>
  </section>

  <e-overlay v-if="activeSlide"></e-overlay>

  <e-slider v-if="activeSlide"></e-slider>

  <e-cart v-if="cartIsVisible"></e-cart>
</template>

<script>
// @ is an alias to /src
import EHeader from '@/components/layout/EHeader.vue'
import EProductInfo from "@/components/EProductInfo.vue"
import EProductImage from "@/components/EProductImage.vue"
import ESlider from "@/components/ESlider.vue"
import EOverlay from "@/components/EOverlay.vue"
import ECart from "@/components/ECart.vue"


export default {
  name: 'HomeView',
  components:{
    EHeader,
    EProductInfo,
    EProductImage,
    ESlider,
    EOverlay,
    ECart

  },
  computed:{
    activeSlide(){
      return this.$store.getters.activeSlide
    },
    cartIsVisible(){
      return this.$store.getters.cartIsVisible
    }
  }
}
</script>
<style scoped lang="scss">
.section-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 8rem;
    width: 125rem;
    margin: 3rem auto;
    padding-inline: 3rem;
    align-content: center;
    justify-items: center;
    align-items: center;
    justify-items: center;
    }
//////////////////////////RESPONSIVE/////////////////////
@media (max-width: 768px) {
    .section-product {
        grid-template-columns: 1fr;
        width: 100%;
        margin: 0;
        padding: 0;
        }
    }
</style>
