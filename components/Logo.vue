<template lang="pug">
figure.i-logo(@click="$emit('click')" v-html="logo")
</template>

<script>
import Logo from "~/assets/press-kit/logo.svg?raw"

export default {
  data() {
    return {
      logo: Logo
    }
  }
}
</script>

<style>
.i-logo {
  animation: 1s appear;
  margin: 0;
}
.i-logo[auto-size] .i-brand {
  height: 48px;
  width: 120px;
}
@-moz-keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
