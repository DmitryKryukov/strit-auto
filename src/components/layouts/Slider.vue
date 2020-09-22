
<template lang="pug">
fragment
  .navigation-wrapper
    .keen-slider(ref='slider')
      slot

    .arrow(
      v-if='slider',
      @click='slider.prev()',
      :class='{ arrow: true, "arrow--left": true, "arrow--disabled": current === 0 }'
    )
      svg.arrow__icon(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 24 24')
        path(
          d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z'
        )
    .arrow(
      :class='{ arrow: true, "arrow--right": true, "arrow--disabled": current === slider.details().size - 1 }',
      v-if='slider',
      @click='slider.next()'
    )
      svg.arrow__icon(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 24 24')
        path(d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z')

  .dots(v-if='slider')
    .container
      button(
        v-for='(slide, idx) in dotHelper',
        @click='slider.moveToSlideRelative(idx)',
        :class='{ dot: true, active: current === idx }',
        :key='idx'
      )
        svg(
          viewBox='0 0 10 10',
          fill='none',
          xmlns='http://www.w3.org/2000/svg'
        )
          path(
            d='M5 0L9.375 2.5V7.5L5 10L0.625 7.5V2.5L5 0Z',
            fill='currentColor'
          )
</template>

<script>
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import onResize from '@/components/utils/IOnResize'

export default {
  name: 'Slider',
  mixins: [onResize],
  data() {
    return {
      current: 0,
      slider: null,
      slideOffset: 0,
      cardFlipAnimation: false,
      maxAngle: 10,
      windowWidth: null,
    }
  },
  computed: {
    dotHelper() {
      return this.slider ? [...Array(this.slider.details().size).keys()] : []
    },
    slideOffsetValue() {
      return this.slideOffset
    },
  },
  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      initial: this.current,

      slideChanged: (s) => (this.current = s.details().relativeSlide),

      move: (s) => {
        if (this.cardFlipAnimation) {
          const progress = (
            s.details().position / this.windowWidth +
            1
          ).toFixed(2)
          this.$refs.slider.style.setProperty(
            '--rotate',
            this.maxAngle * (1 - progress) + 'deg'
          )
        }
      },
    })
  },
  beforeDestroy() {
    if (this.slider) this.slider.destroy()
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
      this.sliderInit()
    },
    sliderInit: function () {
      const slides = Array.from(this.$refs.slider.children)
      if (this.windowWidth < 450) {
        this.cardFlipAnimation = true
        slides.forEach((s, i) => {
          s.firstChild.style.transform =
            'rotate(calc(var(--rotate) + ' + this.maxAngle * i + 'deg)'
        })
      } else {
        this.cardFlipAnimation = false
        slides.forEach((s) => (s.firstChild.style.transform = 'rotate(0deg)'))
      }
    },
  },
}
</script>

<style lang="scss">
@import '../../styles/toptier';
.keen-slider {
  background: var(--background-card-accented);
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
}

.navigation-wrapper {
  position: relative;
  overflow: hidden;
}

.dots {
  display: flex;
  padding: var(--spacer-m) 0;
  width: 100%;
  position: absolute;
  @include media-breakpoint-down(mobileS) {
    display: none;
  }
  .container {
    display: flex;
    @include media-breakpoint-down(mobileL) {
      justify-content: center;
    }
  }

  .dot {
    position: relative;
    width: 0.75rem;
    height: 0.75rem;
    padding: 0.625rem;
    margin-right: 0.3125rem;
    background-color: transparent;
    color: var(--background-card-accented);
    border-radius: 50%;
    border: none;
    transition: transform 0.2s var(--ease), color 0.3s var(--ease);
    &:not(.active) {
      cursor: pointer;
    }
    &:hover {
      background-color: var(--background-card-accented);
      color: var(--text-muted);
      transform: scale(1.4);
    }
    svg {
      position: absolute;
      width: 50%;
      left: 25%;
      top: 25%;
    }

    &.active {
      color: var(--accent-primary);
      transform: scale(1.4);
      &:hover {
        background-color: transparent;
      }
    }
  }
}

.arrow {
  position: absolute;
  top: 50%;
  width: 3rem;
  height: 3rem;
  background-color: var(--accent-secondary);
  border-radius: var(--border-radius);
  cursor: pointer;
  opacity: 0.3;
  transform: translateY(-50%);
  transition: filter 0.1s var(--ease), width 0.1s var(--ease),
    opacity 0.2s var(--ease), height 0.1s var(--ease);
  @include media-breakpoint-down(mobileM) {
    width: 2rem;
    background-color: #0f2e8acc;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    fill: #fff;
  }
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 7rem;
    height: 240%;
    top: -70%;
  }
  &--left {
    left: var(--spacer-l);
    @include media-breakpoint-down(desktopS) {
      left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &:after {
      left: -2rem;
    }
    .arrow__icon {
      transform: translate(-55%, -50%);
      @include media-breakpoint-down(desktopS) {
        transform: translate(-60%, -50%);
      }
    }
  }
  &--right {
    left: auto;
    right: var(--spacer-l);
    &:after {
      right: -2rem;
    }
    @include media-breakpoint-down(desktopS) {
      right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .arrow__icon {
      transform: translate(-45%, -50%);
      @include media-breakpoint-down(mobileM) {
        transform: translate(-40%, -50%);
      }
    }
  }
  &:hover:not(.arrow--disabled) {
    filter: saturate(150%);
    opacity: 1;
  }
  &:active:not(.arrow--disabled) {
    width: 2rem;
    height: 3.5rem;
    @include media-breakpoint-down(mobileM) {
      width: 1.5rem;
      height: 3.75rem;
    }
  }
}

.arrow--disabled {
  opacity: 0;
  pointer-events: none;
}
</style>



