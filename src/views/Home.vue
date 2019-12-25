<template>
  <div
    class="bg-black flex min-h-screen"
    id="main"
  >
    <show-info />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ShowInfo from '../components/ShowInfo.vue'

  export default {
    name: 'home',
    components: {
      ShowInfo
    }
  }
</script>
