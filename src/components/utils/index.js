let throttle = (type, name, obj) => {
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
};
let declOfNum = (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
let toRuble = (number, postfix = " ₽") => {
  return String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + postfix;
};

(function() {
  throttle("resize", "optimizedResize");
})();

export { throttle, declOfNum, toRuble };
