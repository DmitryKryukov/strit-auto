<template lang="pug">
#page
  //carFilter
  carGrid(sectionTitle="Lada")
</template>

<script>
import carFilter from '@/components/blocks/CarFilter'
import carGrid from '@/components/blocks/CarGrid'
export default {
  name: 'cars',
  components: {
    carGrid,
    carFilter
  },
}
</script>

<style lang="scss" scoped>
</style>
