<template lang="pug">
.floor.about
  .container
    .about-text
      h2 
        span.about-text__name--main Стрит&nbsp;
        span.about-text__name--aside авто
      p.about-text__lead Продаём новые и подержанные автомо&shy;били российских и&nbsp;иностранных произ&shy;водителей в&nbsp;Ульяновске.
      p.about-text__body Наша главная задача — предос&shy;тав&shy;ление услуг европейского уровня:
      ul.about-text-list
        li.about-text-list__item поможем выбрать автомобиль и&nbsp;разоб&shy;раться в&nbsp;комплектациях,
        li.about-text-list__item подберём оптимальную программу для&nbsp;кредитования,
        li.about-text-list__item оформим полис страхования не&nbsp;выходя из&nbsp;автосалона,
        li.about-text-list__item предоставим автомобиль на&nbsp;тест-драйв,
        li.about-text-list__item обменяем ваш автомобиль на&nbsp;новый по&nbsp;программе трейд-ин.
</template>

<script>
import utils from '@/components/utils'

export default {
  name: 'AboutFloor',
}
</script>

<style scoped lang="scss">
@import '../../styles/toptier';
.about {
  content-visibility: auto;
  contain-intrinsic-size: 414px;
  padding: calc(var(--spacer-m) * 2) 0 calc(var(--spacer-m) * 2 + 20px);
  background-color: var(--background-card-accented);
  &-text {
    width: 50%;
    @include media-breakpoint-down(mobileL) {
      width: 100%;
    }
    &__lead {
      @include text-subhead();
      margin-bottom: 1rem;
      @include media-breakpoint-down(mobileL) {
        @include text-lead();
      }
    }

    &-list__item {
      margin-top: 0.5rem;
      margin-left: 1rem;
      position: relative;
      &:before {
        content: '•';
        display: inline-block;
        position: absolute;
        left: -0.85rem;
        top: 0.21ex;
        color: var(--accent-primary);
        @include media-breakpoint-down(mobileL) {
          color: var(--text-muted);
        }
      }
    }
  }
}
</style>
