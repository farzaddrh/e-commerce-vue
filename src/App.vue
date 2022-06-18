<template>
  <e-header></e-header>

  <e-cart v-if="cartIsVisible"></e-cart>

  <router-view />
</template>

<script>
import EHeader from "@/components/layout/EHeader.vue";
import ECart from "@/components/ECart.vue";
export default {
  components: { EHeader, ECart },
  computed: {
    cartIsVisible() {
      return this.$store.getters.cartIsVisible;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Kumbh+Sans:wght@400;700&family=Manrope:wght@600;800&family=Overpass:wght@400;700&family=Poppins:wght@400;500;600;700&family=Rubik:wght@400;500;700&family=Space+Mono:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
  line-height: 1;
  font-size: 1.6rem;
  min-height: 125;
  position: relative;
  z-index: -100;
}
</style>
