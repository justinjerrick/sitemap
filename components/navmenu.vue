<template>
  <div v-if="overlay==false">
  <div v-bind:class="nav_theme" id="header-container">
    <nav id="header-row">
      <div class="left-nav logo">
        <ul>
        <li><nuxt-link exact to="/">Jerrick</nuxt-link></li>
        </ul>
      </div>
      <div class="right-nav">
        <ul>
          <li><nuxt-link  to="/ventures">Ventures</nuxt-link></li>
          <li><nuxt-link  to="/news">News</nuxt-link></li>
          <li><nuxt-link  to="/careers">Careers</nuxt-link></li>
          <li><nuxt-link  to="/contact">Contact</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
<div v-else>
  <div class="nav_white">
    <nav>
      <div class="left-nav logo">
        <ul>
        <li><nuxt-link exact to="/" v-on:click.native="toggle">Jerrick</nuxt-link></li>
        </ul>
      </div>
      <div class="right-nav-theme">
        <ul>
          <li><nuxt-link to="/ventures" v-on:click.native="toggle">Ventures</nuxt-link></li>
          <li><nuxt-link to="/news" v-on:click.native="toggle">News</nuxt-link></li>
          <li><nuxt-link to="/careers" v-on:click.native="toggle">Careers</nuxt-link></li>
          <li><nuxt-link to="/contact" v-on:click.native="toggle">Contact</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>


<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex'

  export default {
    props: {
      overlay: {
        type: Boolean
      },
      theme: {
        type: Object
      }
    },
    computed: {
      nav_theme: function() {
        return {
          nav_white: this.theme.fontcolor.color === "white"
        }

      },
      ...mapGetters({
        isActive: 'nav/navstate'
      })
    },
    methods: {
      ...mapMutations({
        toggle: 'nav/toggle'
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/gridle_settings';
  a {
    font-size: 1rem;
    text-decoration: none;
    color: #f7f7f7;
  }

  .nav_white a {
    color: white!important;
  }

  .right-nav a {
  color: #f7f7f7;
  }


  .nav_white .right-nav-theme a {
    font-size-responsive: 2.25rem 3rem 480px 1280px;
    color: #f7f7f7 !important;
  }

  .logo a {
    opacity: 1;
    color:#f7f7f7;
  }

  .nuxt-link-active {
    color: #f7f7f7;
    opacity: 1;
    opacity: .5;
    border-bottom: none !important;
    @include gridle_state(mobile mid-tablet tablet) {
    color: #f7f7f7;
    opacity: .5;
    border-bottom: none !important;
    }
  }




</style>
