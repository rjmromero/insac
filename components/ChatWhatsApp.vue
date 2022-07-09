<template lang="pug">
div.i-chat-whatsapp
  div.i-chat-whatsapp__content
    main.i-chat-whatsapp__main(:open="drop")
      header
        Icon(name="whatsapp")
        section
          h4 Inicia una conversación
          p Comunicate con alguno de nuestros departamentos
      ul
        nuxt-link(to="/chat/administracion" target="_blank")
          li
            span Administración
            Icon(name="arrow-right" style="pointer-events: none")
        nuxt-link(to="/chat/comercial" target="_blank")
          li
            span Comercial
            Icon(name="arrow-right" style="pointer-events: none")
        nuxt-link(to="/chat/soporte" target="_blank")
          li
            span Soporte
            Icon(name="arrow-right" style="pointer-events: none")

    footer.i-chat-whatsapp__footer(:open="drop")
      section
        span(:hidden="spanHidden") ¿Necesitas ayuda?
      sectiona
        Icon(@click="drop = !drop" :name="drop ? 'times' : 'whatsapp'")
</template>

<script>
export default {
  name:'ComponentChatWhatsApp',
  data() {
    return {
      drop: false,
      spanHidden: false
    }
  },

  mounted() {
    setTimeout(() => {
      this.spanHidden = true
    }, 7e3)
  }
}
</script>

<style>
.i-chat-whatsapp {
  bottom: 24px;
  pointer-events: none;
  position: fixed;
  right: 24px;
  z-index: 10;
}
.i-chat-whatsapp__content {
  max-width: 350px;
  display: grid;
}

.i-chat-whatsapp__main {
  background-color: var(--white);
  box-shadow: 0 8px 24px -8px rgba(0,0,0,0.24);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s ease-out;
}
.i-chat-whatsapp__main[open] {
  opacity: 1;
  pointer-events: visible;
  transform: translateY(32px);
}
.i-chat-whatsapp__main header {
  align-items: center;
  background-color: var(--greenwhatsapp);
  column-gap: 8px;
  display: grid;
  padding: 24px;
  grid-template-columns: 40px 1fr;
}
.i-chat-whatsapp__main header .uil {
  color: var(--white);
  pointer-events: none;
}
.i-chat-whatsapp__main header h4 {
  margin-bottom: 4px;
}
.i-chat-whatsapp__main header p {
  font-size: 14px;
  line-height: 18px;
}

.i-chat-whatsapp__main ul {
  padding: 8px 0 40px;
}
.i-chat-whatsapp__main ul li {
  align-items: center;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 16px;
  padding: 4px 8px 4px 24px;
}

.i-chat-whatsapp__main ul li:hover {
  background-color: var(--graylight);
}

.i-chat-whatsapp__main ul li span {
  font-size: 16px;
}
.i-chat-whatsapp__footer {
  align-items: center;
  display: grid;
  grid-template-columns: 142px 56px;
  justify-content: end;
}
.i-chat-whatsapp__footer[open] span {
  transform: translateY(96px);
}
.i-chat-whatsapp__footer[open] .uil {
  transform: rotate(180deg);
}
.i-chat-whatsapp__footer span {
  background-color: var(--white);
  box-shadow: 0 4px 8px rgba(0,0,0,0.16);
  border-radius: 2px;
  display: block;
  font-size: 14px;
  padding: 8px 16px 8px 8px;
  margin-right: -16px;
  transition: transform 0.6s;
}
.i-chat-whatsapp__footer span[hidden] {
  transform: translateY(96px);
}
.i-chat-whatsapp__footer .uil {
  background-color: var(--greenwhatsapp);
  border-radius: 50%;
  color: var(--white);
  padding: 16px;
  max-height: 56px;
  pointer-events: visible;
  transition: transform 0.3s;
}

</style>
