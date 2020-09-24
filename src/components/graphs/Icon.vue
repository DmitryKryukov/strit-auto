<template lang="pug">
.icon.icon--md
  .icon--heart(v-if="icon == 'heart'")
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M15.992 3.006c-1.452.064-2.753.637-3.881 1.694l-.117.113-.122-.118C10.662 3.576 9.275 3 7.734 3 4.577 3 2 5.56 2 8.717c0 3.088 1.127 4.552 6.182 8.546l2.688 2.098a1.838 1.838 0 002.26 0l2.364-1.843.933-.74C20.965 13.144 22 11.676 22 8.718 22 5.56 19.423 3 16.266 3l-.274.006zm.274 1.794c2.165 0 3.934 1.757 3.934 3.917l-.005.294c-.076 2.156-1.062 3.341-5.509 6.852l-2.663 2.078a.038.038 0 01-.046 0l-2.364-1.843-.874-.691c-4.142-3.31-4.939-4.44-4.939-6.69C3.8 6.557 5.569 4.8 7.734 4.8c1.333 0 2.507.618 3.57 1.915a.9.9 0 001.398-.007C13.739 5.416 14.909 4.8 16.266 4.8z" fill="currentColor"/>
    </svg>
  .icon--cross(v-if="icon == 'cross'")
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M17.89 5.7a.99.99 0 00-1.4 0l-4.9 4.9-4.9-4.9a.99.99 0 10-1.4 1.4l4.9 4.9-4.9 4.9a.99.99 0 101.4 1.4l4.9-4.9 4.9 4.9a.99.99 0 101.4-1.4l-4.9-4.9 4.9-4.9a.99.99 0 000-1.4z" fill="currentColor"/>
    </svg>
  .icon--menu(v-if="icon == 'menu'")
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
      <path class="icon--menu__top" d="M20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H20Z" fill="currentColor"/>
      <path class="icon--menu__mid" d="M20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20Z" fill="currentColor"/>        
      <path class="icon--menu__bot" d="M20 17C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H20Z" fill="currentColor"/>
    </svg>
  .icon--filter(v-if="icon == 'filter'")
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <circle cx="9.5" cy="8" r="2.5" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8551 9C12.9494 8.68315 13 8.34749 13 8C13 7.65251 12.9494 7.31685 12.8551 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H12.8551ZM6.14494 9H4C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7H6.14494C6.05064 7.31685 6 7.65251 6 8C6 8.34749 6.05064 8.68315 6.14494 9Z" fill="currentColor"/>
      <circle cx="14.5" cy="16" r="2.5" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8551 17C17.9494 16.6831 18 16.3475 18 16C18 15.6525 17.9494 15.3169 17.8551 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H17.8551ZM11.1449 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H11.1449C11.0506 15.3169 11 15.6525 11 16C11 16.3475 11.0506 16.6831 11.1449 17Z" fill="currentColor"/>
    </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
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
