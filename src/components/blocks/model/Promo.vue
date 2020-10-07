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
  .promo(@mousemove='move')
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
          .promo__tiles
            .promo__tile
              .promo__pattern
            .promo__tile
              .promo__pattern
            .promo__tile
              .promo__pattern
            .promo__tile
              .promo__pattern
            .promo__tile
              .promo__pattern
            .promo__tile
              .promo__pattern
            .promo__tile
              .promo__pattern
            .promo__tile
              .promo__pattern
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
  methods: {
    move(e) {
      const bg = document.querySelector('.promo__background')
      bg.style.setProperty('--mouse-x', e.clientX * 0.1 + 'px')
      bg.style.setProperty('--mouse-y', e.clientY * 0.1 + 'px')
      bg.style.setProperty('--angle', e.clientY * e.clientX * 0.00005 + 'deg')
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../../styles/toptier';
.promo {
  position: relative;
  height: 553px;
  background-color: var(--background-card-accented);
}
.promo__aside {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4.625rem 0 5.5rem;
  z-index: 2;
  position: relative;
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
.promo__background {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  --mouse-x: 0;
  --mouse-y: 0;
  --angle: 45deg;
  overflow: hidden;
}
.promo__tiles {
  width: 300px;
  height: 300px;
  transform: scale(2) rotate(var(--angle));
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300' fill='none'%3E%3Cpath d='M146.173 1.58513C148.623 0.570188 151.377 0.570187 153.827 1.58513L252.239 42.3489C254.689 43.3638 256.636 45.3105 257.651 47.7608L298.415 146.173C299.43 148.623 299.43 151.377 298.415 153.827L257.651 252.239C256.636 254.689 254.689 256.636 252.239 257.651L153.827 298.415C151.377 299.43 148.623 299.43 146.173 298.415L47.7608 257.651C45.3105 256.636 43.3638 254.689 42.3489 252.239L1.58513 153.827C0.570188 151.377 0.570187 148.623 1.58513 146.173L42.3489 47.7608C43.3638 45.3105 45.3105 43.3638 47.7608 42.3489L146.173 1.58513Z' fill='%23C4C4C4'/%3E%3C/svg%3E");
  background-color: #0005eb;
}
.promo__pattern {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background-image: url('~@/assets/triangles.jpg');
  background-size: 100%;
  background-position: var(--mouse-x) var(--mouse-y);
  transform: rotate(var(--angle));
  //transform: 0;
  //animation: 10s linear 0s infinite rotate;
  @keyframes rotate {
    from {
      transform: 0;
    }
    to {
      transform: rotate(360deg);
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--accent-primary);
    mix-blend-mode: hard-light;
  }
}
.promo__tile {
  position: absolute;
  width: 150px;
  height: 150px;
  transform-origin: right bottom;
  mask-image: url("data:image/svg+xml,%3Csvg width='150' height='107' viewBox='0 0 150 107' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.9341 0.93396L0 107H150L43.9341 0.93396Z' fill='%23C4C4C4'/%3E%3C/svg%3E%0A");
  mask-position: right bottom;
  mask-repeat: no-repeat;
}
.promo__tile:nth-child(1) {
  transform: rotate(45deg);
}
.promo__tile:nth-child(2) {
  transform: scaleX(-1) rotate(45deg);
  //filter: hue-rotate(180deg);
}
.promo__tile:nth-child(3) {
  transform: scaleX(-1);
}
.promo__tile:nth-child(4) {
  transform: scaleY(-1);
}
.promo__tile:nth-child(5) {
  transform: scaleY(-1) rotate(45deg);
  //filter: hue-rotate(180deg);
}
.promo__tile:nth-child(6) {
  transform: scaleY(-1) scaleX(-1) rotate(45deg);
}
.promo__tile:nth-child(7) {
  transform: scaleY(-1) scaleX(-1);
  //filter: hue-rotate(180deg);
}
.promo__tile:nth-child(8) {
  //filter: hue-rotate(180deg);
}
</style>

