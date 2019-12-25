<template>
  <section class="w-full">
    <div class="space-station h-1/2">
      <div class="px-16">
        <div class="py-10">
          <img alt="The 100" src="../assets/img/rsz_the-100.png">
        </div>
        <div>
          <p class="meta text-white py-5">
            <span class="year mx-2">2019</span>
            <span class="rating mx-2 px-3 py-1">TV-14</span>
            <span class="seasons mx-2" v-text="seasonText" />
          </p>
        </div>
        <div class="synopsis w-1/3 py-5">
          <p v-text="synopsis" />
        </div>
      </div>
    </div>
    <div class="episodes min-h-1/2 bg-nf">
      <episodes />
    </div>
  </section>
</template>

<script>
  import { seasons } from '../config'
  import { synopsis } from '../assets/js/showInfo'
  import Episodes from './Episodes'

  export default {
    name: 'ShowTitle',
    components: { Episodes },
    data () {
      return {
        synopsis
      }
    },
    computed: {
      seasonText () {
        return `${seasons} ${seasons === 1 ? 'season' : 'seasons'}`
      }
    }
  }
</script>

<style scoped>
  .text-white {
    color: white;
  }

  .rating {
    border: white 1px solid;
  }

  .meta {
    font-size: 1.1vw;
    font-weight: bold;
  }

  .synopsis {
    color: #999999;
    font-size: 1.125vw;
  }

  .space-station {
    background-image: url("../assets/img/main-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .w-100vw {
    width: 100vw;
  }
</style>
