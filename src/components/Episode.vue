<template>
  <div
    class="max-w-xs rounded overflow-hidden shadow-lg inline-block bg-gray-900 my-4"
  >
    <img
      @click="showModal"
      alt="Thumbnail"
      class="w-full cursor-pointer"
      src="https://tailwindcss.com/img/card-top.jpg"
    >
    <div class="px-6 py-3">
      <div
        @click="showModal"
        class="font-bold text-xl text-center cursor-pointer"
      >
        S{{ seasonNum }} E{{ episodeNum }} - {{ title }}
      </div>
    </div>

    <modal
      :name="unique"
      height="810"
      width="960"
    >
      <div class="bg-nf w-full h-full">
        <vue-plyr>
          <video :src="video" poster="https://tailwindcss.com/img/card-top.jpg">
            <source :src="video" size="1080" type="video/mp4">
          </video>
        </vue-plyr>
        <div class="p-5">
          <h1>S{{seasonNum}} E{{episodeNum}} - {{title}}</h1>
          <p>
            This is the description.
          </p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
  export default {
    name: 'Episode',
    props: {
      season: {
        type: String,
        required: false,
        default: '01'
      },
      number: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      source: {
        type: String,
        required: true
      }
    },
    computed: {
      seasonNum () {
        return this.season.toString().length > 1 ? this.season.toString() : `0${this.season.toString()}`
      },
      episodeNum () {
        return this.number.toString().length > 1 ? this.number.toString() : `0${this.number.toString()}`
      },
      unique () {
        return `s${this.seasonNum}e${this.episodeNum}`
      },
      video () {
        return `http://localhost:8000/The 100 S01/${this.source}`
      }
    },
    methods: {
      showModal () {
        this.$modal.show(this.unique)
      }
    }
  }
</script>
