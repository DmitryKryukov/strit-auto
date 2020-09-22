<template lang="pug">
.keen-slider__slide(slot-scope='props') 
  .keen-slider__slide-inner(:style='{ backgroundColor: this.backgroundColor }')
    .container.slide
      .slide__tag(v-if='tag') {{ tag }}
      h2.slide__title {{ title }}
      .slide__description(v-html='description')
      anchor.slide__btn(href='#', button) {{ btnText }}
      img.slide__image(src='../../assets/discounts/mock.png')
      img.slide__bevel(src='../../assets/discounts/bevel.png')
</template>

<script>
import anchor from '@/components/controls/Anchor.vue'
export default {
  name: 'Slide',
  components: {
    anchor,
  },
  props: {
    tag: {
      type: String,
    },
    title: {
      type: String,
      default: 'Заголовок акции',
    },
    description: {
      type: String,
      default: 'Описание акции',
    },
    btnText: {
      type: String,
      default: 'Узнать подробнее',
    },
    imgSrc: {
      type: String,
      default: '../../assets/discounts/mock.png',
    },
    slideOffset: {
      type: Number,
      default: 0,
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.keen-slider__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;

  overflow: visible;
  padding-top: 0;
  padding-bottom: 0;

  @include media-breakpoint-down(mobileL) {
    padding-top: var(--spacer-l);
    padding-bottom: var(--spacer-l);
    min-height: 500px;
  }
  @include media-breakpoint-down(mobileS) {
    min-height: 420px;
  }
  &-inner {
    background-color: var(--background-card);
    width: 100%;
    height: 100%;
    @include media-breakpoint-down(mobileL) {
      margin: 0 var(--spacer-l);
      border-radius: var(--border-radius);
    }
  }
  &:nth-child(odd) {
    .keen-slider__slide-inner {
      background-color: var(--accent-primary);
    }
  }
  &:nth-child(even) {
    .keen-slider__slide-inner {
      background-color: var(--accent-secondary);
    }
  }
}
.slide {
  padding: calc(var(--spacer-l) * 2.5) var(--spacer-l) calc(var(--spacer-l) * 3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @include media-breakpoint-down(desktopS) {
    padding: calc(var(--spacer-l) * 1.5) calc(var(--spacer-l) * 2)
      calc(var(--spacer-l) * 2);
  }
  @include media-breakpoint-down(tabletM) {
    padding: calc(var(--spacer-l) * 3) calc(var(--spacer-l) * 3.5)
      calc(var(--spacer-l) * 4.5);
  }
  @include media-breakpoint-down(mobileL) {
    padding: calc(var(--spacer-l) * 1.5) var(--spacer-l)
      calc(var(--spacer-l) * 2);
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 0, 0, 0.5) 100%
    );
    mix-blend-mode: soft-light;
    @include media-breakpoint-down(mobileL) {
      border-radius: var(--border-radius);
    }
    z-index: -2;
  }
  &__tag {
    display: inline-block;
    padding: calc(var(--spacer-s) / 2) var(--spacer-s);
    position: relative;
    margin-bottom: var(--spacer-s);
    &:before {
      content: '#';
      margin-right: 0.25rem;
      opacity: 0.62;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--background-card-accented);
      z-index: -1;
      mix-blend-mode: multiply;
      border-radius: var(--border-radius);
    }
  }
  &__title {
    @include text-title();
    margin-bottom: var(--spacer-s);
    @include media-breakpoint-down(tabletM) {
      @include text-tagline();
      width: 100%;
    }
  }
  &__description {
    @include text-headline();
    width: calc(66.66% - var(--spacer-m) / 2);
    margin-bottom: var(--spacer-l);
    @include media-breakpoint-down(tabletS) {
      @include text-subhead();
      width: 90%;
    }
  }
  &__btn {
    @include text-body();
    @include media-breakpoint-down(mobileL) {
      margin-top: auto;
      align-self: stretch;
    }
  }
  &__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: contain;
    object-position: 80% 100%;
    mix-blend-mode: overlay;
    opacity: 0.5;
    display: none;
    @include media-breakpoint-down(mobileL) {
      display: block;
      display: none;
      border-radius: var(--border-radius);
    }
    @include media-breakpoint-down(desktopS) {
      object-position: calc(100% - calc(var(--spacer-l) * 2)) 100%;
    }
    @include media-breakpoint-down(tabletL) {
      object-position: bottom right;
    }
  }
  &__bevel {
    display: none;
    @include media-breakpoint-down(mobileL) {
      display: block;
      position: absolute;
      right: -1px;
      top: -1px;
      width: calc(var(--spacer-l) * 5);
      height: calc(var(--spacer-l) * 5);
      object-fit: contain;
      object-position: top right;
    }
  }
}
</style>

