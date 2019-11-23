<template>
  <div class="season">
    <h1>This is a the page for season {{ this.$route.params.season }}.</h1>
    <p
      v-for="episode in episodes"
      :key="episode"
    >
      <vue-plyr>
        <video>
          <source :src="`The 100 S${$route.params.season}/${episode}`" type="video/mp4" size="1080">
        </video>
      </vue-plyr>
    </p>
  </div>
</template>

<script>
  import videos from '../videos'

  export default {
    name: 'Season',
    data () {
      return {
        videoPath: 'http://localhost:8081',
        episodes: videos[this.$route.params.season - 1]
      }
    }
  }
</script>
