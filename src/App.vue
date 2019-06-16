<template>
  <div class="lcars-page" id="app">
    <div class="lcars-topbar lcars-chrome-horizontal" id="nav">
      <router-link class="lcars-btn" to="/">Home</router-link>
      <router-link class="lcars-btn" to="/about">About</router-link>
    </div>
    <div class="lcars-grid-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" src="../node_modules/htmlcars/src/assets/sass/lcars.scss"></style>

<style lang="scss">
  body, html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    @extend %lcars-body-ref;
  }

  #app {
    height: 100%;
  }

  #nav a {
    $vue-color: #42b983;
    --lcars-chrome-bg-light: #{lighten($vue-color, 10%)};
    --lcars-chrome-bg: #{$vue-color};
  }
</style>
