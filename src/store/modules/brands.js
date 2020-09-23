export default {
  state: {
    all: [
      { name: "Lada", imgSrc: require("@/assets/brands/lada.png") },
      { name: "Hyundai", imgSrc: require("@/assets/brands/hyundai.png") },
      { name: "Kia", imgSrc: require("@/assets/brands/kia.png") },
      { name: "Renault", imgSrc: require("@/assets/brands/renault.png") },
      { name: "Nissan", imgSrc: require("@/assets/brands/nissan.png") },
      { name: "Lifan", imgSrc: require("@/assets/brands/lifan.png") },
      { name: "Škoda", imgSrc: require("@/assets/brands/skoda.png") },
      { name: "Volkswagen", imgSrc: require("@/assets/brands/volkswagen.png") },
      { name: "Datsun", imgSrc: require("@/assets/brands/datsun.png") },
      { name: "Geely", imgSrc: require("@/assets/brands/geely.png") },
      { name: "Zotye", imgSrc: require("@/assets/brands/zotye.png") },
      { name: "FAW", imgSrc: require("@/assets/brands/faw.png") },
      { name: "Уаз", imgSrc: require("@/assets/brands/uaz.png") },
      { name: "Chevrolet", imgSrc: require("@/assets/brands/chevrolet.png") },
      { name: "Chery", imgSrc: require("@/assets/brands/chery.png") },
      { name: "Changan", imgSrc: require("@/assets/brands/changan.png") },
      { name: "Haval", imgSrc: require("@/assets/brands/haval.png") },
      { name: "Suzuki", imgSrc: require("@/assets/brands/suzuki.png") }
    ]
  },
  getters: {
    allBrands: state => {
      return state.all;
    }
  }
}
