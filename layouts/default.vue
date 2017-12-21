<template>
<div class="mouter">
<div class="minner">
<navoverlay></navoverlay>
<background :theme="theme"></background>
<header>
<navmenu :overlay="false" :theme="theme"></navmenu>
</header>
<nuxt/>
</div>
</div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  import navmenu from '~components/navmenu.vue'
  import background from '~components/background.vue'
  import navoverlay from '~components/navoverlay.vue'
  export default {
    components: {
      navmenu,
      background,
      navoverlay
    },
    computed: mapGetters({
      theme: 'themes/theme',

    })
  }
</script>
