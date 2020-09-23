<template lang="pug">
.text-field-cell
  input.text-field__el(
    type='text',
    :id='id',
    :placeholder='placeholder',
    :maxlength='maxLength',
    @input='valueChanged()',
    @change='valuePush()',
    v-model='value'
  )
  label.text-field__label(:for='id') {{ label }}
</template>

<script>
import stringsHelper from '@/components/utils/Strings'

export default {
  name: 'Textfield',
  props: {
    label: {
      type: String,
      default: 'Лейбл',
    },
    placeholder: {
      type: String,
      default: ' ',
    },
    maxLength: {
      type: String,
      default: '48',
    },
    validateAs: {
      type: String,
      default: 'text',
    },
  },
  mixins: [stringsHelper],
  data() {
    return {
      id: '0',
      value: '',
    }
  },
  mounted() {
    this.generateId()
  },
  methods: {
    generateId() {
      this.id = Math.random().toString(36).substring(7)
    },
    valueChanged() {
      if (this.validateAs == 'price') {
        this.value = this.toRuble(this.value.replace(/\s/g, ''), '')
        this.$emit('input', this)
      }
    },
    valuePush() {
      this.$emit('change', this.value)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
@mixin activeLabel() {
  transform: translate(2px, -10%) scale(0.8);
}
.text-field {
  &-cell {
    position: relative;
    display: inline-block;
    transition: transform 0.4s var(--ease-back);
    width: 100%;
    &:focus-within {
      transform: scale(0.985);
      .text-field__label {
        @include activeLabel();
      }
    }
  }

  &__el {
    width: 100%;
    box-shadow: none;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    appearance: none;
    text-overflow: ellipsis;
    height: 48px;
    font-family: inherit;
    @include text-body();
    color: var(--text-main);
    padding: 19px 12px 5px;
    border-radius: var(--border-radius);
    border: 1px solid var(--background-main);
    transition: background-color 0.1s var(--ease),
      border-radius 0.1s var(--ease), border-color 0.1s var(--ease);
    &::placeholder {
      color: var(--text-muted);
      opacity: 0;
    }
    &:not(:placeholder-shown) {
      & + label {
        @include activeLabel();
      }
    }
    &:hover {
      background-color: var(--background-card-accented);
      border-color: var(--background-card-accented);
    }
    &:active,
    &:focus {
      border-radius: calc(var(--border-radius) * 1.5);
      background-color: var(--background-main);
      &::placeholder {
        opacity: 0.6;
      }
    }
  }
  &__label {
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 12px;
    line-height: 48px;
    user-select: none;
    color: var(--text-muted);
    pointer-events: none;
    transform-origin: top left;
    transition: transform 0.1s var(--ease);
  }
}
</style>
