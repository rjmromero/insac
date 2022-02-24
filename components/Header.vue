<template lang="pug">
header.i-header
  div.i-header__content
    Logo(@click="scrollTo()" auto-size)
    section
      nav
        Link(text="Software" scrollTo="software")
        Link(text="Licencias" scrollTo="licenses")
        Link(text="Servicios" scrollTo="services")
        Link(text="Pagar en linea" scrollTo="pay")
        Link(text="Blogs" to="https://insac.co/b/")
        Link(text="Contactos" scrollTo="footer")
      Icon(@click="open()" name="bars")
</template>

<script>
export default {
  name: 'ComponentHeader',
  methods: {
    open() {
      this.$store.commit('tooggle/menu', true)
    },

    scrollTo() {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style>
.i-header {
  background-color: var(--white);
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
  left: 0;
  padding: 16px 24px;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 9;
}
.i-header__content {
  align-items: center;
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 0 auto;
  max-width: 1024px;
}
.i-header__content figure {
  cursor: pointer;
}
.i-header__content section {
  justify-self: end;
}
.i-header__content section nav {
  align-items: center;
  column-gap: 24px;
  display: none;
  grid-template-columns: repeat(6, auto);
}
.i-header__content section .uil {
  color: var(--black);
}
@media screen and (min-width: 768px) {
  .i-header section nav {
    display: grid;
  }
  .i-header section > .uil {
    display: none;
  }
}
</style>
