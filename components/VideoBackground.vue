<template>
  <div class="VideoBG">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ref="video_image"></img>
    <video playsinline loop ref="video" id="bgvid" :poster="image">
      <source v-for="source in sources" :src="source" :type="getMediaType(source)">
    </video>
  </div>
</template>


<script>
  export default {
    props: {
      sources: {
        type: Array,
        required: true
      },
      image: {
        type: String
      }
    },

    data () {
      return {
        videoRatio: null
      }
    },

    mounted () {

    //  this.setContainerHeight()

      if (this.videoCanPlay()) {
          this.$refs.video.play();
        this.$refs.video.oncanplay = () => {
          if (!this.$refs.video) return

    //      this.videoRatio = this.$refs.video.videoWidth / this.$refs.video.videoHeight
    //     this.setVideoSize()
          this.$refs.video.style.visibility = 'visible'
            this.setImageUrl();
       }
      }
      else
      {
        this.setImageUrl();
      }


      //window.addEventListener('resize', this.resize)
    },

    beforeDestroy () {
    //  window.removeEventListener('resize', this.resize)
    },

    methods: {
      resize () {
        //this.setContainerHeight()

        if (this.videoCanPlay()) {
          this.setVideoSize()
        }
      },

      videoCanPlay () {
        return !!this.$refs.video.canPlayType
      },

      setImageUrl () {
        if (this.image) {
          this.$refs.video_image.src = this.image;
        }
      },

      setContainerHeight () {
        this.$el.style.height = `${window.innerHeight}px`
      },

      setVideoSize () {
        var width, height, containerRatio = this.$el.offsetWidth / this.$el.offsetHeight

        if (containerRatio > this.videoRatio) {
          width = this.$el.offsetWidth
        } else {
          height = this.$el.offsetHeight
        }

        this.$refs.video.style.width = width ? `${width}px` : 'auto'
        this.$refs.video.style.height = height ? `${height}px` : 'auto'
      },

      getMediaType (src) {
        return 'video/' + src.split('.').pop()
      }
    }
  }
</script>


<style scoped>

 .VideoBG img {
   width:100%;
   position:fixed;
   z-index:-1;
   top:0;
   left:0;
}
video#bgvid {
    visibility: hidden;
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
}
</style>
