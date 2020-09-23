export default {
  state: {
    allDiscount: [
      {
        id: 1,
        tag: "Скидки",
        title: "Дополнительная скидка на\u00a0авто 15\u202f%",
        description:
          "Приезжайте с\u00a016:00 до 20:00 и\u00a0получите скидку на\u00a0любой автомобиль\u00a015\u202f%.",
        btnText: "Выбрать авто",
        backgroundColor: "var(--accent-primary)",
        img: require("@/assets/discounts/1.png")
      },
      {
        id: 2,
        tag: "Госпрограмма",
        title: "Скидка 120\u202f000\u202f₽ по\u00a0госпрограмме",
        description:
          "Госпрограмма «Первый автомобиль» подойдёт клиентам, у\u00a0которых не\u00a0было\u00a0авто.",
        btnText: "Узнать больше",
        backgroundColor: "#e4e8eC",
        img: require("@/assets/discounts/2.png")
      },
      {
        id: 3,
        tag: "Госпрограмма",
        title: "Скидка 10\u202f% по\u00a0госпрограмме",
        description:
          "Для покупателей с\u00a0детьми доступна госпрограмма «Семейный\u00a0автомобиль».",
        btnText: "Узнать больше",
        backgroundColor: "var(--accent-secondary)",
        img: require("@/assets/discounts/3.png")
      },
      {
        id: 4,
        tag: "Кредит от 0\u202f%",
        title: "Автомобиль в\u00a0кредит от\u00a00\u202f%",
        description:
          "Расчитайте кредит онлайн и\u00a0получите решение банка за\u00a040\u00a0секунд.",
        btnText: "Рассчитать кредит",
        backgroundColor: "#c24400",
        img: require("@/assets/discounts/4.png")
      }
    ]
  },
  getters: {
    allDiscount: state => {
      return state.all;
    }
  }
};
