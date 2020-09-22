<template lang="pug">
router-link.anchor(
  :to='href',
  :class='{ "anchor--underlined": underlined, btn: button, "--primary": primary, "anchor--unbound": unbound }'
): slot
</template>

<script>
import utils from '@/components/utils'
export default {
  name: 'Anchor',
  props: {
    href: {
      type: String,
      default: 'javascript:void(0)',
    },
    underlined: {
      type: Boolean,
      default: false,
    },
    button: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    unbound: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.anchor {
  white-space: nowrap;
  position: relative;
  transition: color 0.1s;
  box-sizing: border-box;
  transition-timing-function: var(--ease);
  &:hover {
    &:not(.btn) {
      color: var(--accent-primary);
    }
  }
  &--underlined {
    &::after {
      content: '';
      position: absolute;
      background-color: currentColor;
      opacity: 0.5;
      inset: auto 0 0 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      border-radius: 1px;
    }
  }
  &--unbound {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
.btn {
  display: inline-block;
  padding: calc(var(--spacer-m) * 0.6) calc(var(--spacer-m));
  border-radius: var(--border-radius);
  background-color: var(--background-card);
  color: var(--accent-primary);
  position: relative;
  transition: transform 0.1s var(--ease), border-radius 0.1s var(--ease),
    color 0.1s var(--ease), background-color 0.1s var(--ease);
  border-radius: var(--border-radius);
  text-align: center;
  &:hover {
    background-color: var(--background-card-accented);
    color: var(--accent-secondary);
  }

  &:active {
    transform: scale(0.945);
    background-color: var(--background-card);
    border-radius: calc(var(--border-radius) * 1.5);
  }
  &.--primary {
    background-color: var(--accent-primary);
    color: var(--text-on-accent);
    &:hover {
      background-color: var(--accent-secondary);
    }
  }
}
</style>
