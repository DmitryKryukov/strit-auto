import optimize from "@/components/utils/optimize";

export default {
  mixins: [optimize],
  mounted() {
    this.onResize();
    window.addEventListener("optimizedResize", () => {
      this.onResize();
    });
  },
  beforeDestroy() {
    window.addEventListener("optimizedResize", () => {
      this.onResize();
    });
  },

  methods: {
    onResize() {
      console.error(
        "В компоненте " +
          this.$options._componentTag +
          " используется интерфейс IOnResize, но не переопределён метод onResize"
      );
    }
  }
};
