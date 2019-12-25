<template>
  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <div class="relative">
      <label for="grid-state">Season</label>
      <v-select
        :options="seasons"
        :value="season"
        @input="seasonSelected"
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-state"
      >
      </v-select>
    </div>
  </div>
</template>

<script>
  import vSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css'

  export default {
    name: 'season-select',
    components: {
      vSelect
    },
    data () {
      return {
        season: 'Season 1',
        seasons: {
          'Season 1': '01',
          'Season 2': '02',
          'Season 3': '03',
          'Season 4': '04',
          'Season 5': '05',
          'Season 6': '06'
        }
      }
    },
    methods: {
      seasonSelected () {
        console.log(this.season)
        this.$router.push({ path: `/seasons/${this.season}` })
      }
    }
  }
</script>
