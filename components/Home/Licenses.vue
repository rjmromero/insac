<template lang="pug">
section.i-home__licenses(id="licenses")
  div.i-home__licenses__content
    Title(text="Licencias" center="true")
    main.i-home__licenses__main
      //- Slider
      section.swiper-slide(v-for="($, i) in $store.state.lists.licenses")
        img(:src="$.img")
        h4 {{ $.title }}
        p {{ $.body }}
        Button(@click="open($.to)" text="Contactar" category="secondary")
</template>

<script>
export default {
  name: 'ComponentHome__licenses',
  methods: {
    open(URL) {
      window.open(URL, '_blank')
    }
  }
}
</script>

<style>
.i-home__licenses {
  background-color: var(--white);
  padding: 48px 24px;
}
.i-home__licenses__content {
  max-width: 1024px;
  margin: 0 auto;
}
.i-home__licenses__main {
  display: grid;
  justify-items: center;
  gap: 24px;
}
.i-home__licenses__main section {
  background-color: var(--white);
  display: block;
  padding: 0 0 24px;
  text-align: center;
  transition: background-color 0.3s;
}
.i-home__licenses__main section:hover {
  background-color: var(--graylight) full;
}
.i-home__licenses__main section img,
.i-home__licenses__main section h4,
.i-home__licenses__main section p {
  pointer-events: none;
}
.i-home__licenses__main section h4,
.i-home__licenses__main section p {
  margin-left: 24px;
  margin-right: 24px;
}
.i-home__licenses__main section img {
  margin-bottom: 16px;
  width: 100%;
}
.i-home__licenses__main section p {
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 24px;
}
@media screen and (min-width: 768px) {
  .i-home__licenses__main {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .i-home__licenses__main {
    grid-template-columns: repeat(3, 1fr);
  }
  .i-home__licenses__main section p {
    height: 150px;
    font-size: 16px;
  }
}
</style>
