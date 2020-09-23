<template lang="pug">
#app
  app-header
  main.wrapper
    router-view
  app-footer
</template>

<script>
import appHeader from '@/components/layouts/AppHeader'
import appFooter from '@/components/layouts/AppFooter'

export default {
  name: 'app',
  components: {
    appHeader,
    appFooter,
  },
}
</script>
<style lang="scss">
@import './styles/global.scss';
</style>