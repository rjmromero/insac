<template lang="pug">
header.i-home__header
  div.i-home__header__content
    section.i-home__header__call-to-action
      label TECNOLOGÍA Y CONTABILIDAD
      h1 Brindamos soluciones de software contable para pequeñas y medianas empresas
      a(href="http://wa.me/573104900822?text=Hola, mi nombre es" whatsapp target="_blank")
        Icon(name="whatsapp")
        li +57 310 4900822
      span
        Link(text="Visita nuestra tienda" to="https://insac.pideme.co/tienda/")
    
</template>

<script>
export default {
  name: 'ComponentHome__header'
}
</script>

<style>
.i-home__header {
  background-image: url("/images/bg-home.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 664px;
  overflow: hidden;
  position: relative;
}
.i-home__header__content {
  margin: 0 auto;
  max-width: 1024px;
  padding-top: 128px;
}
.i-home__header__call-to-action {
  padding: 24px 24px 0;
  text-align: center;
}
.i-home__header__call-to-action label,
.i-home__header__call-to-action h1 {
  color: var(--white);
  display: block;
}
.i-home__header__call-to-action label {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 24px;
  opacity: 0.72;
}
.i-home__header__call-to-action h1 {
  color: var(--white);
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
}
.i-home__header__call-to-action a[whatsapp] {
  align-items: center;
  background-color: var(--greenwhatsapp);
  column-gap: 8px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 40px 1fr;
  margin: 32px auto 0;
  padding: 8px 16px;
  width: 228px;
}
.i-home__header__call-to-action a[whatsapp] .uil,
.i-home__header__call-to-action a[whatsapp] li {
  color: var(--white);
  pointer-events: none;
}
.i-home__header__call-to-action a[whatsapp] li {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0,0,0,0.16);
}
.i-home__header__call-to-action span {
  display: block;
  margin-top: 24px;
}
.i-home__header__call-to-action span a {
  color: var(--white);
}
@media screen and (min-width: 768px) {
  .i-home__header__content h1 {
    font-size: 48px;
    line-height: 56px;
  }
}
</style>
