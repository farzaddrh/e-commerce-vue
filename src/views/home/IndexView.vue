<template>
  <e-header></e-header>

  <section  class="section-product">
  <e-product-image></e-product-image>

  <e-product-info></e-product-info>
  </section>

  <e-overlay v-if="activeSlide"></e-overlay>

  <e-slider v-if="activeSlide"></e-slider>

  <e-card v-if="cardIsVisible"></e-card>
</template>

<script>
// @ is an alias to /src
import EHeader from '@/components/layout/EHeader.vue'
import EProductInfo from "@/components/EProductInfo.vue"
import EProductImage from "@/components/EProductImage.vue"
import ESlider from "@/components/ESlider.vue"
import EOverlay from "@/components/EOverlay.vue"
import ECard from "@/components/ECard.vue"


export default {
  name: 'HomeView',
  components:{
    EHeader,
    EProductInfo,
    EProductImage,
    ESlider,
    EOverlay,
    ECard
  
  },
  computed:{
    activeSlide(){
      return this.$store.getters.activeSlide
    },
    cardIsVisible(){
      return this.$store.getters.cardIsVisible
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

</style>
