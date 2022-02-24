<template lang="pug">
div.i
  Header
  nuxt(keep-alive :keep-alive-props="{ max: 10 }")
  Footer
  Menu
  ChatWhatsApp

</template>

<script>
export default {
  name: "LayoutDefault",

  head({ $store }) {
    const { menu } = $store.state.tooggle;
    return {
      bodyAttrs: {
        class: menu ? "scroll-hidden" : null
      }
    };
  },

  mounted() {
    if (window.location.hostname !== "localhost") {
      window.beTracker = window.beTracker || {};
      beTracker.t({ hash: "57b333ae99d4fb5b64e5eda3e5ca5b9b" });
    }
  }
};
</script>

<style>
.tbn {
  background-color: white;
}
</style>
