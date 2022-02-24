<template lang="pug">
.i-menu(@click="close()" :is-open="$store.state.tooggle.menu" route="route")
  .i-menu__content(@click.stop)
    header
      h4 Menú
      Icon(@click="close()" name="arrow-right")
    main
      Link(@click="close(300)" text="Software" scrollTo="software" block="true")
      Link(@click="close(300)" text="Licencias" scrollTo="licenses" block="true")
      Link(@click="close(300)" text="Servicios" scrollTo="services" block="true")
      Link(@click="close(300)" text="Pagar en linea" scrollTo="pay" block="true")
      Link(@click="close(300)" text="Blogs" to="https://insac.co/b/" block="true")
      Link(@click="close(300)" text="Contactos" scrollTo="footer" block="true")
</template>

<script>
export default {
  name: 'ComponentMenu',
  data() {
    return {
      dropdown: 0
    }
  },

  methods: {
    close(delay) {
      setTimeout(() => {
        this.$store.commit('tooggle/menu', false)
      }, delay || 0)
    }
  },

  computed: {
    categories() {
      return this.$store.state.lists.categories
    },

    methods() {
      return this.$store.state.lists.methods
    },

    // route() {
    //   this.$route
    //   setTimeout(() => {
    //     this.close()
    //   }, 300)
    //   return true
    // }
  }
}
</script>

<style>
.i-menu {
  background-color: transparent;
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: background 0.3s;
  z-index: 10;
}
.i-menu[is-open] {
  background-color: rgba(0,0,0,0.88);
  pointer-events: visible;
}
.i-menu[is-open] .i-menu__content {
  right: 0;
}
.i-menu__content {
  background-color: var(--white);
  bottom: 0;
  box-shadow: -4px 0 16px rgba(0,0,0,0.08);
  transition: right 0.3s;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  right: -328px;
  top: 0;
  width: 320px;
}
.i-menu__content header {
  align-items: center;
  display: grid;
  column-gap: 8px;
  grid-template-columns: 1fr 40px;
  padding: 16px 16px 16px 24px;
}
.i-menu__content main {
  padding: 0 24px;
  display: grid;
  row-gap: 8px;
}
.i-menu__content main li {
  align-items: center;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 34px;
}
.i-menu__content main li label {
  color: var(--gray);
  display: block;
  font-size: 14px;
  pointer-events: none;
}
.i-menu__content main li .uil {
  padding-bottom: 3px;
  padding-top: 3px;
}
.i-menu__content main ul {
  border-left: 1px dashed var(--graylight);
  display: grid;
  max-height: 0;
  overflow: hidden;
  padding-left: 16px;
  row-gap: 8px;
  transition: height 0.3s;
  transition: max-height 0.3s ease-out;
}
.i-menu__content main ul[open] {
  max-height: 1000px;
  transition: max-height 0.6s ease-in;
}

</style>
