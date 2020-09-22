<template lang="pug">
#page
  discountSlider
  brandGrid
  carGrid
  aboutFloor
</template>

<script>
import discountSlider from '@/components/blocks/DiscountSlider'
import brandGrid from '@/components/blocks/BrandGrid'
import carGrid from '@/components/blocks/CarGrid'
import aboutFloor from '@/components/blocks/AboutFloor'
export default {
  name: 'home',
  components: {
    discountSlider,
    brandGrid,
    carGrid,
    aboutFloor,
  },
}
</script>

<style lang="scss" scoped>
</style>
