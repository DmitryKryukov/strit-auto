<template lang="pug">
mixin promo__color(color = "red")
  .promo__color(style=`color: ${color}`)&attributes(attributes)
    <svg width="28" height="32" viewBox="0 0 28 32">
    <defs>
      <filter id="gradient" x="0" y="0.485596" width="28" height="32" filterUnits="userSpaceOnUse">
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        <linearGradient id="paint0_linear" x1="14" y1="0" x2="14" y2="32" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1"/>
        </linearGradient>
      </defs>
      <path d="M12.4124 0.907226C13.3961 0.345063 14.6039 0.345063 15.5876 0.907226L26.3876 7.07865C27.3847 7.64839 28 8.70869 28 9.85703V22.143C28 23.2913 27.3847 24.3516 26.3876 24.9213L15.5876 31.0928C14.6039 31.6549 13.3961 31.6549 12.4124 31.0928L1.61236 24.9213C0.615315 24.3516 0 23.2913 0 22.143V9.85703C0 8.70869 0.615317 7.64839 1.61236 7.07865L12.4124 0.907226Z" fill="currentColor"/>
      <g class="promo__color__bleak" filter="url(#gradient)">
        <path d="M12.4124 0.907226C13.3961 0.345063 14.6039 0.345063 15.5876 0.907226L26.3876 7.07865C27.3847 7.64839 28 8.70869 28 9.85703V22.143C28 23.2913 27.3847 24.3516 26.3876 24.9213L15.5876 31.0928C14.6039 31.6549 13.3961 31.6549 12.4124 31.0928L1.61236 24.9213C0.615315 24.3516 0 23.2913 0 22.143V9.85703C0 8.70869 0.615317 7.64839 1.61236 7.07865L12.4124 0.907226Z" fill="url(#paint0_linear)" style="mix-blend-mode:soft-light"/>
      </g>

    </svg>
fragment
  .promo
    .container
      .promo__aside
        .promo__info.car-info
          anchor.car__brand(href='/cars') Škoda
          h1.car__model Rapid Monte Carlo
          .car__price 298 810 ₽
          .car__discount Скидка 215 990 ₽
          anchor.car__credit(href='/credit') от 6 773 ₽/мес.
        .promo__colors
          +promo__color("#ECEBE9").promo__color--active
          +promo__color("#000")
          +promo__color("#5E5A59")
          +promo__color("#C54C3B")
          +promo__color("#77A4C3")
          +promo__color("#D0D0CF")
          +promo__color("#DBD7D1")
          +promo__color("#959895")
          +promo__color("#A39D94")
          .promo__color-next
            <svg width="28" height="32" viewBox="0 0 28 32">
              <path d="M12.4124 0.907226C13.3961 0.345063 14.6039 0.345063 15.5876 0.907226L26.3876 7.07865C27.3847 7.64839 28 8.70869 28 9.85703V22.143C28 23.2913 27.3847 24.3516 26.3876 24.9213L15.5876 31.0928C14.6039 31.6549 13.3961 31.6549 12.4124 31.0928L1.61236 24.9213C0.615315 24.3516 0 23.2913 0 22.143V9.85703C0 8.70869 0.615317 7.64839 1.61236 7.07865L12.4124 0.907226Z" fill="white"/>
              <path class="promo__color-next__arrow" d="M14.7915 21.2649L20.424 15.6325L14.7915 10L13.7049 11.0806L17.478 14.8477H8V16.4173H17.478L13.7049 20.1903L14.7915 21.2649Z" fill="var(--accent-primary)"/>
            </svg>

      .promo__main
        .promo__photo
        .promo__background
    .form
</template>

<script>
import slider from '@/components/layouts/Slider.vue'
import anchor from '@/components/controls/Anchor.vue'

export default {
  name: 'DiscountSlider',
  components: {
    slider,
    anchor,
  },
}
</script>

<style scoped lang="scss">
@import '../../../styles/toptier';
.promo {
  height: 553px;
  background-color: var(--background-card-accented);
}
.promo__aside {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4.625rem 0 5.5rem;
}
.car__brand {
  display: inline-block;
  margin-bottom: 0.5rem;
  &::before {
    content: '← ';
  }
}
.car__model {
  @include text-headline();
  margin-bottom: 0.3125rem;
}
.car__price {
  @include text-tagline();
  color: var(--accent-primary);
  margin-bottom: 0.3125rem;
}
.car__discount {
  color: var(--accent-tertiary);
  margin-bottom: 0.5rem;
}
.car__credit {
  color: var(--text-muted);
  &::after {
    content: ' →';
  }
}
.promo__colors {
  display: flex;
  flex-wrap: wrap;
  max-width: 320px;
  margin-top: auto;
  gap: 0.375rem 0.5rem;
}

.promo__color {
  transition: filter 0.15s var(--ease);
}

.promo__color svg {
  overflow: visible;
}
.promo__color--active svg {
  stroke: var(--accent-primary);
  stroke-width: 2px;
}
.promo__color__bleak {
  mix-blend-mode: soft-light;
}
.promo__color svg,
.promo__color-next svg {
  cursor: pointer;
  transition: filter 0.15s var(--ease), transform 0.3s var(--ease-back-easy);
  .promo__color-next__arrow {
    transition: filter 0.15s var(--ease), transform 0.3s var(--ease-back-easy);
    transform-origin: center center;
  }
  &:hover {
    filter: brightness(1.1) saturate(1.3);
    transform: scale(1.4) rotate(30deg);
    .promo__color-next__arrow {
      transform: rotate(-30deg);
    }
  }
  &:active {
    transform: scale(1.1) rotate(45deg);
  }
}
</style>

