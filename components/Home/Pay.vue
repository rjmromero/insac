<template lang="pug">
section.i-home__pay(id="pay")
  div.i-home__pay__content
    Icon(name="usd-circle" size="large")
    Title(text="Paga tus licencias y servicios de INSAC")
    Button(@click="open()" text="Pagar en linea" category="primary")
</template>

<script>
export default {
  name: 'ComponentHome__pay',
  methods: {
    open() {
      window.open('https://checkout.wompi.co/l/VPOS_Fvw0oU', '_blank')
    }
  }
}
</script>

<style>
.i-home__pay {
  background-color: var(--graylight);
  padding: 48px 24px;
}
.i-home__pay__content {
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
}
.i-home__pay__content i {
  pointer-events: none;
  color: var(--gray);
}
.i-home__pay__content p {
  font-size: 14px;
  line-height: 21px;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .i-home__pay__content p {
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0 24px;
  }
}
</style>
