<template lang="pug">
#app
  app-header
  main.wrapper
     router-view
</template>

<script>
import appHeader from "@/components/layouts/AppHeader";

export default {
  name: "app",
  components: {
    appHeader,
  },
};
</script>
<style lang="scss">
@import "./styles/global.scss";
</style>
