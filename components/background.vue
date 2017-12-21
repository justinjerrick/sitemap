<template>
<div id="the_background">
     <img :src="theme.background_model.url" id="bgimg"></img>
    <video playsinline loop preload="metadata" id="bgvid" ref="bg_video_id">
      <source  :src="processSrcs(theme)" id="vid-video/webm" type="video/webm"></source>
      <source :src="processSrcs(theme)" id="vid-video/mp4" type="video/mp4"></source>
    </video>
</div>
</template>

<style scoped>

#the_background{
  position:fixed;
  width:100%;
  min-height:100%;
  z-index:-1;
  top:0;
  left:0;
  -webkit-filter: brightness(0.5);
    filter: brightness(0.5);
}

  #bgimg {
    opacity:0;
    visibility:hidden;
    min-height:100%;
    min-width:100%;
    width:auto;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    transition:.2s opacity;
  }
  video#bgvid {
      position: fixed;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -100;
      -ms-transform: translateX(-50%) translateY(-50%);
      -moz-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translate(-50%, -50%);
      background: no-repeat;
      background-size: cover;
      z-index:-1;
      transition:.2s opacity;
  }
</style>
<script>
  import VideoBackground from '~components/VideoBackground.vue'
  export default {
    props: {
      theme:{
        type:Object
      }
    },
    components: {
      VideoBackground
    },
    methods:{
        processSrcs:function(themer)
        {
          if(themer.page=="venture")
          {
          return "";
          }
          else {
            return "";
          }
        }


    },
     head () {
     if (this.theme.background_model.color) {
       return {
         bodyAttrs: {
           style: `background-color: ${this.theme.background_model.color};`
         }
       }
     }
   }
  }
</script>
