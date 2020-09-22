let fixScroll = {
  data() {
    return {
      fixScrollCurrentScrollPos: 0,
      fixScrollBodyEl: null
    };
  },
  mounted() {
    this.fixScrollCurrentScrollPos = window.scrollY;
    this.fixScrollBodyEl = document.querySelector("body");
  },
  methods: {
    fixScroll() {
      this.fixScrollCurrentScrollPos = window.scrollY;
      this.fixScrollBodyEl.style.cssText += `
        position: fixed;
        top: ${this.fixScrollCurrentScrollPos * -1}px;
        height: 100%;
        width: 100%;        
      `;
    },
    unFixScroll() {
      this.fixScrollBodyEl.style.cssText += `
        position: static;
        top: initial;
      `;
      window.scrollTo({
        top: this.fixScrollCurrentScrollPos,
        behavior: "instant"
      });
    }
  }
};
export default fixScroll;
