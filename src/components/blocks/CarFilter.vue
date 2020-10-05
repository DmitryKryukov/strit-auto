<template lang="pug">
fragment
  .floor.filter(
    :class="{ 'filter--active': filterShown }",
    @click.self="toggleFilter",
    @scroll.passive="filterScroll"
  )
    .container
      .filter-main(ref="filter")
        .grid.grid--5
          .filter-main-brand
            .grid.grid--9.segmented
              .filter-main-brand__item.segmented__item(
                v-for="brand in brands",
                :key="brand.name",
                @click="segmentedToggle"
              ) {{ brand.name }}
          .filter-main-price 
            span.group-name Стоимость
            .row.group
              textField(
                label="Стоимость от, ₽",
                placeholder="298 810",
                maxLength="10",
                validateAs="price"
              )
              textField(
                label="Стоимость до, ₽",
                placeholder="2 844 000 ",
                maxLength="10",
                validateAs="price"
              )
          .filter-main-body 
            span.group-name Кузов
            .row.group.row--wrap.segmented
              .filter-main-body__item.segmented__item(
                v-for="bodyType in bodyTypes",
                :key="bodyType.name",
                @click="segmentedToggle"
              ) {{ bodyType.name }}
          .filter-main-params
            span.group-name Параметры
            .row.group.row--wrap.segmented
              .segmented__item(@click="segmentedToggle") Автомат
              .segmented__item(@click="segmentedToggle") 4×4
        .filter-apply
          anchor.filter-apply__btn(button, primary) Показать 25 авто
      .filter-applied.row.row--wrap(v-if="filters.length")
        .filter-applied__text Применены фильтры:
        .filter-applied__item(
          v-for="filter in filters",
          :key="filter",
          @click="filterRemove(filter)"
        )
          | {{ filter }}
          .filter-applied__item__delete
            icon(icon="cross")
        .filter-applied__reset(@click="filterReset") Сбросить все
  .filter__mobile-handler(@click="toggleFilter")
    icon(icon="filter")
    | Подбор авто
</template>

<script>
//todo: Take out segmentedControl to a isolated component
import anchor from "@/components/controls/Anchor";
import icon from "@/components/graphs/Icon";
import textField from "@/components/controls/Textfield";
import stringsHelper from "@/components/utils/Strings";
import fixScroll from "@/components/utils/UI";

export default {
  name: "BrandGrid",
  components: {
    icon,
    textField,
    anchor,
  },
  mixins: [stringsHelper, fixScroll],
  data() {
    return {
      filters: [],
      filterShown: false,
      filterShownAfter: false,
      hide: false,
    };
  },
  computed: {
    brands() {
      return this.$store.state.brands.all;
    },
    bodyTypes() {
      return this.$store.state.bodyTypes.all;
    },
  },
  methods: {
    segmentedToggle(event) {
      if (event.target.classList.toggle("segmented__item--active")) {
        this.filters.push(event.target.innerText);
      } else {
        this.filters = this.filters.filter(
          (item) => item !== event.target.innerText
        );
      }
    },
    filterRemove(filterVal) {
      if (filterVal) {
        this.filters = this.filters.filter((item) => item !== filterVal);
        Array.from(document.querySelectorAll(".segmented__item--active"))
          .filter((item) => item.innerText === filterVal)
          .forEach((item) => item.classList.remove("segmented__item--active"));
      }
    },
    filterReset() {
      this.filters = [];
      Array.from(document.querySelectorAll(".segmented__item--active")).forEach(
        (activeItem) => {
          activeItem.classList.remove("segmented__item--active");
        }
      );
    },
    toggleFilter() {
      if ((this.filterShown = !this.filterShown)) {
        this.fixScroll();
        this.hide = false;
        this.$refs.filter.parentNode.parentNode.scrollTo({
          top: 400,
          behavior: "smooth",
        });
      } else {
        this.unFixScroll();
        this.$refs.filter.parentNode.parentNode.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      setTimeout(() => {
        this.filterShownAfter = !this.filterShownAfter;
      }, 500);
    },
    filterScroll() {
      if (
        (this.$refs.filter.parentNode.parentNode.scrollTop <= 250) &
        this.filterShownAfter
      ) {
        this.hide = true;
      }
      if (this.$refs.filter.parentNode.parentNode.scrollTop <= 0) {
        this.toggleFilter();
      }
    },
  },
  watch: {
    hide(val) {
      if (val === true) {
        this.$refs.filter.parentNode.parentNode.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/toptier";
.filter {
  margin: calc(var(--spacer-m) * 2 + 20px) 0 0;
  &-apply {
    @include media-breakpoint-up(mobileL) {
      display: none;
    }
    position: sticky;
    bottom: 0;
    margin-right: calc(var(--spacer-l) * -1);
    margin-left: calc(var(--spacer-l) * -1);
    padding: 0 var(--spacer-l) var(--spacer-s);
    background-color: var(--background-card);
    /deep/ {
      .btn {
        width: 100%;
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
  }
  @include media-breakpoint-down(mobileL) {
    position: fixed;
    z-index: 999;
    margin-right: calc(var(--spacer-l) * -1);
    margin-left: calc(var(--spacer-l) * -1);
    width: calc(var(--spacer-l) * 2 + 100vw);
    height: 100vh;
    top: -52px;

    background-color: #00000000;
    overflow-y: auto;
    transition: background-color 0.3s var(--ease);
    pointer-events: none;
    .container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: flex-end;
      min-height: 100vh;
      margin-top: 100vh;
      transition: margin-top 0.5s var(--ease-back-small);

      .filter-main {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .filter-applied {
        display: none;
      }
    }
    &--active {
      display: block;
      background-color: var(--background-modal-backdrop);
      pointer-events: all;
      .container {
        // margin-top: 60vw;

        .filter-main {
          flex: 1;
        }
      }
    }
  }

  .group-name {
    display: block;
    margin: 0 0 0.25rem 0.0625rem;
    @include text-caption();
    color: var(--text-muted);
    @include media-breakpoint-down(mobileL) {
      display: none;
    }
  }
  &-main {
    background-color: var(--background-card);
    border-radius: var(--border-radius);
    padding: var(--spacer-m) var(--spacer-m) calc(var(--spacer-m) * 1);
    .grid {
      grid-auto-flow: row dense;
    }
    &-brand {
      grid-column: 1/-1;
    }
    &-price {
      grid-column: 1/3;
      .group {
        @include media-breakpoint-down(mobileM) {
          flex-direction: column;
        }
      }
    }
    &-body {
      grid-column: span 2 / span 1;
      @media (max-width: 1103px) {
        grid-column: 1 / -1;
      }
      @include media-breakpoint-down(mobileL) {
        display: none;
      }
    }
    &-params {
      @include media-breakpoint-down(mobileL) {
        display: none;
      }
    }
  }
  .segmented {
    grid-gap: 1px;
    border-radius: var(--border-radius);
    overflow: hidden;
    border: 1px solid var(--background-main);
    &__item {
      background-color: var(--background-card);
      box-shadow: 0 0 0 1px var(--background-main);
      padding: 14.5px 12px;
      cursor: pointer;
      flex: 1;
      position: relative;
      user-select: none;

      @include text-caption;
      transition: background-color 0.1s var(--ease), color 0.15s var(--ease),
        transform 0.1s var(--ease);

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: multiply;
        pointer-events: none;
        transition: background-color 0.15s var(--ease), color 0.15s var(--ease),
          border-radius 0.15s var(--ease), transform 0.15s var(--ease);
      }
      &:active {
        transform: scale(0.945);
        &:after {
          background-color: var(--accent-secondary-transparent);
          transform: scale(0.945, 0.8);
          border-radius: calc(var(--border-radius) - 2px);
        }
      }
      &:hover {
        background-color: var(--background-main);
        color: var(--accent-primary);
      }
      &--active {
        color: var(--accent-primary);
        &:after {
          background-color: var(--accent-primary-transparent);

          top: 2px;
          left: 2px;
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          border-radius: calc(var(--border-radius) - 2px);
        }
      }
    }
  }
  .filter-applied {
    margin-top: var(--spacer-l);
    align-items: center;
    @include text-small;
    grid-gap: var(--spacer-s);
    &__item {
      padding: 2px 0.5rem 1px;
      color: var(--accent-primary);
      background-color: var(--accent-secondary-transparent);
      border-radius: calc(var(--border-radius) - 4px);
      display: flex;
      align-items: center;
      &__delete {
        margin-top: -1px; //Компенсация
        /deep/ .icon,
        /deep/ .icon svg {
          width: 0.9375rem;
          height: 0.9375rem;
        }
      }
    }
    &__reset {
      padding: 2px 0.5rem 1px;
      color: var(--text-on-accent);
      background-color: var(--accent-secondary);
      border-radius: calc(var(--border-radius) - 4px);
    }
  }
  /deep/ .text-field {
    &__el:not(:placeholder-shown):not(:focus) {
      color: var(--accent-primary);
      background-color: var(--accent-primary-transparent);
    }
  }
  &__mobile-handler {
    position: fixed;
    display: flex;
    align-items: center;
    bottom: var(--spacer-s);
    bottom: calc(constant(safe-area-inset-bottom) + var(--spacer-s));
    bottom: calc(env(safe-area-inset-bottom) + var(--spacer-s));

    left: var(--spacer-l);
    padding: calc(var(--spacer-m) * 0.6) calc(var(--spacer-m));
    text-align: center;
    background-color: var(--accent-primary);
    color: var(--text-on-accent);
    border-radius: var(--border-radius);
    user-select: none;
    transition: transform 0.1s var(--ease), border-radius 0.1s var(--ease),
      color 0.1s var(--ease), background-color 0.1s var(--ease);

    z-index: 9;
    @include media-breakpoint-up(mobileL) {
      display: none;
    }
    .icon {
      margin: -2px 4px 0 -4px;
    }
    &:hover {
      background-color: var(--accent-secondary);
    }
    &:active {
      border-radius: calc(var(--border-radius) * 1.5);
      transform: scale(0.945);
    }
  }
}
</style>
