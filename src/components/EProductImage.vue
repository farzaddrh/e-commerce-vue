<template>
  <div class="product-image">
    <div class="slider-mobile">
      <div class="img-large-slider-mobile">
        <div class="slide-mobile">
          <img
            :src="require(`@/assets/images/image-product-${currentSlide}.jpg`)"
            class="img-large-slider"
            alt="productImage"
          />
        </div>

        <div class="next-mobile" @click="goNextSlide">
          <img :src="require('@/assets/images/icon-next.svg')" alt="iconNext" />
        </div>

        <div class="previous-mobile" @click="goPreviousSlide">
          <img
            :src="require('@/assets/images/icon-previous.svg')"
            alt="iconPrevious"
          />
        </div>
      </div>
    </div>

    <div class="product-img-large" @click="showSlider">
      <img
        :src="require(`@/assets/images/image-product-${activeImage}.jpg`)"
        alt="productImage"
        id="large-img"
      />
    </div>

    <div class="product-imgs-small">
      <div
        class="img-small-container"
        v-for="i in 4"
        :key="i"
        @click="activateImage(i)"
        :class="{ 'img-small-container-active': i === activeImage }"
      >
        <img
          class="img-small"
          :src="require(`@/assets/images/image-product-${i}.jpg`)"
          alt="productImage"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeImage: 1,
      currentSlide: 1,
    };
  },
  methods: {
    activateImage(index) {
      this.activeImage = index;
    },
    showSlider() {
      this.$store.dispatch("showActiveSlide", this.activeImage);
    },
    goNextSlide() {
      if (this.currentSlide === 4) this.currentSlide = 1;
      else this.currentSlide++;
    },
    goPreviousSlide() {
      if (this.currentSlide === 1) this.currentSlide = 4;
      else this.currentSlide--;
    },
  },
};
</script>
<style scoped lang="scss">
.product-image {
  justify-self: end;
  padding-right: 0;

  .slider-mobile {
    display: none;
  }

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
/////////////////////RESONSIVE/////////////////////
@media (max-width: 768px) {
  .product-image {
    width: 100%;

    .slider-mobile {
      display: block !important;
      width: 100%;
      position: relative;
      margin-top: -3.3rem;

      .img-large-slider-mobile {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;

        .slide-mobile {
          width: 100%;
          grid-row: 1;
          grid-column: 1;

          .img-large-slider {
            width: 100%;
          }
        }
      }

      .next-mobile {
        @include btnMove();
        right: 0;
        transform: translate(50%, -50%);
        cursor: pointer;
        right: 4.2rem;

        img {
          height: 40px;
          width: 14px;
          object-fit: contain;
          margin-inline: 13px;
        }
      }

      .previous-mobile {
        @include btnMove();
        left: 0;
        transform: translate(-50%, -50%);
        cursor: pointer;
        left: 4.2rem;

        img {
          height: 40px;
          width: 14px;
          object-fit: contain;
          margin-inline: 13px;
        }
      }
    }

    .product-img-large {
      display: none;
    }

    .product-imgs-small {
      display: none;
    }
  }
}
</style>
