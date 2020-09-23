<template lang="pug">
article.car-card
  .car-card__badge(v-if='car.badge') {{ "−" + toRuble(car.priceOld - car.priceCurrent) }}
  .car-card__photo
    img(:src='car.imgSrc')
  .car-card__brand {{ car.brand }}
  .car-card__name {{ car.name }}
  .car-card__price.car-card__price--old {{ toRuble(car.priceOld) }}
  .car-card__price.car-card__price--current {{ toRuble(car.priceCurrent) }}
  anchor.car-card__btn(button, primary) Рассчитать кредит
</template>

<script>
import anchor from '@/components/controls/Anchor.vue'
import stringsHelper from '@/components/utils/Strings'

export default {
  name: 'CarCard',
  components: {
    anchor,
  },
  mixins: [stringsHelper],
  props: {
    car: Object,
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.car-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--background-card);
  border-radius: var(--border-radius);
  padding: var(--spacer-m) var(--spacer-m) calc(var(--spacer-m) * 1);
  cursor: pointer;
  transition: transform 0.1s var(--ease), background-color 0.1s var(--ease);

  &__badge {
    position: absolute;
    top: 4px;
    left: 4px;
    z-index: 1;
    padding: 2px 0.5rem 1px;
    border-radius: calc(var(--border-radius) - 4px);
    color: var(--accent-primary);
    background-color: var(--accent-primary-transparent);
    @include text-small();
    transition: background-color 0.15s var(--ease);
    @include media-breakpoint-down(mobileL) {
      font-size: calc(var(--fz-small) * 0.75);
    }
  }
  &__photo {
    position: relative;
    padding-bottom: 62.5%; // Задаёт соотношение сторон 16×10
    background: var(--background-card-accented);
    margin-top: calc((var(--spacer-m) * -1) + 2px);
    margin-right: calc((var(--spacer-m) * -1) + 2px);
    margin-bottom: 1rem;
    margin-left: calc((var(--spacer-m) * -1) + 2px);
    border-radius: calc(var(--border-radius) - 2px);
    mix-blend-mode: multiply;

    @include media-breakpoint-between(mobileS, mobileL) {
      padding-bottom: 75%; // Задаёт соотношение сторон 4×3
    }

    & img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 2;
      pointer-events: none;
    }
  }
  &__brand {
    color: var(--text-muted);
    margin-bottom: 0.125rem;
  }
  &__name {
    margin-bottom: 0.5rem;
  }
  &__price {
    &--old {
      position: relative;
      display: inline-block;
      color: var(--text-muted);
      align-self: flex-start;
      @include media-breakpoint-down(mobileL) {
        margin-top: auto;
      }

      &:after {
        content: '';
        position: absolute;
        top: calc(50% - 1.5px);
        left: -1px;
        right: -1px;
        height: 2px;
        background-color: var(--text-muted);
        opacity: 0.5;
      }
    }
    &--current {
      @include text-headline();
      margin-left: -0.08em; //Оптическая компенсация из-за разницы в размере шрифта
      margin-bottom: 0.625rem;
      @include media-breakpoint-down(mobileL) {
        margin-bottom: 0;
      }
      @include media-breakpoint-down(mobileM) {
        @include text-subhead();
      }
    }
  }
  &__btn {
    width: 100%;
    @include media-breakpoint-down(mobileL) {
      display: none;
    }
  }
}
.car-card:hover {
  @media (pointer: fine) {
    background-color: var(--background-main);
    transform: scale(1.051);
    .car-card {
      &__badge {
        color: var(--accent-secondary);
        background-color: var(--accent-secondary-transparent);
        transition: background-color 0.3s var(--ease);
      }
    }
  }
}
.car-card:active {
  background-color: var(--background-card-accented);
  transform: scale(0.945);
  border-radius: calc(var(--border-radius) * 1.5);
}
</style>

