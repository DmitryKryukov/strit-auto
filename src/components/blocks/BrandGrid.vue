<template lang="pug">
.floor.brand
  .container
    .brand-grid(ref="brandGrid")
      .grid.grid--9.brand-grid-inner
        brandCard(v-for="brand in brands", :key="brand.name", :brand="brand")
        anchor.brand-grid__show-all(href="/cars"): div +9 марок в&nbsp;каталоге

    .brand__show-all(
      @click="toggleBrandsVisibility",
      :class="{ 'brand__show-all--showed': allBrandsShowed }"
    ) 
      .brand__show-all__text.brand__show-all__text--hide {{ btnTextShowed }}
        icon.brand__show-all__icon(icon="cross")
      .brand__show-all__text.brand__show-all__text--show {{ btnTextHidden }}
</template>

<script>
import brandCard from "@/components/blocks/BrandCard";
import anchor from "@/components/controls/Anchor";
import icon from "@/components/graphs/Icon";
import onResize from "@/components/utils/IOnResize";
import stringsHelper from "@/components/utils/Strings";

export default {
  name: "BrandGrid",
  components: {
    brandCard,
    icon,
    anchor,
  },
  mixins: [onResize, stringsHelper],
  computed: {
    brands() {
      return this.$store.state.brands.all;
    },
  },
  data() {
    return {
      allBrandsShowed: false,
      brandCardHeight: null,
      brandCardHiddenHeight: null,
      hiddenBrands: 9,
      btnTextHidden: "Показать ещё 9 марок",
      btnTextShowed: "Скрыть ещё 9 марок",
      showRow: 1,
    };
  },
  methods: {
    onResize() {
      this.showRow = this.getShowedRow(window.innerWidth);
      this.btnTextHidden = this.getBtnText("Показать ещё");
      this.btnTextShowed = this.getBtnText("Скрыть");
      this.brandCardHeight = this.getBrandCardRowHeight(
        window
          .getComputedStyle(this.$refs.brandGrid.firstChild)
          .getPropertyValue("grid-row-gap")
          .slice(0, -2)
      );
      this.brandCardHiddenHeight = this.getBrandCardHiddenHeight();
      this.stateCheck();
    },
    getShowedRow(windowWidth) {
      return windowWidth < 450
        ? 4
        : windowWidth < 768
        ? 3
        : windowWidth < 1200
        ? 2
        : 1;
    },
    getBrandCardRowHeight(gridGap) {
      return (
        this.$refs.brandGrid.firstChild.firstChild.offsetHeight * this.showRow +
        gridGap * (this.showRow - 1) +
        "px"
      );
    },
    getBrandCardHiddenHeight() {
      return this.$refs.brandGrid.firstChild.offsetHeight + "px";
    },
    getBtnText(
      prefix = "",
      brands = Array.from(this.$refs.brandGrid.firstChild.children)
    ) {
      const showedBrands =
        brands.filter((brand) => brand.offsetTop == 0).length * this.showRow;
      const hiddenBrands = brands.length - showedBrands;
      return (
        prefix +
        " " +
        hiddenBrands +
        this.getWordCase(this.hiddenBrands, [" марку", " марки", " марок"])
      );
    },
    toggleBrandsVisibility() {
      this.allBrandsShowed = !this.allBrandsShowed;
      this.stateCheck();
    },
    stateCheck() {
      this.$refs.brandGrid.style.setProperty(
        "--height-with-hidden-brands",
        this.allBrandsShowed ? this.brandCardHiddenHeight : this.brandCardHeight
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/toptier";
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
    justify-content: flex-start;
    justify-self: flex-start;
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
          white-space: break-spaces;
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
