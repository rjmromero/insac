<template lang="pug">
client-only 
  div.i-slider(:loaded="loaded()" :style="{ opacity: !see ? 0 : 1 }")
    div.swiper-wrapper
      slot
    
    div.swiper-navigation
      Icon.swiper-button-prev(name="angle-left")
      div.swiper-pagination
      Icon.swiper-button-next(name="angle-right")
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'ComponentSlider',
  data() {
    return {
      see: false
    }
  },

  methods: {
    loaded() {
      if (this.$el) {
        new Swiper('.i-slider', {
          slidesPerView: 1,
          spaceBetween: 24,
          breakpoints: {
            320: { slidesPerView: 1},
            768: { slidesPerView: 2},
            1024: { slidesPerView: 3, loop: false }
          },
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          keyboard: true,
          autoplay: {
            delay: 7e3,
            disableOnInteraction: false,
          },
          loop: true
        })
        setInterval(() => {
          this.see = true
        }, 100)
      }
    }
  }
}
</script>

<style>
.i-slider {
  height: 100%;
  overflow: hidden;
  opacity: 0;
  position: relative;
  transition: opacity .3s;
  z-index: 1;
}
</style>
