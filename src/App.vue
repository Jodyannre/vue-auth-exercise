<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
    <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
    <li class="nav-item"><router-link class="nav-link" to="/card">Card</router-link></li>
    <li class="nav-item"><router-link class="nav-link" to="/logout">LogOut</router-link></li>
  </ul>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
