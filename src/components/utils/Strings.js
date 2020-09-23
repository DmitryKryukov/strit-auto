export default {
  methods: {
    getWordCase(number, titles) {
      let cases = [2, 0, 1, 1, 1, 2];
      return titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    },
    toRuble(number, postfix = " ₽") {
      return (
        String(number).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + postfix
      );
    }
  }
};
