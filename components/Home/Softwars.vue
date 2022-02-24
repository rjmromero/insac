<template lang="pug">
section.i-home__softwars(id="software")
  div.i-home__softwars__content
    Title(text="Software" center="true")
    main.i-home__softwars__main
      section(v-for="($, i) in $store.state.lists.softwars")
        Icon(:name="$.icon")
        h4 {{ $.title }}
        p {{ $.body }}
        Link(text="Ver más información" :to="$.to")
</template>

<script>
export default {
  name: 'ComponentHome__softwars'
}
</script>

<style>
.i-home__softwars {
  background-color: var(--white);
  padding: 48px 24px;
}
.i-home__softwars__content {
  max-width: 1024px;
  margin: 0 auto;
}
.i-home__softwars__main {
  display: grid;
  gap: 24px;
}
.i-home__softwars__main section {
  display: block;
  padding: 24px;
  position: relative;
  text-align: center;
}
.i-home__softwars__main section:nth-child(1) {
  background-color: var(--orangeSAC);
}
.i-home__softwars__main section:nth-child(2) {
  background-color: var(--blue);
}
.i-home__softwars__main section:nth-child(3) {
  background-color: var(--greenSAC);
}
.i-home__softwars__main section .uil,
.i-home__softwars__main section h4,
.i-home__softwars__main section p,
.i-home__softwars__main section a {
  color: var(--white);
}
.i-home__softwars__main section .uil,
.i-home__softwars__main section h4,
.i-home__softwars__main section p {
  pointer-events: none;
}
.i-home__softwars__main section .uil {
  max-height: 64px;
  margin-bottom: 16px;
}
.i-home__softwars__main section .uil:before {
  font-size: 48px;
}
.i-home__softwars__main section p {
  font-size: 14px;
  line-height: 21px;
  opacity: 0.96;
  padding-bottom: 24px;
}
@media screen and (min-width: 768px) {
  .i-home__softwars__main {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .i-home__softwars__main section p {
    height: 216px;
    font-size: 16px;
  }
}
</style>
