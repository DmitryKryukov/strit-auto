<template lang="pug">
.brand-card
  .brand-card__logo
    img.brand-card__logo__tint(
      :style='{ maskImage: "url(" + brand.imgSrc + ") " }'
    )
    img.brand-card__logo__img(:src='brand.imgSrc')
  .brand-card__name {{ brand.name }}
  anchor.brand-card__anchor(unbound) 
</template>

<script>
import anchor from '@/components/controls/Anchor.vue'
export default {
  name: 'BrandCard',
  components: {
    anchor,
  },
  props: {
    brand: Object,
    default: function () {
      return {
        name: 'Имя марки не задано',
        imgSrc: require('@/assets/brands/lada.png'),
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.brand-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: calc(var(--spacer-m) * 0.4) 0 calc(var(--spacer-m) * 0.5);
  background-color: var(--background-card);
  overflow: hidden;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.1s var(--ease), transform 0.1s var(--ease),
    border-radius 0.1s var(--ease);
  &__logo {
    width: 100%;
    height: 5rem;
    margin: -0.8rem 0;
    position: relative;
    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &__tint {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--accent-primary);
      opacity: 0;
      mix-blend-mode: hard-light;
      mask-position: center;
      mask-size: contain;
      mask-repeat: no-repeat;
      transition: opacity 0.3s var(--ease);
    }
  }

  &__name {
    @include text-caption();
    text-align: center;
    transition: color 0.15s var(--ease);
  }
  &:hover {
    background-color: var(--background-card-accented);
    .brand-card__logo {
      &__tint {
        opacity: 1;
      }
    }
    .brand-card__name {
      color: var(--accent-primary);
    }
    &:active {
      transform: scale(0.945);
      border-radius: calc(var(--border-radius) * 1.5);
    }
  }
}
</style>
