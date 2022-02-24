<template lang="pug">
section.i-home__featured
  div.i-home__featured__content
    p Controlar cada una de las áreas de tu empresa, será la clave para su crecimiento. Es por esto que los softwares son una herramienta fundamental para gestionar, administrar, automatizar y tener información mucho más rápido, aumentando la productividad.
    //- main.i-home__featured__main
    //-   section
    //-     img(src="/images/featured-1.jpeg")
    //-   section
    //-     Title(text="Promoción 2020")
    //-     //- p Cumple con los requisitos de la DIAN de facturar electronicamente, adquiere hoy nuestro software contable SAC con un descuento especial, nuestro sistema se caracteriza por ser fácil de usar, dinámico y además ahorra mucho tiempo en diferentes procesos.
    //-     p Cumple con los requisitos de la DIAN, facturando electrónicamente con nuestro sistema de administración contable. Comunícate con nosotros y te ayudameremos con la implementación
    //-     Button(text="Saber más" category="primary")
</template>

<script>
export default {
  name: 'ComponentHome__featured'
}
</script>

<style>
.i-home__featured {
  background-color: var(--graylight);
  padding: 48px 24px;
}
.i-home__featured__content {
  max-width: 768px;
  margin: 0 auto;
}
.i-home__featured__content p {
  font-size: 14px;
  line-height: 21px;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .i-home__featured__content p {
    font-size: 16px;
    line-height: 24px;
    margin: 24px 0;
  }
}
</style>
