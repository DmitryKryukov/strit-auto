<template lang="pug">
.keen-slider__slide
  .keen-slider__slide-inner(
    :style='{ backgroundColor: discount.backgroundColor }',
    :class='{ "keen-slider__slide--inverted": inverted }'
  )
    .container.slide
      .slide__tag(v-if='discount.tag') {{ discount.tag }}
      h2.slide__title {{ discount.title }}
      .slide__description(v-html='discount.description')
      anchor.slide__btn(
        href='#',
        button,
        :primary='inverted',
        :style='{ color: discount.backgroundColor }'
      ) {{ discount.btnText }}
      img.slide__image(:src='discount.img')
      img.slide__bevel(src='../../assets/discounts/bevel.png')
</template>

<script>
import anchor from '@/components/controls/Anchor.vue'
import colors from '@/components/utils/colors'

export default {
  name: 'Slide',
  components: {
    anchor,
  },
  mixins: [colors],
  props: {
    discount: {
      type: Object,
    },
  },
  computed: {
    inverted() {
      return this.getBrightness(this.discount.backgroundColor) > 128
        ? true
        : false
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
  color: var(--text-on-accent);
  font-weight: 500;
  overflow: visible;
  padding-top: 0;
  padding-bottom: 0;
  &--inverted {
    color: var(--text-main-accented);
    .slide__tag {
      color: var(--text-muted);
    }
    .slide__description {
      color: var(--text-main);
    }
    .slide__btn {
      color: #fff !important;
    }
  }
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
    padding: calc(var(--spacer-l) * 1.5) var(--spacer-l)
      calc(var(--spacer-l) * 2);
  }
  @include media-breakpoint-down(tabletM) {
    padding: calc(var(--spacer-l) * 1.5) var(--spacer-l)
      calc(var(--spacer-l) * 2);
  }
  @include media-breakpoint-down(mobileL) {
    padding: calc(var(--spacer-l) * 1.5) var(--spacer-l)
      calc(var(--spacer-l) * 2);
  }
  @include media-breakpoint-down(mobileS) {
  }
  &:after {
    //content: "";
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
    @include media-breakpoint-down(tabletM) {
      @include text-caption();
      padding: calc(var(--spacer-s) / 4) calc(var(--spacer-s) / 2);
    }
    @include media-breakpoint-only(tabletS) {
      display: none;
    }
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
    @include text-tagline();
    margin-bottom: var(--spacer-s);
    width: 40%;
    @include media-breakpoint-down(tabletL) {
      width: 50%;
    }
    @include media-breakpoint-down(tabletM) {
      @include text-headline();
    }
    @include media-breakpoint-down(tabletL) {
      width: 90%;
    }
    @include media-breakpoint-down(mobileS) {
      @include text-subhead();
    }
  }
  &__description {
    @include text-subhead();
    width: calc(66.66% - var(--spacer-m) / 2);
    margin-bottom: var(--spacer-l);
    width: 40%;
    font-weight: 500 !important;
    @include media-breakpoint-down(tabletL) {
      width: 50%;
    }
    @include media-breakpoint-down(tabletM) {
      @include text-lead();
    }
    @include media-breakpoint-down(mobileL) {
      width: 90%;
    }
    @include media-breakpoint-down(mobileM) {
      width: 100%;
    }
  }
  &__btn {
    @include text-body();
    font-weight: bold;
    @include media-breakpoint-down(mobileL) {
      margin-top: auto;
      align-self: stretch;
    }
    @include media-breakpoint-down(mobileM) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
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
    @include media-breakpoint-down(desktopS) {
      object-position: 100% 100%;
    }
    @include media-breakpoint-down(tabletL) {
      left: 20vh;
    }
    @include media-breakpoint-down(tabletM) {
      left: 10vh;
    }
    @include media-breakpoint-down(tabletS) {
      left: 12vh;
      top: 50px;
      height: calc(100% - 50px);
    }
    @include media-breakpoint-down(mobileL) {
      left: 10vw;
      top: 0;
      width: calc(100% - 20vw);
      height: 100%;
      border-radius: var(--border-radius);
    }
    @include media-breakpoint-down(mobileM) {
      left: 0;
      width: 100%;
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
      width: calc(var(--spacer-l) * 4);
      height: calc(var(--spacer-l) * 4);
      object-fit: contain;
      object-position: top right;
    }
  }
}
</style>

