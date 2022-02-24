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
        li
          span A
          Link(text="Administración" to="http://wa.me/573154114815")
        li
          span C
          Link(text="Comercial" to="http://wa.me/573104900822")
        li
          span S
          Link(text="Soporte" to="http://wa.me/573183355032")

    footer.i-chat-whatsapp__footer(:open="drop")
      section
        span(:hidden="spanHidden") ¿Necesitas ayuda?
      section
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
  overflow: hidden;
  padding: 24px;
}
.i-chat-whatsapp__main ul li {
  align-items: center;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 16px;
}
.i-chat-whatsapp__main ul li + li {
  margin-top: 16px;
}
.i-chat-whatsapp__main ul li span {
  background-color: var(--yellow) light;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  line-height: 24px;
  text-align: center;
  padding: 8px;
  width: 40px;
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
