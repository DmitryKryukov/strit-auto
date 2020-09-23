<template lang="pug">
#page
  carFilter
  carGrid(v-for="brand in brands", :key="brand.name", :sectionTitle="brand.name")
</template>

<script>
import carFilter from "@/components/blocks/CarFilter";
import carGrid from "@/components/blocks/CarGrid";
export default {
  name: "cars",
  components: {
    carGrid,
    carFilter,
  },
  computed: {
    brands() {
      return this.$store.state.brands.all;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
