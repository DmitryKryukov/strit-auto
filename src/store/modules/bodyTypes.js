export default {
    state: {
      all: [
        { name: "Седан", imgSrc: require("@/assets/brands/lifan.png") },
        { name: "Внедорожник", imgSrc: require("@/assets/brands/nissan.png") },
        { name: "Кроссовер", imgSrc: require("@/assets/brands/lada.png") },        
        { name: "Хэтчбек", imgSrc: require("@/assets/brands/renault.png") },
        { name: "Другой", imgSrc: require("@/assets/brands/hyundai.png") },
      ]
    },
    getters: {
      allBodyType: state => {
        return state.all;
      }
    }
  }
  