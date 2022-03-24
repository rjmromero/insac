<template lang="pug">
footer.i-footer(id="footer")
  div.i-footer__content
    section
      label CONTACTOS
      Link(text="info@insac.co" to="mailto:info@insac.co")
      Link(text="310 490 0822" to="tel:+573104900822")
    section
      label SIGUENOS
      Icon(@click="open('https://www.facebook.com/geinsac')" name="facebook-f" size="small")
      Icon(@click="open('https://twitter.com/geinsac')" name="twitter" size="small")
      Icon(@click="open('https://www.instagram.com/geinsac/')" name="instagram" size="small")
    section
      label NOS UBICAMOS
      span Cra. 29 # 27-149, Turbaco – Bolívar 
      <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=10.339411%2C%20-75.419144&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" aria-label="10.339411, -75.419144"></iframe>
    section
      Icon(@click="scrollTop()" name="angle-up" title="Ir arriba")

</template>

<script>
export default {
  name: 'ComponentFooter',

  methods: {
    open(URL) {
      window.open(URL, '_blank')
    },

    scrollTop() {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style>
.i-footer {
  background-color: var(--black);
  padding: 48px 24px;
}
.i-footer__content {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 1024px;
}
.i-footer__content section {
  font-size: 0;
}
.i-footer__content section:nth-child(2),
.i-footer__content section:nth-child(3) {
  border-top: 1px solid var(--gray);
  padding-top: 24px;
}
.i-footer__content section:nth-child(4) {
  text-align: center;
}
.i-footer__content section label,
.i-footer__content section span,
.i-footer__content section a {
  display: block;
  margin-bottom: 8px;
}
.i-footer__content section label,
.i-footer__content section span,
.i-footer__content section .uil {
  color: var(--gray);
}
.i-footer__content section label {
  font-size: 12px;
}
.i-footer__content section a,
.i-footer__content section .uil {
  color: var(--white);
}
.i-footer__content section .uil {
  background-color: rgba(0,0,0, 16%);
  border-radius: 50%;
  margin-right: 8px;
}
.i-footer__content section span {
  color: var(--graylight);
  font-size: 14px;
}
.i-footer__content section iframe {
  min-height: 192px;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .i-footer__content {
    grid-template-columns: 1fr 2fr 40px;
    row-gap: 0;
  }
  .i-footer__content section:nth-child(2),
  .i-footer__content section:nth-child(3) {
    border-top: 0;
    padding-top: 0;
  }
  .i-footer__content section:nth-child(2) {
    grid-column: 1;
  }
  .i-footer__content section:nth-child(3),
  .i-footer__content section:nth-child(4) {
    grid-row: 1/3;
  }
  .i-footer__content section:nth-child(3) {
    border-left: 1px solid var(--gray);
    grid-column: 2;
    padding-left: 24px;
  }
  .i-footer__content section:nth-child(4) {
    align-self: end;
    grid-column: 3;
  }
}
</style>
