<template lang="pug">
button.i-button(@click="$emit('click')" :class="classes" :type="type || 'button'") {{ text }}
</template>

<script>
export default {
  name: 'ComponentButton',
  props: ['text', 'category', 'block', 'type'],

  computed: {
    classes() {
      return {
        ['i-button--' + this.category]: this.category,
        ['i-button--block']: this.block
      }
    }
  }
}
</script>

<style>
.i-button {
  background-color: transparent;
  border: 2px solid transparent;
  color: var(--black);
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  height: 48px;
  padding: 12px 16px 16px;
  text-align: center;
  transition: background 0.3s, border 0.3s, box-shadow 0.3s;
}
.i-button--primary,
.i-button--secondary,
.i-button--tertiary,
.i-button:hover {
  box-shadow: 0 20px 16px -16px rgba(0,0,0,0.24);
}
.i-button--primary {
  background-color: var(--yellow);
}
.i-button--secondary {
  background-color: var(--white);
  border-color: var(--yellow);
}
.i-button--tertiary {
  background-color: var(--white);
}
.i-button--tertiary:hover {
  background-color: var(--yellow)light;
  box-shadow: none;
}
.i-button--block {
  display: block;
  width: 100%;
}
</style>
