<template lang="pug">
footer.floor.footer
  .container
    .footer-nav.row.row--h-justified.row--v-center
      anchor.footer-nav-main(href='/')
        logo
      nav.footer-nav-aside.row
        anchor.footer-nav-aside__item(href='/cars') Автомобили
        anchor.footer-nav-aside__item(href='/credit') Кредит
        anchor.footer-nav-aside__item(href='/trade-in') Трейд-ин
        anchor.footer-nav-aside__item(href='/discount') Акции
        anchor.footer-nav-aside__item(href='/feedback') Отзывы
        anchor.footer-nav-aside__item(href='/contact') Контакты

    .footer-brands.row.row--v-center(ref='flexedParent')
      anchor.footer-brands__item(
        v-for='brand in brands',
        :key='brand.name',
        href='#'
      ) {{ brand.name }}
    .footer-disclaimer
      p 
      | Cайт носит исключительно информационный харак&shy;тер и&nbsp;ни&nbsp;при каких условиях не&nbsp;явля&shy;ется публичной офертой,
      | определяемой по&shy;ло&shy;же&shy;ни&shy;ями&nbsp;ч.&nbsp;2&nbsp;ст.&nbsp;437 гражданского кодекса Российской Федерации.
      | Для получения под&shy;робной инфор&shy;ма&shy;ции о&nbsp;стоимости ав&shy;то&shy;мо&shy;би&shy;лей, обращайтесь к&nbsp;менеджерам по&nbsp;продажам.
      p 
      | Оставляя свои персональные данные в&nbsp;лю&shy;бых фор&shy;мах и&nbsp;при звонке на&nbsp;номера, указанные на&nbsp;сайте, вы&nbsp;даёте
      | согласие на&nbsp;обработку и&nbsp;использование ваших пер&shy;со&shy;наль&shy;ных данных в&nbsp;интересах владельца сайта.
      | Осуществляя навигацию по&nbsp;сайту, вы&nbsp;даёте нам право использовать куки-файлы на&nbsp;вашем устройстве.
      p
      | Все персональные данные подлежат обработке в&nbsp;соответствии с&nbsp;политикой конфиденциальности и&nbsp;защищены
      | федеральным законом Российской Федерации от&nbsp;27&nbsp;июля 2006&nbsp;г. &#8470;&nbsp;152-ФЗ.
      p
      | Банк-партнер: АО&nbsp;ЮниКредит Банк. Генеральная лицензия ЦБ&nbsp;РФ &#8470;&nbsp;1&nbsp;от&nbsp;22.12.2014&nbsp;г. Процентная ставка
      | по&nbsp;кредиту от&nbsp;0&nbsp;% годовых на&nbsp;все марки. Сумма кредитования составляет от&nbsp;30 000 ₽ до&nbsp;3 000 000&nbsp;₽.
      | Срок кредитования от&nbsp;6&nbsp;месяцев до&nbsp;7&nbsp;лет. Первоначальный взнос по&nbsp;кредиту до&nbsp;70 %. Сумма ежемесячного
      | платежа по&nbsp;кредиту на&nbsp;все марки авто, составляет от&nbsp;357 ₽&nbsp;до 500 015 ₽, без комиссий. Кредит
      | предоставляется при ус&shy;ло&shy;вии страхования жизни, а&nbsp;также ущерба угона.
      p
      | Пример расчёта автокредита. Покупка Datsun on‑Do стоимостью 385 000 ₽&nbsp;в&nbsp;кредит на&nbsp;7&nbsp;лет с&nbsp;перво&shy;на&shy;чаль&shy;ным
      | взносом 77 000&nbsp;₽ (20 %). Сумма кредита составит 308 000 ₽, процентная ставка по&nbsp;кредиту&nbsp;&mdash; 0 %, ежемесячный
      | платеж&nbsp;&mdash; 3 668 ₽, без допол&shy;ни&shy;тель&shy;ных комиссий, с&nbsp;обязательным страхованием жизни и&nbsp;здоровья, а&nbsp;также ущерба угона.
</template>

<script>
import logo from '@/components/graphs/Logo'
import anchor from '@/components/controls/Anchor'
import onResize from '@/components/utils/IOnResize'

export default {
  components: {
    logo,
    anchor,
  },
  mixins: [onResize],
  props: {
    adress: {
      type: Object,
      default: () => ({
        text: 'Ульяновск, Дмитроградовское шоссе, 3',
        href: '/contacts',
      }),
    },
    phone: {
      type: Object,
      default: () => ({
        text: '+7 8422 79 06 52',
        href: 'tel: +7 8422 79 06 52',
      }),
    },
  },
  computed: {
    brands() {
      return this.$store.state.brands.all
    },
  },
  methods: {
    onResize() {
      const flexedParent = this.$refs.flexedParent
      flexedParent.style.setProperty('--brands-margin', '2rem') // Сначала сбрасываем значение
      const brandsMargin =
        flexedParent.children[1].offsetLeft -
        flexedParent.children[0].offsetWidth
      flexedParent.style.setProperty('--brands-margin', brandsMargin - 1 + 'px') //Заменяем на нужное
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.footer {
  background-color: var(--background-card);
  padding: 3rem 0 3.5rem;
  @include media-breakpoint-down(mobileL) {
    padding: 2.5rem 0 3rem;
  }
  @include media-breakpoint-down(mobileM) {
    padding: 1rem 0 2rem;
  }

  &-nav {
    margin-bottom: 2.75rem;
    @include media-breakpoint-down(tabletS) {
      flex-wrap: wrap;
      &-main {
        width: 100%;
        margin-bottom: 1.25rem;
        @include media-breakpoint-down(mobileL) {
          margin-bottom: 1rem;
        }
        @include media-breakpoint-down(mobileM) {
          margin-bottom: 0.5rem;
          /deep/ .logo {
            svg {
              height: 1.8rem;
              margin-top: 0.125rem;
              margin-left: -35px;
            }
            &__symbol {
              display: none;
            }
          }
        }
      }
    }
    @include media-breakpoint-down(mobileM) {
      margin-bottom: 2rem;
    }
    &-aside {
      grid-gap: var(--spacer-l);
      @include media-breakpoint-down(tabletS) {
        justify-content: space-between;
        width: 100%;
      }
      @include media-breakpoint-down(mobileL) {
        flex-direction: column;
        grid-gap: 0 0;
        &__item {
          height: 44px;
          line-height: 44px;
          border-top: 1px solid var(--background-card-accented);
          &:last-child {
            border-bottom: 1px solid var(--background-card-accented);
          }
        }
      }
    }
  }
  &-brands {
    position: relative;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-gap: var(--spacer-m) var(--brands-margin);
    margin-bottom: 2.75rem;
    @include media-breakpoint-down(mobileL) {
      justify-content: flex-start;
      color: var(--text-muted);
      grid-gap: calc(var(--spacer-l) * 1.5);
      @include text-caption();
    }
    @include media-breakpoint-down(mobileM) {
      margin-bottom: 2.25rem;
    }
    &__item:last-child {
      margin-right: auto;
      @media screen and (max-width: 848px) {
        margin-right: initial; //Немного магических переносов для красоты. Но можно и застабилить на ресайзе
      }
      @media screen and (max-width: 770px) {
        margin-right: auto;
      }
    }
  }
  &-disclaimer {
    @include text-small();
    color: var(--text-muted);
    @include media-breakpoint-down(mobileS) {
      font-size: 10px;
    }
    p {
      margin-bottom: 1em;
    }
  }
}
</style>
