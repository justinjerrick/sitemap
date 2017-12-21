<template>
  <div>
  <transition name="fade">
<div v-show="isActive">
<div class="mobile_overlay_wrap">
<div class="mouter">
<div class="minner">
<navmenu :overlay="true"></navmenu>
</div>
</div>
</div>
</div>
</transition>
<MobileMenuButton></MobileMenuButton>
</div>
</template>
<script>
  import navmenu from '~components/navmenu.vue'
  import MobileMenuButton from '~components/MobileMenuButton.vue'
  import {mapMutations,mapGetters} from  'vuex'
  export default {
    components: {
      navmenu,
      MobileMenuButton
    },
    computed: mapGetters({
      isActive: 'nav/navstate'
    })
  }
</script>
