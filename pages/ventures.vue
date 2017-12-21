<template>
  <div class="main-container">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
  <div class="sub-header">
    <div class="sub-header-title">
      Ventures
    </div>
    <div class="sub-header-description">
      Our growing portfolio of <div id="sub-head-platform" v-on:click="setMenuFilter">platforms</div><div id="sub-head-etc">,&nbsp;</div> <div id="sub-head-community"v-on:click="setMenuFilter" >communities</div><div id="sub-head-etc">,&nbsp;</div><div id="sub-head-etc">and&nbsp;</div><div id="sub-head-ip" v-on:click="setMenuFilter">intellectual property</div><div id="sub-head-etc">.</div>
    </div>
  </div>
  <div class="venture-list">
    <!-- <transition-group
    name="staggered-fade"
    tag="ul"
    v-bind:css="true"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"> -->
    <ul>
  <li class="venture-row" v-for="(venture,index) in menufilter(ventures,menu_filter_type)" v-on:mouseenter="callmouseover(venture)"
  v-bind:data-index="index" v-bind:key="index">
    <a :href="venture.link" target="_blank">
    <div class="venture-row-container">
    <div class="venture-gridle-row">
    <div class="venture-name">{{venture.name}}</div>
    <div class="venture-type">{{venture.type}}</div>
    <div class="venture-description"><div class="venture-inner-description">{{venture.description}}</div><div class="venture-arrow">&#8594;</div></div>
  </div>
  </div>
  </a>
  </li>
</ul>
<!-- </transition-group> -->
</div>
</div>
</template>

<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex'

  export default {
    transition: {
      name: 'page'
    },
    head: {
      changed(newInfo, addedTags, removedTags) {
        dataLayer.push({
          'event': 'virtualpview'
        });
      },
      title: 'Ventures - Jerrick Media',
      meta: [{
        name: 'description',
        hid: 'description',
        content: 'Our growing portfolio of platforms, communities, and intellectual property.'
      }]
    },
    data() {
      return {
        last_venture: {},
        menu_filter_type: "All"
      }

    },
    beforeDestroy() {
      document.getElementById("bgvid").pause();
      document.getElementById("vid-video/webm").src = "";
      document.getElementById("vid-video/mp4").src = "";
      document.getElementById("bgvid").load();
      document.getElementById("bgimg").src = "";
    },
    computed: mapGetters({
      ventures: 'ventures/get_all_ventures'
    }),
    methods: {
      ...mapMutations({
        set_active_bmodel: 'themes/SET_THEME_BACKGROUNDMODEL',
        set_active_bmodelsrc: 'themes/SET_THEME_VIDEOSRC'
      }),
      setMenuFilter: function(event) {
        //  this.menu_filter_type = filtert;
        this.menu_filter_type = event.target.id.substring(9);
        document.getElementById("sub-head-platform").style.opacity = 0.5;
        document.getElementById("sub-head-movie").style.opacity = 0.5;
        document.getElementById("sub-head-ip").style.opacity = 0.5;
        document.getElementById("sub-head-community").style.opacity = 0.5
        document.getElementById(event.target.id).style.opacity = 1;

      },
      menufilter: function(ventures, filtert) {
        if (this.menu_filter_type == "All")
          return ventures;
       return ventures.filter(function(venture) {
          return venture.filter_type == filtert;

        })
      },
      callmouseover: function(ven) {
        if (ven.background_model.type == "video") {


          if (this.last_venture.background_model != undefined) {
            if (this.last_venture.background_model.video == undefined) {
              document.getElementById("vid-video/webm").src = ven.background_model.video.vidsrcs[0];
              document.getElementById("vid-video/mp4").src = ven.background_model.video.vidsrcs[1];


              document.getElementById("bgvid").load();
              document.getElementById("bgvid").oncanplay = function() {
                document.getElementById("bgimg").style.opacity = 0;
                document.getElementById("bgimg").style.visibility = "hidden";

                document.getElementById("bgvid").style.opacity = 1;
                document.getElementById("bgvid").style.visibility = "visible";


                document.getElementById("bgvid").play();

              };
            } else if (this.last_venture.background_model.video != undefined && this.last_venture.background_model.video.vidsrcs[0] == ven.background_model.video.vidsrcs[0]) {

            } else {
              document.getElementById("vid-video/webm").src = ven.background_model.video.vidsrcs[0];
              document.getElementById("vid-video/mp4").src = ven.background_model.video.vidsrcs[1];


              document.getElementById("bgvid").load();
              document.getElementById("bgvid").oncanplay = function() {
                document.getElementById("bgvid").style.visibility = "visible";
                document.getElementById("bgvid").style.opacity = 1;

                document.getElementById("bgvid").play();
              };
            }

          } else {
            document.getElementById("vid-video/webm").src = ven.background_model.video.vidsrcs[0];
            document.getElementById("vid-video/mp4").src = ven.background_model.video.vidsrcs[1];


            document.getElementById("bgvid").load();
            document.getElementById("bgvid").oncanplay = function() {

              document.getElementById("bgimg").style.opacity = 0;
              document.getElementById("bgimg").style.visibility = "hidden";


              document.getElementById("bgvid").style.opacity = 1;
              document.getElementById("bgvid").style.visibility = "visible";
              document.getElementById("bgvid").play();
            };

          }


        } else if (ven.background_model.type == "image") {

          document.getElementById("bgvid").pause();
          document.getElementById("vid-video/webm").src = "";
          document.getElementById("vid-video/mp4").src = "";
          document.getElementById("bgvid").load();

          document.getElementById("bgimg").style.opacity = 0;
          document.getElementById("bgimg").src = ven.background_model.url;
          document.getElementById("bgimg").style.visibility = "visible";
          document.getElementById("bgvid").style.opacity = 0;
          document.getElementById("bgvid").style.visibility = "hidden";

          document.getElementById("bgimg").style.opacity = 1;

          this.set_active_bmodel(ven.background_model);

        } else {
          //  this.set_active_bmodel(ven.background_model);

        }
        this.set_active_bmodel(ven.background_model);
        this.last_venture = ven;


      }
  //     beforeEnter: function (el) {
  //    el.style.opacity = 0
  //    //el.style.height = 0
  //  },
  //  enter: function (el, done) {
  //    var delay = el.dataset.index * 50
  //    setTimeout(function () {
  //      Velocity(
  //        el,
  //        { opacity: 0.5},
  //        { complete: done }
  //      )
  //    }, delay)
  //  },
  //  leave: function (el, done) {
  //    var delay = el.dataset.index * 50
  //    setTimeout(function () {
  //      Velocity(
  //        el,
  //        { opacity: 0 },
  //        { complete: done }
  //      )
  //    }, delay)
  //  }
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
    font-weight:500;
    color: white !important;
  }

  .sub-header-description {
    font-size-responsive: 1.25rem 2.25rem 480px 1280px;
    font-weight:400;
    color: white !important;
    padding-top: 1rem;
    max-width: 52%;

    @include gridle_state(mid-tablet) {
      max-width: 100%;
    }

    @include gridle_state(mobile) {
      max-width: 98%;
    }

    div {
      display: inline-block;
      cursor: pointer;
      transition: .4s opacity;
      opacity: 0.5;
    }
  }

  #sub-head-etc {
    text-decoration: none !important;
    cursor: none !important;
    border-bottom: none;
  }

  #sub-head-platform,
  #sub-head-community,
  #sub-head-movie,
  #sub-head-ip {
    &:hover {
      opacity: 1 !important;
    }
  }


  .venture-list ul {
    color: white;
    list-style-type: none;
  }

  .venture-list {
    margin-bottom: 5rem;
  }

  .venture-list ul li {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    a {
      text-decoration: none;
      color: white!important;
    }
  }

  .venture-row-container {
    @include gridle_container();
    @include gridle_grid(12);
  }

  .venture-gridle-row {
    @include gridle_row();
    @include gridle_row_align(between);
    @include gridle_nowrap();
    padding-bottom: 10px;
  }

  .venture-row {
    opacity: 0.5;

    &:hover {
      opacity: 1;

      .venture-arrow {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .venture-row {
    padding-top: 30px;
    opacity: 0.5;
    transition: 0.5s opacity;
  }


  .venture-name,
  .venture-type,
  .venture-description {
    flex: 0 0 33.3%;
  }

  .venture-type {
    @include gridle_state(mobile mid-tablet) {
      display: flex;
      justify-content: left !important;
      @include gridle_row_align(center);
    }
  }

  .venture-description {
    display: flex;
    justify-content: space-between;

    @include gridle_state(mobile mid-tablet) {
      .venture-inner-description {
        display: none;
      }
      @include gridle_row_align(right);
    }

    @include gridle_state(mobile) {
      flex: 0 0 20%;
    }
  }


  .venture-arrow {
    opacity: 0;
    transition: .4s opacity;
    visibility: hidden;
    @include gridle_state(mobile mid-tablet) {
      visibility: visible;
      opacity: 1;
    }
  }
</style>
