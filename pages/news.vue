<template>
  <div class="main-container">
  <div class="sub-header">
    <div class="sub-header-title">
      News
    </div>
    <div class="sub-header-description">
      Product updates, press, and featured coverage.
    </div>
  </div>
  <div class="news-grid">
    <div class="news-row" v-for="(news_item,index) in news" :key="news_item.position">
      <a class="news-row-container" :href="news_item.link_url" target="_blank" v-on:mouseenter="news_backgroundenter(news_item,$event)" v-on:mouseleave="news_backgroundleave(news_item,$event)">
        <div v-if="news_item.background_model!=undefined">
          <div v-bind:ref="news_refgenerate(news_item)" class="news-background-image" :style="{'backgroundImage': 'url(' + news_item.background_model.url +')','background-size':'cover'}" v-if="news_item.background_model.type=='image'"></div>
        </div>
      <div class="news-item-type"><div class="news-item-type-text">{{news_item.type}}</div></div>
      <div class="news-item-description">{{news_item.description}}</div>
      <div class="news-item-link">
        <div>{{news_item.link_text}}</div>
        <div class="news-item-arrow">&#8594;</div>
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
      news: 'news/get_all_news'
    }),
    methods: {
      news_backgroundenter: function(news, event) {
        if (news.background_model != undefined) {
          if (news.background_model.type == "image")
            this.$refs[news.type.split(' ').join('')][0].style.opacity = 1;
        }
      },
      news_backgroundleave: function(news, event) {
        if (news.background_model != undefined) {
          if (news.background_model.type == "image")
            this.$refs[news.type.split(' ').join('')][0].style.opacity = 0;
        }
      },
      news_refgenerate: function(news) {
        return news.type.split(' ').join('');
      }
    },
    head: {
      changed(newInfo, addedTags, removedTags) {
        dataLayer.push({
          'event': 'virtualpview'
        });
      },
      title: 'News - Jerrick Media',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Product updates, press, and featured coverage.'
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

  .news-grid {
    display: flex!important;
    margin-bottom: 5rem;
    @include gridle_wrap();
  }

  .news-row {
    display: flex!important;
    padding-right:8px !important;
    padding-left:8px !important;
    margin-bottom: 1rem;
    @include gridle_grid(6);
    @include gridle_state(mobile mid-tablet) {
      @include gridle_grid(12);
         padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  .news-arrow {
    display: none;
    @include gridle_state(mobile mid-tablet tablet) {
      display: flex;
    }
  }

  .news-row-container {
    background-color: #f7f7f7;
    padding: 3rem;
    position: relative;
    text-decoration: none;
    @include gridle_grid_grow();
    &:hover{
      .news-item-position,.news-item-description,.news-item-link{
        color:#1a1a1a;
           }
           }
     @include gridle_state(mobile) {
     .news-item-position,.news-item-description,.news-item-link{
       color:#1a1a1a!important;
            }
          }
  }

  .news-item-type {
    font-size-responsive: .875rem 1rem 480px 1280px;
    color: #1a1a1a;
    z-index: 2;
    padding-bottom: 4rem;
    display: flex;
  }


  .news-item-description {
    font-size-responsive: 1.25rem 1.5rem 480px 1280px;
    color: #1a1a1a;
    z-index: 2;
    padding-bottom: 1rem;
    @include gridle_grid_grow();
    @include gridle_row_align(center);
    @include gridle( no-gutter);

    @include gridle_state( mid-tablet tablet) {
      font-size: 1.5rem;
    }

    @include gridle_state(mobile) {
      font-size: 1.25rem;
    }
  }


  .news-item-link {
    font-size-responsive: .875rem 1rem 480px 1280px;
    padding-top: 4rem;
    color: #1a1a1a;
    @include gridle_row_align(between);
    display: flex;
    z-index: 2;
  }

  .news-item-link a {
    text-decoration: none;
    color: #1a1a1a;
  }

  .news-background-image {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s opacity;
    background-position: center;
    @include gridle_state(mobile) {
      opacity: 0 !important;
    }
  }
</style>
