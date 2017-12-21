<template>
  <div class="main-container">
  <div class="sub-header">
    <div class="sub-header-title">
      Careers
    </div>
    <div class="sub-header-description">
      Abstract thinking, work ethic, and intellect; join our exceptional team.
    </div>
  </div>
  <div class="careers-grid">
    <div class="careers-row" v-for="(career,index) in careers" :key="career.position">
      <a class="careers-row-container" :href="career.link_url" target="_blank" v-on:mouseenter="career_backgroundenter(career,$event)" v-on:mouseleave="career_backgroundleave(career,$event)">
      <div v-if="career.background_model!=undefined">
        <div v-bind:ref="career_refgenerate(career)" class="career-background-image" :style="{'backgroundImage': 'url(' + career.background_model.url +')','background-size':'cover'}" v-if="career.background_model.type=='image'"></div>
      </div>
      <div class="careers-item-position"><div class="careers-item-position-text">{{career.position}}</div></div>
      <div class="careers-item-description">{{career.description}}</div>
      <div class="careers-item-link"><div>{{career.link_text}}</div>
          <div class="careers-item-arrow">&#8594;</div>
      </div>
    </a>

    </div>
  </div>
</div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    transition: {
       name: 'page'
     },
    computed: mapGetters({
      careers: 'careers/get_all_careers'
    }),
    methods: {
      career_backgroundenter: function(career, event) {
        if (career.background_model != undefined) {
          if (career.background_model.type == "image")
            this.$refs[career.position.split(' ').join('')][0].style.opacity = 1;
        }
      },
      career_backgroundleave: function(career, event) {
        if (career.background_model != undefined) {
          if (career.background_model.type == "image")
              this.$refs[career.position.split(' ').join('')][0].style.opacity = 0;
        }
      },
      career_refgenerate: function(career) {
        return career.position.split(' ').join('');
      },
      beforeEnter: function (el) {
    el.style.opacity = 0
    el.style.height = 0
  },
  enter: function (el, done) {
    var delay = el.dataset.index * 150
    setTimeout(function () {
      Velocity(
        el,
        { opacity: 1, height: '1.6em' },
        { complete: done }
      )
    }, delay)
  },
  leave: function (el, done) {
    var delay = el.dataset.index * 150
    setTimeout(function () {
      Velocity(
        el,
        { opacity: 0, height: 0 },
        { complete: done }
      )
    }, delay)
  }
    },
    head: {
      changed(newInfo, addedTags, removedTags) {

        dataLayer.push({
          'event': 'virtualpview'
        });
      },
      title: 'Careers - Jerrick Media',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Abstract thinking, work ethic, and intellect; join our exceptional team.'
      }]
    }

  }
</script>


<style lang="scss" scoped>
  @import '../assets/scss/gridle_settings';

  .main-container {
    padding-top: 10rem;
    @include gridle_state(tablet) {

      padding-top: 7rem;
    }
    @include gridle_state(mobile mid-tablet) {

      padding-top: 4rem;
    }
  }

  .sub-header {
    padding-bottom: 10rem;
    @include gridle_state(tablet) {

      padding-bottom: 5rem;
    }
    @include gridle_state(mobile mid-tablet) {

      padding-bottom: 2.5rem;
    }
  }

  .sub-header-title {
    font-size-responsive: 2.25rem 5rem 480px 1280px;
    color: #f7f7f7;
    font-weight: 500;
  }

  .sub-header-description {
    font-size-responsive: 1.25rem 2.25rem 480px 1280px;
    font-weight:400;
    color: white !important;
    padding-top: 1rem;
    max-width: 50%;

    @include gridle_state(mid-tablet) {
      max-width: 100%;
    }

    @include gridle_state(mobile) {
      max-width: 100%;
    }
  }

  .careers-grid {
    display: flex!important;
    margin-bottom:5rem;
    @include gridle_wrap();
  }

  .careers-row {
    display: flex!important;
    margin-bottom: 1rem;
    padding-right: 8px !important;
    padding-left: 8px !important;
    @include gridle_grid(6);
    @include gridle_state(mobile mid-tablet) {
      @include gridle_grid(12);
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  .careers-arrow {
    display: none;
    @include gridle_state(mobile mid-tablet tablet) {
      display: flex;
    }
  }

  .careers-item-arrow {
    cursor: pointer;
  }

  .careers-row-container {
    background-color: #f7f7f7;
    position: relative;
    padding: 3rem;
    text-decoration:none;
    @include gridle_grid_grow();
   &:hover{
     .careers-item-position,.careers-item-description,.careers-item-link{
       color:#f7f7f7;
          }
          }
    @include gridle_state(mobile) {
    .careers-item-position,.careers-item-description,.careers-item-link{
      color:#1a1a1a!important;
           }
         }

  }

  .careers-item-position {
    font-size-responsive: 1.25rem 1.5rem 480px 1280px;
    color: #1a1a1a;
    padding-bottom: 1rem;
    display: flex;
    z-index: 2;
  }


  .careers-item-description {
    z-index: 2;
    font-size: 1rem;
    color: #1a1a1a;
    padding-bottom: 6rem;
    @include gridle_state(tablet) {
      display: flex;
      padding-bottom: 3rem;
    }
    @include gridle_state(mobile mid-tablet) {
      display: flex;
      padding-bottom: 0;
    }
    @include gridle_grid_grow();
    @include gridle_row_align(center);
    @include gridle_no_gutter (left);
  }


  .careers-item-link {
    z-index: 2;
    padding-top: 2rem;
      color: #1a1a1a;
    @include gridle_row_align(between);
    display: flex;
    font-size-responsive: .875rem 1rem 480px 1280px;
  }

  .careers-item-link a {
    text-decoration: none;
    color: #1a1a1a;
  }

  .career-background-image {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    opacity: 0;
    transition:.5s opacity;
    background-position:center;
    @include gridle_state(mobile) {
      opacity: 0 !important;
    }
  }
</style>
