<template>
  <div class="episode-cards pb-4 flex flex-wrap flex-row items-center justify-between">
    <div
      :key="ep.src"
      class="max-w-xs rounded overflow-hidden shadow-lg inline-block bg-gray-900 my-4 cursor-pointer"
      v-for="ep in episodes"
    >
      <img alt="Sunset in the mountains" class="w-full" src="https://tailwindcss.com/img/card-top.jpg">
      <div class="px-6 py-3">
        <div class="font-bold text-xl text-center">S01 E02 - Episode Title</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Season',
    data () {
      return {
        episodes: [
          { src: 'The.100.S01E01.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E02.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E03.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E04.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E05.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E06.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E07.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E08.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E09.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E10.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E11.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' },
          { src: 'The.100.S01E12.Pilot.1080p.AVC.DTS-HD.MA.5.1.REMUX-FraMeSToR.mp4' }
        ]
      }
    }
  }
</script>
