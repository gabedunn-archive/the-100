<template>
  <div class="px-10">
    <div class="seasons w-auto flex flex-row items-center justify-between mx-32">
      <router-link
        :key="season.number"
        :to="`/season/0${season.number}`"
        class="inline uppercase p-2 m-6 border border-white border-solid rounded-sm"
        v-for="season in seasons"
      >
        Season {{season.number}}
      </router-link>
    </div>
    <div class="mx-32">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Episodes',
    data () {
      return {
        seasons: [
          { number: 1 },
          { number: 2 },
          { number: 3 },
          { number: 4 },
          { number: 5 },
          { number: 6 }
        ]
      }
    }
  }
</script>

<style scoped>
  .seasons a.router-link-active {
    border-color: red;
  }
</style>
