<template lang="pug">
.floor.car
  .container
    h2 {{ sectionTitle }}
    .grid.grid--5.car-grid
      carCard(
        v-for='car in cars',
        :key='car.brand + " " + car.name',
        :car='car'
      )
</template>

<script>
import carCard from '@/components/blocks/CarCard'

export default {
  name: 'CarGrid',
  components: {
    carCard,
  },
  props: {
    sectionTitle: {
      type: String,
      default: 'Предложения месяца',
    },
  },
  data() {
    return {
      cars: [
        {
          brand: 'Lada',
          name: 'Granta Sedan',
          priceOld: 434900,
          priceCurrent: 298810,
          imgSrc:
            'http://kit-avto.demo.lks.su/media/3603/conversions/907572c69c336645fcc25736fd7c3e98-base-webp.webp',
          badge: true,
        },

        {
          brand: 'Lada',
          name: 'Vesta SW Cross',
          priceOld: 779900,
          priceCurrent: 617010,
          imgSrc:
            'http://kit-avto.demo.lks.su/media/3603/conversions/907572c69c336645fcc25736fd7c3e98-base-webp.webp',
          badge: true,
        },
        {
          brand: 'Lada',
          name: 'Vesta SW',
          priceOld: 676900,
          priceCurrent: 520710,
          imgSrc:
            'http://kit-avto.demo.lks.su/media/3603/conversions/907572c69c336645fcc25736fd7c3e98-base-webp.webp',
        },
        {
          brand: 'Lada',
          name: 'XRay Cross',
          priceOld: 754900,
          priceCurrent: 562110,
          imgSrc:
            'http://kit-avto.demo.lks.su/media/3603/conversions/907572c69c336645fcc25736fd7c3e98-base-webp.webp',
          badge: true,
        },
        {
          brand: 'Lada',
          name: 'Vesta',
          priceOld: 594900,
          priceCurrent: 450910,
          imgSrc:
            'http://kit-avto.demo.lks.su/media/3603/conversions/907572c69c336645fcc25736fd7c3e98-base-webp.webp',
          badge: true,
        },
        {
          brand: 'Lada',
          name: 'Granta Liftback',
          priceOld: 451900,
          priceCurrent: 314110,
          imgSrc:
            'http://kit-avto.demo.lks.su/media/3603/conversions/907572c69c336645fcc25736fd7c3e98-base-webp.webp',
        },
        {
          brand: 'Lada',
          name: 'Granta Universal',
          priceOld: 451900,
          priceCurrent: 314110,
          imgSrc:
            'http://kit-avto.demo.lks.su/media/3603/conversions/907572c69c336645fcc25736fd7c3e98-base-webp.webp',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.car {
  margin-bottom: calc(var(--spacer-m) * 2 + 30px);
  content-visibility: auto;
}
</style>
