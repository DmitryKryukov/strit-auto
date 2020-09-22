<template lang="pug">
fragment
  section.floor
    .container.row.row--h-justified.footer-brands
      nav.row.footer-brands-list(ref="flexedParent")
        .footer-brands-list__item Volkswagen
        .footer-brands-list__item Hyundai
        .footer-brands-list__item Kia
        .footer-brands-list__item Renault
        .footer-brands-list__item Skoda
        .footer-brands-list__item Nissan
        .footer-brands-list__item Chevrolet
        .footer-brands-list__item Datsun
        .footer-brands-list__item Lada
        .footer-brands-list__item Ravon
        .footer-brands-list__item Jac
        .footer-brands-list__item FAW
        .footer-brands-list__item Changan
        .footer-brands-list__item Chery
        .footer-brands-list__item Haval
        .footer-brands-list__item Ford
        .footer-brands-list__item Mitsubishi
        .footer-brands-list__item УАЗ
        .footer-brands-list__item Lifan
        .footer-brands-list__item Geely
        .footer-brands-list__item Toyota
        .footer-brands-list__item Great Wall
        .footer-brands-list__item Zotye
        .footer-brands-list__item SsangYong
        .footer-brands-list__item Suzuki
</template>

<script>
export default {
  mounted: function () {
    this.setBrandsMargin()
    window.addEventListener('resize', this.setBrandsMargin)
  },
  methods: {
    setBrandsMargin: function () {
      const flexedParent = this.$refs.flexedParent
      flexedParent.style.setProperty('--brands-margin','2rem') // Сначала сбрасываем значение      
      const brandsMargin =
flexedParent.children[1].offsetLeft - flexedParent.children[0].offsetWidth      
      flexedParent.style.setProperty('--brands-margin', brandsMargin - 1 + 'px') //Заменяем на нужное
    },
  },
}
</script>

<style scoped lang="scss">
.footer {
  margin-bottom: 2rem;
  &-brands-list {
    margin-bottom: 2rem;
    position: relative;
    display: flex;  
    justify-content: space-between;  
    flex-wrap: wrap;
    grid-gap: 1rem var(--brands-margin) ;

    &__item:last-child {
      margin-right: auto;
    }
  }
}
</style>