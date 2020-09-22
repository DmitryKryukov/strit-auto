<template lang="pug">
fragment
  panel.header-info(
    text='Антикризисное предложение при\u00A0бронировании до\u00A031\u00A0сентября',
    anchorText='Выбрать\u00A0авто',
    anchorHref='#',
    icon='heart',
    closeable,
    @panelColapsing='panelColapsing'
  )
  section.floor.header-panel(ref='menuPanel')
    .container.row.row--h-justified.row--v-center
      div(@click='closeMenu')
        anchor.header-panel-main(href='/')
          logo

      .header-panel-aside
        anchor.header-panel-aside__contact.header-panel-aside__contact--adress(
          :href='adress.href',
          v-if='adress.text'
        ) {{ adress.text }}
        anchor.header-panel-aside__contact.header-panel-aside__contact--phone(
          :href='phone.href',
          v-if='phone.text'
        ) {{ phone.text }}
        action-button.header-panel-aside__menu(
          ref='menu',
          icon='menu',
          @click='toggleMenu',
          :class='{ "header-panel-aside__menu--active": isMenuOpen }'
        )

  section.floor.header-nav(
    :class='{ "header-nav--active": isMenuOpen }',
    ref='menuNav'
  )
    .container.row.row--h-justified
      nav.header-nav-main.row(@click='closeMenu')
        anchor.header-nav__item(href='/catalog') Автомобили
        anchor.header-nav__item(href='/credit') Кредит
        anchor.header-nav__item(href='/trade-in') Трейд-ин
        anchor.header-nav__item(href='/discount') Акции
        anchor.header-nav__item(href='/feedback') Отзывы
        anchor.header-nav__item(href='/contact') Контакты
      .header-nav-aside.row(@click='closeMenu')
        span.header-nav-aside__text Есть замечания к&nbsp;сотрудникам:
        anchor.header-nav-aside__anchor(href='/contact', underlined) Пожаловаться
        img.header-nav-aside__image(
          src='../../assets/header/ceo-complaint.png'
        )
</template>

<script>
import panel from '@/components/blocks/Panel'
import logo from '@/components/graphs/Logo'
import anchor from '@/components/controls/Anchor'
import actionButton from '@/components/controls/ActionButton.vue'
import onResize from '@/components/utils/IOnResize'
import fixScroll from '@/components/utils/UI'

export default {
  components: {
    panel,
    logo,
    anchor,
    actionButton,
  },
  mixins: [onResize, fixScroll],
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
  data() {
    return {
      isMenuOpen: false,
      currentScrollPos: 0,
    }
  },
  mounted: function () {},
  methods: {
    onResize(event) {
      let menuTop =
        this.$refs.menuPanel.offsetTop +
        this.$refs.menuPanel.offsetHeight -
        window.scrollY +
        'px'
      this.$refs.menuNav.style.setProperty('--menu-top', menuTop)
    },
    toggleMenu() {
      this.onResize()
      this.isMenuOpen = !this.isMenuOpen

      if (this.isMenuOpen) {
        this.fixScroll()
      } else {
        this.unFixScroll()
      }
    },
    closeMenu() {
      this.isMenuOpen = false
      if (this.isMenuOpen) {
        this.fixScroll()
      } else {
        this.unFixScroll()
      }
    },
    panelColapsing() {
      let menuTop = this.$refs.menuPanel.offsetHeight + 'px'
      this.$refs.menuNav.style.setProperty('--menu-top', menuTop)
    },
  },
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.header {
  &-panel {
    background-color: var(--background-card);
    padding: 1.75rem 0;
    border-bottom: var(--border);
    z-index: 900;

    @include media-breakpoint-down(tabletM) {
      padding: 0.75rem 0;
    }
    @include media-breakpoint-down(tabletS) {
      position: sticky;
      top: 0;
    }
    &-main {
      margin-right: var(--spacer-l);
      display: flex;
      @include media-breakpoint-down(mobileM) {
        margin-right: 0;
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

    &-aside {
      @include text-subhead();
      display: flex;
      margin-top: -2px; //Визуальная компенсация
      @include media-breakpoint-down(tabletM) {
        @include text-lead();
      }
      &__contact {
        &--adress {
          @include media-breakpoint-down(tabletS) {
            display: none;
          }
        }
      }
      &__menu {
        display: none;

        /deep/ .icon--menu {
          transition: transform 0.2s var(--ease);
          &__top,
          &__mid,
          &__bot {
            transition: transform 0.2s var(--ease);
          }
          &__mid {
            transform-origin: center center;
          }
          &__top {
            transform-origin: 3px 10px;
          }
          &__bot {
            transform-origin: 7px 16px;
          }
        }
        &--active {
          /deep/ .icon--menu {
            transform: rotate(-90deg) translateX(2px);
            &__top {
              transform: rotate(45deg) scaleX(1.06);
            }
            &__bot {
              transform: rotate(-45deg) scaleX(1.06);
            }
            &__mid {
              transform: scaleX(0);
            }
          }
        }
        @include media-breakpoint-down(tabletS) {
          display: flex;
        }
      }
      & *:not(:first-child) {
        margin-left: var(--spacer-l);
        @include media-breakpoint-down(mobileS) {
          margin-left: var(--spacer-s);
        }
      }
    }
  }
  &-nav {
    padding: 1.375rem 0 1.5rem;
    background-color: var(--background-card);
    z-index: 900;
    position: sticky;
    top: 0;
    .container {
      //justify-content: space-between;
    }

    @include media-breakpoint-down(tabletM) {
      padding: 0.75rem 0 0.875rem;
    }

    &-main {
      & > * {
        margin-right: var(--spacer-l);
      }
    }

    &-aside {
      color: var(--text-muted);
      & > *:not(:first-child) {
        margin-left: var(--spacer-s);
      }
      &__image {
        display: none;
      }
      &__text {
        @include media-breakpoint-down(tabletL) {
          display: none;
        }
      }
    }

    //Мобильное меню
    @include media-breakpoint-down(tabletS) {
      height: 0;
      padding: 0;
      overflow: auto;
      position: sticky;
      top: 57px;
      transition: height 0.5s cubic-bezier(0.32, 0.08, 0.24, 1),
        margin-bottom 0.5s cubic-bezier(0.32, 0.08, 0.24, 1);
      &--active {
        --menu-height: calc(100vh - var(--menu-top));
        height: var(--menu-height);
        margin-bottom: calc(var(--menu-height) * -1);

        .header-nav-aside {
          background-color: var(--background-main);
          transform: none;
          transition: background-color 1s 0.5s cubic-bezier(0.32, 0.08, 0.24, 1),
            transform 1s 0.2s cubic-bezier(0.32, 0.08, 0.24, 1);
        }
      }
      .row--h-justified {
        justify-content: flex-start;
      }
      .container,
      &-main,
      &-aside {
        flex-direction: column;
      }
      &-main {
        margin-bottom: var(--spacer-l);
      }

      &__item {
        height: 44px;
        line-height: 44px;
        border-bottom: var(--border);
        margin-right: 0;
      }

      &-aside {
        position: relative;
        align-items: flex-start;
        padding: var(--spacer-m) var(--spacer-m);
        margin: var(--spacer-l) 0 calc(var(--spacer-l) * 1.5);
        background-color: var(--background-card-accented);
        border-radius: var(--border-radius);
        transform: scale(0.95);
        transition: background-color 1s cubic-bezier(0.32, 0.08, 0.24, 1),
          transform 1s cubic-bezier(0.32, 0.08, 0.24, 1);
        &__text {
          display: block;
          max-width: 75%;
        }
        &__anchor {
          margin-left: 0;
          display: flex;
        }
        &__image {
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          border-bottom-right-radius: var(--border-radius);
          width: 33.33%;
          max-width: 6.875rem;
        }
        & *:not(:first-child) {
          margin-left: 0;
        }
      }
    }
  }
}
</style>