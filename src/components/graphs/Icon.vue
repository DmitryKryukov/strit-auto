<template lang="pug">
.icon.icon--md
  .icon--heart(v-if='icon == "heart"')
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M15.992 3.006c-1.452.064-2.753.637-3.881 1.694l-.117.113-.122-.118C10.662 3.576 9.275 3 7.734 3 4.577 3 2 5.56 2 8.717c0 3.088 1.127 4.552 6.182 8.546l2.688 2.098a1.838 1.838 0 002.26 0l2.364-1.843.933-.74C20.965 13.144 22 11.676 22 8.718 22 5.56 19.423 3 16.266 3l-.274.006zm.274 1.794c2.165 0 3.934 1.757 3.934 3.917l-.005.294c-.076 2.156-1.062 3.341-5.509 6.852l-2.663 2.078a.038.038 0 01-.046 0l-2.364-1.843-.874-.691c-4.142-3.31-4.939-4.44-4.939-6.69C3.8 6.557 5.569 4.8 7.734 4.8c1.333 0 2.507.618 3.57 1.915a.9.9 0 001.398-.007C13.739 5.416 14.909 4.8 16.266 4.8z" fill="currentColor"/>
    </svg>
  .icon--cross(v-if='icon == "cross"')
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M17.89 5.7a.99.99 0 00-1.4 0l-4.9 4.9-4.9-4.9a.99.99 0 10-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 101.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 101.4-1.4l-4.9-4.9 4.9-4.9a.99.99 0 000-1.4z" fill="currentColor"/>
    </svg>
  .icon--menu(v-if='icon == "menu"')
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
      <path class="icon--menu__top" d="M20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H20Z" fill="currentColor"/>
      <path class="icon--menu__mid" d="M20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20Z" fill="currentColor"/>        
      <path class="icon--menu__bot" d="M20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H20Z" fill="currentColor"/>
    </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.icon {
  &,
  &--md,
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
