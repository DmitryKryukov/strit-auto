<template lang="pug">
button.icon-button(@click='actionButtonClick'): icon(:icon='icon')
</template>

<script>
import icon from '@/components/graphs/Icon.vue'
export default {
  name: 'ActionButton',
  components: {
    icon,
  },
  props: {
    icon: {
      type: String,
      required: true,
      default: 'placeholder',
    },
  },
  methods: {
    actionButtonClick: function (event) {
      this.$emit('click', this)
    },
  },
}
</script>

<style scoped lang="scss">
.icon-button {
  color: inherit;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, color 0.3s;
  transition-timing-function: var(--ease);
  &:hover {
    background-color: var(--background-card-accented);
    color: var(--accent-primary);
    mix-blend-mode: multiply;
  }
  &:active {
    color: var(--accent-secondary);
    transform: scale(0.8);
  }
}
</style>
