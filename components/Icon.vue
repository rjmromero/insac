<template lang="pug">
i.uil(@click="$emit('click')" @mouseover="$emit('mouseover')" :class="classes" :noty="noty")
</template>

<script>
  export default {
    name: 'ComponentIcon',
    props: ['name', 'size', 'noty', 'bg'],
    computed: {
      classes() {
        return {
          ['uil-' + this.name]: this.name,
          ['uil--' + this.size]: this.size,
          ['uil--bg']: this.bg
        }
      }
    }
  }
</script>

<style>
.uil {
  border-radius: 2px;
  cursor: pointer;
  color: var(--black);
  display: inline-block;
  font-size: 0;
  max-height: 40px;
  padding: 8px;
  position: relative;
  transition: background 0.3s ease-in-out;
  vertical-align: top;
}
.uil:hover {
  background-color: var(--blue);
}
.uil:before {
  font-size: 24px;
  margin: 0;
}
.uil--bg {
  background-color: var(--yellow);
}
.uil--bg:hover {
  background-color: var(--yellow);
}
.uil--small {
  max-height: 34px;
}
.uil--small:before {
  font-size: 18px;
}
.uil--large {
  max-height: 48px;
}
.uil--large:before {
  font-size: 32px;
}
.uil[noty]:after {
  background-color: #f00;
  border-radius: 50%;
  color: var(--white);
  content: attr(noty);
  font-size: 10px;
  font-style: normal;
  height: 17px;
  line-height: 17px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 17px;
}
.uil[noty="true"]:after {
  content: '';
  height: 8px;
  width: 8px;
}
.uil-facebook-f:before {
  margin-left: -1px;
}
.uil-whatsapp:before {
  height: 24px;
  padding: 2px;
  width: 24px;
}
.uil-angle-right:before {
  margin-right: -2px;
  width: 26px;
}
</style>
