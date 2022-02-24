<template lang="pug">
a.i-listbox(@mouseover="open(true)" @mouseleave="open(false)" @click="open(true)" @focus="open(true)" @blur="open(false)" :tabindex="0")
  label {{ text }}
  Icon(name="angle-down" size="small")
  client-only
    ul.i-listbox__list(:class="classes" @mouseover="open(true)" @mouseleave="open(false)" :is-open="listIsOpen")
      li(@click="$router.push($.to || $[model.to])" v-for="($, i) in list" :key="i") {{ $.text || $[model.text] }}
</template>


<script>
export default {
  name: 'ComponentListBox',
  props: ['text', 'list', 'model', 'right'],
  data() {
    return {
      listIsOpen: false
    }
  },

  methods: {
    open(bool) {
      this.listIsOpen = bool
      if (bool) {
        this.$el.focus()
      } else {
        this.$el.blur()
      }
    }
  },

  computed: {
    classes() {
      return {
        ['i-listbox__list--right']: this.right
      }
    }
  }
}
</script>

<style>
.i-listbox {
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 34px;
  padding: 4px 0 4px 8px;
  position: relative;
  transition: background 0.3s;
}
.i-listbox:focus {
  background-color: var(--yellow);
}
.i-listbox label,
.i-listbox .uil {
  pointer-events: none;
}
.i-listbox label {
  font-size: 14px;
  margin-top: -2px;
}
.i-listbox[block] .i-listbox__list {
  right: initial;
}
.i-listbox__list {
  background-color: var(--white);
  border-radius: 0 0 2px 2px;
  box-shadow: 0 24px 24px -8px rgba(0,0,0,0.24);
  left: 0;
  max-width: 480px;
  opacity: 0;
  padding: 8px;
  pointer-events: none;
  position: absolute;
  right: 0;
  transition: opacity 0.3s, top 0.3s;
  top: 24px;
}
.i-listbox__list--right {
  left: unset;
}
.i-listbox__list[is-open] {
  opacity: 1;
  pointer-events: visible;
  top: 38px;
}
.i-listbox__list li {
  border-radius: 2px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  list-style: none;
  overflow: hidden;
  padding: 8px 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.i-listbox__list li:hover {
  background-color: var(--yellow);
}

</style>
