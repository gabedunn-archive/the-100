<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/season/01">Season 01</router-link> |
      <router-link to="/season/02">Season 02</router-link> |
      <router-link to="/season/03">Season 03</router-link> |
      <router-link to="/season/04">Season 04</router-link> |
      <router-link to="/season/05">Season 05</router-link> |
      <router-link to="/season/06">Season 06</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #00aab9;
}
</style>
