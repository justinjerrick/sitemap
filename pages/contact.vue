<template>
  <div class="main-container">
  <div class="sub-header">
    <div class="sub-header-title">
      Contact
    </div>
    <div class="sub-header-description">
      Start a conversation with the Jerrick team today.
    </div>
  </div>
  <div class="contacts-grid">
    <div class="contacts-row" v-for="(contact,index) in contacts" :key="contact.position">
      <a class="contacts-row-container" :href="contact.link_url" target="_blank" v-on:mouseenter="contact_backgroundenter(contact,$event)" v-on:mouseleave="contact_backgroundleave(contact,$event)">
      <div v-if="contact.background_model!=undefined">
        <div v-bind:ref="contact_refgenerate(contact)" class="contact-background-image" :style="{'backgroundImage': 'url(' + contact.background_model.url +')','background-size':'cover'}" v-if="contact.background_model.type=='image'"></div>
      </div>
      <div class="contacts-item-position"><div class="contacts-item-position-text">{{contact.position}}</div></div>
      <div class="contacts-item-description">{{contact.description}}</div>
      <div class="contacts-item-link"><div>{{contact.link_text}}</div>
          <div class="contacts-item-arrow">&#8594;</div>
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
      contacts: 'contacts/get_all_contacts'
    }),
    methods: {
      contact_backgroundenter: function(contact, event) {
        if (contact.background_model != undefined) {
          if (contact.background_model.type == "image")
            this.$refs[contact.position.split(' ').join('')][0].style.opacity = 1;
        }
      },
      contact_backgroundleave: function(contact, event) {
        if (contact.background_model != undefined) {
          if (contact.background_model.type == "image")
              this.$refs[contact.position.split(' ').join('')][0].style.opacity = 0;
        }
      },
      contact_refgenerate: function(contact) {
        return contact.position.split(' ').join('');
      }
    },
    head: {
      changed(newInfo, addedTags, removedTags) {

        dataLayer.push({
          'event': 'virtualpview'
        });
      },
      title: 'Contact - Jerrick Media',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Start a conversation with the Jerrick Team today.'
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

  .contacts-grid {
    display: flex!important;
    margin-bottom:5rem;
    @include gridle_wrap();
  }

  .contacts-row {
    display: flex!important;
    padding-right: 8px !important;
    padding-left: 8px !important;
    margin-bottom: 1rem;
    @include gridle_grid(6);
    @include gridle_state(mobile mid-tablet) {
      @include gridle_grid(12);
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  .contacts-arrow {
    display: none;
    @include gridle_state(mobile mid-tablet tablet) {
      display: flex;
    }
  }

  .contacts-item-arrow {
    cursor: pointer;
  }

  .contacts-row-container {
    background-color: #f7f7f7;
    position: relative;
    padding: 3rem;
    text-decoration:none;
    @include gridle_grid_grow();
    &:hover{
      .contacts-item-position,.contacts-item-description,.contacts-item-link{
        color:#f7f7f7;
      }
    }
    @include gridle_state(mobile) {
      .contacts-item-position,.contacts-item-description,.contacts-item-link{
        color:#1a1a1a!important;
      }
    }
  }

  .contacts-item-position {
    font-size-responsive: 1.25rem 1.5rem 480px 1280px;
    color: #1a1a1a;
    padding-bottom: 1rem;
    display: flex;
    z-index: 2;
  }


  .contacts-item-description {
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


  .contacts-item-link {
    z-index: 2;
    padding-top: 2rem;
      color: #1a1a1a;
    @include gridle_row_align(between);
    display: flex;
    font-size-responsive: .875rem 1rem 480px 1280px;
  }

  .contacts-item-link a {
    text-decoration: none;
    color: #1a1a1a;
  }

  .contact-background-image {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s opacity;
    background-position:center;
    @include gridle_state(mobile) {
      opacity: 0 !important;
    }
  }
</style>
