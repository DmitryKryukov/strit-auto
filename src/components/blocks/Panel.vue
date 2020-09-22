<template lang="pug">
section.panel.floor(ref='panel')
  .panel__inner.container.row
    icon.panel__icon(:icon='icon', v-if='icon')
    .text-group
      .panel__text {{ text }}
      anchor.panel__anchor(:href='anchorHref', v-if='anchorText', underlined) {{ anchorText }}
    action-button.panel__button.push(
      icon='cross',
      v-if='closeable',
      @click='closePanel'
    )
</template>

<script>
import icon from '@/components/graphs/Icon.vue'
import anchor from '@/components/controls/Anchor.vue'
import actionButton from '@/components/controls/ActionButton.vue'
import utils from '@/components/utils'

export default {
  name: 'Panel',
  components: {
    icon,
    anchor,
    actionButton,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
      default:
        'Антикризисное предложение при онлайн бронировании до 31 августа:',
    },
    anchorText: {
      type: String,
    },
    anchorHref: {
      type: String,
    },
    closeable: {
      type: Boolean,
    },
  },
  mounted: function () {
    this.initPanel()
    window.addEventListener('optimizedResize', () => {
      this.initPanel()
    })
  },
  beforeDestroy: function () {
    window.removeEventListener('optimizedResize', () => {
      this.initPanel()
    })
    this.$el.parentNode.removeChild(this.$el)
  },
  methods: {
    initPanel: function (event) {
      let panelHeight = this.$refs.panel.offsetHeight * -1 + 'px'
      this.$refs.panel.style.setProperty('--panel-height', panelHeight)
    },
    openPanel: function (event) {
      this.$refs.panel.classList.remove('panel--closed')
    },
    closePanel: function (event) {
      this.$refs.panel.classList.add('panel--closed')
      this.$emit('panelColapsing', this)
      setTimeout(() => {
        this.$emit('panelColapsed', this)
        this.$destroy()
      }, 500)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.panel {
  position: relative;
  padding: 12px 0;
  background-color: var(--background-card-accented);
  color: var(--text-muted);
  overflow: hidden;
  transition: margin-top 0.5s cubic-bezier(0.32, 0.08, 0.24, 1);

  .text-group {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  &--closed {
    margin-top: var(--panel-height);
  }

  &__inner {
    min-height: 1.5rem;
    align-items: center;
    @include media-breakpoint-down(tabletM) {
      align-items: flex-start;
    }
  }

  &__icon {
    margin-right: 0.25rem;
    @include media-breakpoint-down(tabletM) {
      display: none;
    }
  }
  &__button {
    z-index: 1;
  }

  &__text,
  &__anchor {
    @include text-body();
    margin-right: 1rem;
    @include media-breakpoint-down(mobileL) {
      @include text-caption();
    }
    @include media-breakpoint-down(mobileS) {
      margin-right: 0.5rem;
    }
  }

  /deep/ .anchor {
    @include media-breakpoint-down(mobileM) {
      position: absolute;
      box-sizing: border-box;
      inset: 0;
      width: 100vw;
      opacity: 0;
    }
  }
}
</style>

