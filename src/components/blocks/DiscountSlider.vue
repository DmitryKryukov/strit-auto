<template lang="pug">
.discount-slider
  slider
    discountSlide(v-for="discount in discounts",:discount = "discount", :key="discount.id")  
</template>

<script>
import slider from '@/components/layouts/Slider.vue'
import discountSlide from '@/components/blocks/DiscountSlide.vue'

export default {
  name: 'DiscountSlider',
  components: {
    slider,
    discountSlide,
  },
  computed: {
     discounts() {
      return this.$store.state.discounts.allDiscount;
    },
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.discount-slider {  
  margin-bottom: calc(var(--spacer-m) * 2 + 20px);
  @include media-breakpoint-down(mobileS) {
    margin-bottom: 0;
  }
}
</style>

