export default {
  mounted() {
    this.eventThrottle("resize", "optimizedResize");
  },
  methods: {
    eventThrottle(type, name, obj) {
      obj = obj || window;
      let running = false;
      let func = () => {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(() => {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    }
  }
};
