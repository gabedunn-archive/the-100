<template>
  <div class="episode-cards pb-4 flex flex-wrap flex-row items-center justify-between">
    <episode
      :key="ep.src + i"
      :number="i + 1"
      :season="$route.params.season"
      :source="ep.src"
      title="Episode Title"
      v-for="(ep, i) in episodes"
    />
  </div>
</template>

<script>
  import Episode from './Episode'

  export default {
    name: 'Season',
    components: { Episode },
    data () {
      return {
        episodes: [
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' }
        ]
      }
    }
  }
</script>
