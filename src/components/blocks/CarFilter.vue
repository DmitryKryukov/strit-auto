<template lang="pug">
.floor.filter
  .container
    .filter-main(ref="filter")
        div Марка
        textField(label = "Стоимость от, ₽", placeholder = "298 810", maxLength = "10", validateAs = "price")
        textField(label = "Стоимость до, ₽", placeholder = "2 844 000 ", maxLength = "10", validateAs = "price")
        div Кузов
        div Коробка
</template>

<script>
import icon from "@/components/graphs/Icon";
import textField from "@/components/controls/Textfield"
import onResize from "@/components/utils/IOnResize";
import stringsHelper from "@/components/utils/Strings";

export default {
  name: "BrandGrid",
  components: {
    icon,
    textField
  },
  mixins: [onResize, stringsHelper],
  data() {
    return {};
  },
  methods: {
    onResize() {},
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/toptier";
.filter {
    margin: calc(var(--spacer-m) * 2 + 20px) 0 calc(var(--spacer-m) * 2 + 30px);
    &-main {
        background-color:var(--background-card);
        border-radius: var(--border-radius);
        padding: var(--spacer-m) var(--spacer-m) calc(var(--spacer-m) * 1);
    }
}
</style>
