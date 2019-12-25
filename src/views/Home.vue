<template>
  <section
    class="container"
    id="home"
  >
    <div class="px-20 py-10">
      <h1 class="text-6xl">The 100</h1>
    </div>
    <div class="season">
      <div class="selector">
        <season-selector />
      </div>
    </div>
  </section>
</template>

<script>
  // @ is an alias to /src
  import SeasonSelector from '../components/SeasonSelect.vue'

  export default {
    name: 'home',
    components: {
      SeasonSelector
    }
  }
</script>
