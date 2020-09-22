<template lang="pug">
.floor.brand
  .container
    .brand-grid(ref='brandGrid')
      .grid.grid--9.brand-grid-inner
        brandCard(v-for='brand in brands', :key='brand.name', :brand='brand')
        .brand-grid__show-all: span +9 марок в&nbsp;каталоге

    .brand__show-all(
      @click='toggleBrandsVisibility',
      ref='btnShowAll',
      :class='{ "brand__show-all--showed": allBrandsShowed }'
    ) 
      .brand__show-all__text.brand__show-all__text--hide {{ btnTextOnClose }}
        icon.brand__show-all__icon(icon='cross')
      .brand__show-all__text.brand__show-all__text--show {{ btnText }}
</template>

<script>
import brandCard from '@/components/blocks/BrandCard'
import icon from '@/components/graphs/Icon'
import onResize from '@/components/utils/IOnResize'
import stringsHelper from '@/components/utils/Strings'

export default {
  name: 'BrandGrid',
  components: {
    brandCard,
    icon,
  },
  mixins: [onResize, stringsHelper],
  data() {
    return {
      brands: [
        { name: 'Lada', imgSrc: require('@/assets/brands/lada.png') },
        { name: 'Hyundai', imgSrc: require('@/assets/brands/hyundai.png') },
        { name: 'Kia', imgSrc: require('@/assets/brands/kia.png') },
        { name: 'Renault', imgSrc: require('@/assets/brands/renault.png') },
        { name: 'Nissan', imgSrc: require('@/assets/brands/nissan.png') },
        { name: 'Lifan', imgSrc: require('@/assets/brands/lifan.png') },
        { name: 'Škoda', imgSrc: require('@/assets/brands/skoda.png') },
        {
          name: 'Volkswagen',
          imgSrc: require('@/assets/brands/volkswagen.png'),
        },
        { name: 'Datsun', imgSrc: require('@/assets/brands/datsun.png') },
        { name: 'Geely', imgSrc: require('@/assets/brands/geely.png') },
        { name: 'Zotye', imgSrc: require('@/assets/brands/zotye.png') },
        { name: 'FAW', imgSrc: require('@/assets/brands/faw.png') },
        { name: 'Уаз', imgSrc: require('@/assets/brands/uaz.png') },
        { name: 'Chevrolet', imgSrc: require('@/assets/brands/chevrolet.png') },
        { name: 'Chery', imgSrc: require('@/assets/brands/chery.png') },
        { name: 'Changan', imgSrc: require('@/assets/brands/changan.png') },
        { name: 'Haval', imgSrc: require('@/assets/brands/haval.png') },
        { name: 'Suzuki', imgSrc: require('@/assets/brands/suzuki.png') },
      ],
      allBrandsShowed: false,
      brandCardHeight: null,
      brandCardHiddenHeight: null,
      showRow: 1,
      btnText: '',
      btnTextOnClose: '',
    }
  },
  methods: {
    onResize() {
      this.brandGridInit()
    },
    brandGridInit: function () {
      if (window.innerWidth >= 1200) {
        this.showRow = 1
      }
      if (window.innerWidth < 1200) {
        this.showRow = 2
      }
      if (window.innerWidth < 768) {
        this.showRow = 3
      }
      if (window.innerWidth < 450) {
        this.showRow = 4
      }

      this.initBtnText()

      this.brandCardHeight = this.getBrandCardRowHeight()
      this.brandCardHiddenHeight = this.getBrandCardHiddenHeight()
      this.stateCheck()
    },
    getBrandCardRowHeight() {
      const gridGap = window
        .getComputedStyle(this.$refs.brandGrid.firstChild)
        .getPropertyValue('grid-row-gap')
        .slice(0, -2)

      return (
        this.$refs.brandGrid.firstChild.firstChild.offsetHeight * this.showRow +
        gridGap * (this.showRow - 1) +
        'px'
      )
    },
    getBrandCardHiddenHeight() {
      return this.$refs.brandGrid.firstChild.offsetHeight + 'px'
    },
    initBtnText() {
      const brands = Array.from(this.$refs.brandGrid.firstChild.children)
      let showedBrands = 0

      brands.every((brand) => {
        showedBrands++
        return brand.offsetTop == 0
      })

      showedBrands *= this.showRow

      const hiddenBrands = brands.length - showedBrands
      const hiddenBrandsPostfix =
        hiddenBrands +
        this.getWordCase(this.hiddenBrands, [' марку', ' марки', ' марок'])
      this.btnText = `Показать ещё ${hiddenBrandsPostfix}`
      this.btnTextOnClose = `Скрыть ${hiddenBrandsPostfix}`
    },
    toggleBrandsVisibility() {
      this.allBrandsShowed = !this.allBrandsShowed
      this.stateCheck()
    },
    stateCheck: function () {
      this.$refs.brandGrid.style.setProperty(
        '--height-with-hidden-brands',
        this.allBrandsShowed ? this.brandCardHiddenHeight : this.brandCardHeight
      )
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.brand {
  padding-top: var(--spacer-l);
  margin-bottom: calc(var(--spacer-m) * 2 + 20px);

  &-grid {
    max-height: var(--height-with-hidden-brands);
    overflow: hidden;
    transition: max-height 0.3s var(--ease);
    &__show-all {
      display: none;
    }

    &-inner {
      position: relative;
    }
  }

  &__show-all {
    display: flex;
    flex-direction: column;
    margin-top: var(--spacer-m);
    color: var(--accent-primary);
    user-select: none;
    cursor: pointer;
    transition: color 0.1s var(--ease), opacity 0.3s var(--ease),
      margin-bottom 0.3s var(--ease), height 0.3s var(--ease);
    &:hover {
      color: var(--accent-secondary);
    }

    &__text {
      display: flex;
      transition: margin 0.3s var(--ease), opacity 0.3s var(--ease);
      &--hide {
        opacity: 0;
        margin-top: -1.25rem;
      }
    }

    &__icon {
      /deep/ *,
      /deep/ svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
    &--showed {
      color: var(--text-muted);
      &:hover {
        color: var(--text-main);
      }
      .brand__show-all {
        &__text {
          &--show {
            opacity: 0;
            margin-bottom: -1.25rem;
          }
          &--hide {
            margin-top: 0;
            opacity: 1;
          }
        }
      }
    }
  }
}

//Сворачиваем в ленту на мобильном разрешении
@include media-breakpoint-down(mobileL) {
  @media (pointer: coarse) {
    .brand {
      .container {
        padding: 0;
        overflow-x: auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      &-grid {
        margin: 0;
        padding: 0;
        display: flex;
        overflow: visible;
        &__show-all {
          display: flex;
          padding: calc(var(--spacer-m) * 0.8) var(--spacer-m)
            calc(var(--spacer-m) * 0.9);
          background-color: var(--accent-primary);
          color: var(--text-on-accent);
          border-radius: var(--border-radius);
          text-align: center;
          align-items: center;
          transition: background-color 0.1s var(--ease),
            transform 0.1s var(--ease), border-radius 0.1s var(--ease);
          &:active {
            transform: scale(0.945);
            background-color: var(--accent-secondary);
            border-radius: calc(var(--border-radius) * 1.5);
          }
        }
        &-inner {
          display: flex;
          padding: 0 var(--spacer-l);
          & > * {
            flex-shrink: 0;
            width: 25vw;
            min-width: 125px;
            &:nth-child(n + 10):not(.brand-grid__show-all) {
              display: none;
            }
          }
        }
      }
      &__show-all {
        display: none;
      }
    }
  }
}
</style>
