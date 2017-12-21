<template>
<div class="sub-header-title">A technology company focused on the development of communities, marketing branded digital content, and e-commerce opportunities.
</div>
</template>

<script>
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
      title: 'Home - Jerrick',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'Jerrick (OTCQB:JMDA) is a technology company focused on the development and marketing of branded digital content and e-commerce properties.'
        },
        {
          hid: 'og:image',
          property: "og:image",
          content: 'https://res.cloudinary.com/jerrick/image/upload/v1495632664/jerrick_og_gkpfbq.jpg'
        },
        {
          hid: 'og:title',
          property: "og:title",
          content: 'Jerrick'
        },
        {
          hid: 'og:site_name',
          property: "og:site_name",
          content: 'Jerrick'
        },
        {
          hid: 'og:url',
          property: "og:url",
          content: 'https://jerrick.media'
        },
        {
          hid: 'og:description',
          property: "og:description",
          content: 'Jerrick (OTCQB:JMDA) is a technology company focused on the development and marketing of branded digital content and e-commerce properties.'
        },
        {
          hid: 'og:type',
          property: "og:type",
          content: 'website'
        },
        {
          hid: 'twitter:card',
          property: "twitter:card",
          content: 'summary'
        },
        {
          hid: 'twitter:site',
          property: "twitter:site",
          content: '@jerrickmedia'
        },
        {
          hid: 'twitter:title',
          property: "twitter:title",
          content: 'Jerrick'
        },
        {
          hid: 'twitter:description',
          property: "twitter:description",
          content: 'Jerrick (OTCQB:JMDA) is a technology company focused on the development and marketing of branded digital content and e-commerce properties.'
        },
      ]
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/gridle_settings';


  .sub-header-title {
    font-size-responsive: 2rem 5rem 480px 1280px;
    font-weight: 500;
    padding-top: 10rem;
    padding-bottom: 10rem;
    color: #f7f7f7;
    @include gridle_state(tablet) {
      padding-top: 7rem;
      padding-bottom: 7rem;
    }
    @include gridle_state(mobile mid-tablet) {
      padding-top: 4rem;
      padding-bottom: 2.5rem;
      max-width: 100%;
    }
  }



  .logo a {
    border-bottom: 0px !important;
  }
</style>
