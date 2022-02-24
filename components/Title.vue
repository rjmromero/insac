<template lang="pug">
.tbn-title(v-html="title" :class="classes")
</template>

<script>
export default {
  name: 'ComponentTitle',
  props: ['text', 'center'],

  computed: {
    title() {
      return '<h2>' + this.text.replace(/::\b/gmi, '<span>').replace(/\b::/gmi, '</span>') + '</h2>'
    },

    classes() {
      return {
        ['tbn-title--center']: this.center
      }
    }
  }
}
</script>

<style>
.tbn-title {
  color: var(--black);
  margin: 0 auto;
  max-width: 1024px;
}
.tbn-title span {
  background-color: var(--yellow);
  padding: 0 2px;
}
.tbn-title--center {
  text-align: center;
}
</style>
