<template>
  <div class="main-container">
  <div class="sub-header">
    <div class="sub-header-title">
      Investors
    </div>
    <div class="sub-header-description">
    Founded in 2012, Jerrick is a publicly traded company: OTCQB: JMDA
    </div>
  </div>
  <div class="ir-tabs flex flex-wrap items-center justify-center">
      <input id="tab1" type="radio" name="tabs" checked>
      <label id="tab1-label" for="tab1">Quote</label>

      <input id="tab2" type="radio" name="tabs">
      <label id="tab2-label" for="tab2">News</label>

      <input id="tab3" type="radio" name="tabs">
      <label id="tab3-label" for="tab3">Filings</label>

       <div class="content">
           <div id="content1">
             <div data-qmod-tool="detailedquotetabchart" data-qmod-params="{&quot;symbol&quot;:&quot;JMDA&quot;,&quot;chfill2&quot;:&quot;21adc3&quot;,&quot;chfill&quot;:&quot;1e99ad&quot;,&quot;svg&quot;:&quot;true&quot;,&quot;chln&quot;:&quot;666666&quot;}" class="qm-wrap qtool">
              </div>
          </div>
          <div id="content2">
              <div data-qmod-tool="fullnews" data-qmod-params="{&quot;symbol&quot;:&quot;JMDA&quot;,&quot;noSrc&quot;:&quot;bayaw,ccn&quot;}" class="qm-wrap qtool">
              </div>
          </div>
          <div id="content3">
              <div data-qmod-tool="filings" data-qmod-params="{&quot;symbol&quot;:&quot;JMDA&quot;}" class="qm-wrap qtool"></div>
          </div>
          <script async id="qmod" type="application/javascript" src="https://qmod.quotemedia.com/js/qmodLoader.js" data-qmod-wmid="101803" data-qmod-env="app" async></script>
      </div>

  </div>
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
      title: 'Investors - Jerrick Media',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Founded in 2012, Jerrick is a publicly traded company: OTCQB: JMDA'
      }]
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/gridle_settings';
.main-container {
    padding-top: 10rem;
    @include gridle_state(tablet) {

      padding-top:7rem;
    }
    @include gridle_state(mobile mid-tablet) {

      padding-top:4rem;
    }
  }

  .qmod-block-wrapper {
  background-color: transparent !important;
  color: white !important;
  }

  .qmod-hbg {
  background-color: transparent !important;
  }

  .qmod-detailedquote .qmod-quotegrid .qmod-label {
  color:white !important;
  }

  .qmod-ui-tool a {
  color:white !important;
  }

  a.qmod-tooltip {
  color: white !important;
  }

  .qmod-ui-tool {
  color: white !important;
  }

  .qmod-fullnews .qmod-news-list {
  background-color: transparent !important;
  }

  .qmod-fullnews .qmod-news-list li:nth-child(2n+0) {
  background-color: transparent !important;
  }

  .qmod-fullnews .qmod-news-list li {
  background-color: transparent !important;
  }

  .qmod-sec-filings table.dataTable.no-footer {
  border-bottom: none !important;
  }

  .qmod-sec-filings table.dataTable tbody tr {
  background-color: transparent !important;
  }

  .sub-header {
    padding-bottom: 5rem;
    @include gridle_state(tablet) {

      padding-bottom:5rem;
    }
    @include gridle_state(mobile mid-tablet) {

      padding-bottom:2.5rem;
    }
  }

  .sub-header-title {
    font-size-responsive: 2.25rem 5rem 480px 1280px;
    color: #f7f7f7;
    font-weight:500;
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

  .qm-wrap .qmod-ui-tool,
  .qm-wrap .qmod-block-wrapper,
  .qm-wrap h3.qmod-heading,
  .qm-wrap .qmod-ui-tool a,
  .qm-wrap .qmod-fullnews .qmod-news-list li .qmod-headline h4 {
    font-family: "Open Sans", Helvetica, Arial, Lucida, sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: #666;
  }

  .qm-wrap h3.qmod-heading,
  .qm-wrap .qmod-fullnews .qmod-news-list li {
    background-color: transparent;
  }

  .qm-wrap h3.qmod-heading {
    font-weight: bold;
  }

  .qm-wrap .qmod-fullnews .qmod-news-list li .qmod-headline h4 {
    font-weight: 300;
    line-height: normal;
  }

  .qm-wrap .qmod-ui-tool,
  .qm-wrap .qmod-fullnews .qmod-news-modifiers,
  .qm-wrap .qmod-fullnews .qmod-paginator,
  .qm-wrap .qmod-detailedquote .qmod-chart {
    margin: 0;
  }

  .qm-wrap .qmod-quotehead,
  .qm-wrap h2.qmod-heading {
    display: none;
  }

  #left-area .qm-wrap .qmod-ui-tool ul,
  .qm-wrap .qmod-disclaimer {
    padding: 0;
  }

  .qm-wrap li {
    list-style: none;
  }

  .qm-wrap .qmod-heading,
  .qm-wrap .qmod-modifiers,
  .qm-wrap .qmod-fullnews .qmod-news-list li {
    padding: 5px 0;
  }

  .qm-wrap .qmod-block-wrapper {
    box-shadow: none;
  }

  .qm-wrap .qmod-ui-tool a,
  .qm-wrap .qmod-fullnews .qmod-news-list li .qmod-headline h4 {
    color: #111;
  }

  .qm-wrap .qmod-ui-modal {
    z-index: 100000;
  }

  .qm-wrap .qmod-btn.qmod-darkblue {
    background-color: #21adc3;
    border-color: #1e99ad;
    box-shadow: 0 -2px #1e99ad inset;
  }

  .qm-wrap .qmod-disclaimer .qmod-disclaimer-logo {
    display: none;
  }

  .qm-wrap .qmod-disclaimer,
  .qm-wrap .qmod-disclaimer a {
    font-size: 10px;
  }

  .qm-wrap .qmod-detailedquote .pure-u-xl-1-2,
  .qm-wrap .qmod-detailedquote .pure-u-xl-12-24 {
    width: 100%;
  }

  .qm-wrap .qmod-detailedquote .qmod-quotegrid {
    margin: 0 !important;
  }

  .qm-wrap .qmod-detailedquote .qmod-quotegrid .qmod-data-point,
  .qm-wrap .qmod-detailedquote .qmod-quotegrid .qmod-label {
    margin: 0;
    padding: 0 10px;
  }

  .qm-wrap .qmod-tab-img {
    height: 220px;
  }

  .qm-wrap .qmod-sec-filings table.dataTable thead td,
  .qm-wrap .qmod-sec-filings table.dataTable thead th {
    border-top: none;
    border-bottom: 1px solid #666;
  }

  .qm-wrap .qmod-sec-filings .qmod-filing-formview {
    white-space: normal;
  }

  #content-area .qm-wrap tr,
  #content-area .qm-wrap td,
  #content-area .qm-wrap th {
    max-width: inherit;
  }

  #content-area .qm-wrap table tr,
  #content-area .qm-wrap table th {
    padding: 8px 15px;
  }

  .qm-wrap td {
    vertical-align: top;
  }

  .qm-wrap .qmod-ui-tool a.qmod-dropdown_toggle,
  .qm-wrap .qmod-ui-tool .qmod-dropdown-menu a {
    font-size: 12px;
  }

  .qm-wrap .qmod-sec-filings .qmod-dropdown_toggle {
    min-width: 200px;
  }

  .qm-wrap .qm-wrap .qmod-sec-filings table.dataTable thead td,
  .qm-wrap .qmod-sec-filings table.dataTable thead th,
  #main-content .qm-wrap td,
  .qm-wrap .qmod-table {
    border: none;
  }

  .qm-wrap .qmod-quotegrid {
    padding-top: 20px;
  }

  #tab1:checked~#tab1-label,
  #tab2:checked~#tab2-label,
  #tab3:checked~#tab3-label {
    text-decoration: underline;
  }

  #tab1:checked~.content #content1,
  #tab2:checked~.content #content2,
  #tab3:checked~.content #content3 {
    display: block;
  }

  .ir-tabs input {
    display: none;
  }

  .ir-tabs label {
    padding-right: 4rem;
    font-size-responsive: 1rem 1.5rem 480px 1280px;
    color: #f7f7f7;
  }

  .ir-tabs .content {
    width: 100%;
    padding-top: 50px;
    margin-bottom:5rem;
  }

  .ir-tabs .content>div {
    display: none;
  }


</style>
