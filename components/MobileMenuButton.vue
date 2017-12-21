<template>
  <div class="mobile_button_row">
  <div class="mobile_button" v-on:click="toggle">
      {{MenuButtonText}}
  </div>
</div>
</template>

<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex'

  export default {

    computed: mapGetters({
      isActive: 'nav/navstate',
      MenuButtonText: 'nav/navbuttontext'
    }),
    methods: {
      ...mapMutations({
        toggle: 'nav/toggle'
      })
    }

  }
</script>
