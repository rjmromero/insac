<template lang="pug">
a.i-link(v-if="scrollTo" @click="scrollto()" :class="classes") {{ text }}
a.i-link(v-else-if="target" :href="to" :class="classes" target="_blank") {{ text }}
nuxt-link.i-link(v-else :to="to" :class="classes") {{ text }}
</template>


<script>
export default {
  name: 'ComponentLink',
  props: ['text', 'to', 'block', 'scrollTo'],
  computed: {
    classes() {
      return {
        ['i-link--block']: this.block
      }
    },

    target() {
      const http = this.to.indexOf('http') >= 0
      const tel = this.to.indexOf('tel:') >= 0
      const mailto = this.to.indexOf('mailto:') >= 0

      return (http || tel || mailto) || false
    }
  },

  methods: {
    scrollto() {
      const el = document.getElementById(this.scrollTo)
      window.scrollTo({top: el.offsetTop - 80, left: 0, behavior: 'smooth' })
      this.$emit('click')
    }
  }
}
</script>

<style>
.i-link {
  color: var(--black);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 3px 0 0;
  position: relative;
  transition: color 0.3s;
}
.i-link:after {
  background-color: var(--yellow);
  content: '';
  display: block;
  height: 1px;
  margin-top: 4px;
  transition: width 0.3s;
  width: 0;
}
.i-link:hover:after {
  width: 24px;
}
.i-link--block {
  display: block;
}

</style>
