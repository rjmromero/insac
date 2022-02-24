<template lang="pug">
section.i-home__services(id="services")
  Title(text="Servicios" center="true")
  div.i-home__services__content
    article.i-home__services__card(v-for="($, i) in $store.state.lists.services")
      img(:src="$.img")
      section
        h3 {{ $.title }}
        p {{ $.body }}
        Button(@click="open($.to)" text="Contratar servicio" category="primary")
</template>

<script>
export default {
  name: 'ComponentHome__services',
  methods: {
    open(URL) {
      window.open(URL, '_blank')
    }
  }
}
</script>

<style>
.i-home__services {
  background-color: var(--white);
  padding: 48px 24px;
}
.i-home__services__content {
  display: grid;
  gap: 24px;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
}
.i-home__services__card img {
  height: 320px;
  margin-bottom: 16px;
  object-fit: cover;
  width: 100%;
}
.i-home__services__card section {
  background-color: var(--white);
  box-shadow: 0 24px 48px -16px rgba(0,0,0,0.24);
  padding: 24px;
  margin: -120px 0 24px;
  position: relative;
  text-align: center;
  z-index: 1;
}
.i-home__services__card section p {
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 24px;
}
@media screen and (min-width: 768px) {
  .i-home__services__content {
    grid-template-columns: repeat(2, 1fr);
  }
  .i-home__services__card section {
    margin-left: 24px;
    margin-right: 24px;
  }
  .i-home__services__card section p {
    height: 152px;
  }
}
@media screen and (min-width: 1024px) {
  .i-home__services__content {
    grid-template-columns: repeat(3, 1fr);
  }
  .i-home__services__card section p {
    height: 176px;
    font-size: 16px;
  }
}
</style>
