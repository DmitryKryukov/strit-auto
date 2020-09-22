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
import utils from '@/components/utils'

export default {
  name: 'CarGrid',
  components: {
    carCard,
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
      sectionTitle: 'Каталог автомобилей',
    }
  },
  mounted: function () {
    this.onResize()
    window.addEventListener('optimizedResize', () => {
      this.onResize()
    })
  },
  beforeDestroy: function () {
    window.removeEventListener('optimizedResize', () => {
      this.onResize()
    })
  },
  methods: {
    onResize: function () {
      if (window.innerWidth < 450) {
        this.sectionTitle = 'Автомобили'
      } else {
        this.sectionTitle = 'Каталог автомобилей'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.car {
  margin-bottom: calc(var(--spacer-m) * 2 + 20px);
  content-visibility: auto;
}
</style>
