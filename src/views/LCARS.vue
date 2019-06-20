<template>
  <div class="lcars-grid lcars-chrome-lb lcars-grid-merged-top lcars-fixed">
    <div class="lcars-topbar lcars-chrome-horizontal lcars-chrome-small">

    </div>
    <div id="menu" class="lcars-sidebar lcars-chrome-vertical lcars-chrome-smaller">
      <router-link class="lcars-btn lcars-chrome-rb" to="/lcars">Was ist LCARS?</router-link>
      <router-link class="lcars-btn lcars-chrome-ap" to="/lcars/isolinear-storage">Isolineare Speicherchips</router-link>
      <router-link class="lcars-btn lcars-chrome-fl" to="/lcars/padds">Padds</router-link>
      <router-link class="lcars-btn lcars-chrome-bg" to="/lcars/screenshots">LCARS Screenshots</router-link>
      <router-link class="lcars-btn lcars-chrome-or" to="/lcars/stylepack">LCARS Style Pack</router-link>
      <router-link class="lcars-btn lcars-chrome-rb" to="/lcars/screensaver">LCARS Screensaver</router-link>
      <router-link class="lcars-btn lcars-chrome-pi" to="/lcars/construction">Aufbau einer Konsole</router-link>
      <router-link class="lcars-btn lcars-chrome-or" to="/lcars/font">LCARS-Schrift (Font)</router-link>
      <router-link class="lcars-btn lcars-chrome-lb" to="/lcars/colorindex">Colorindex</router-link>
      <router-link class="lcars-btn lcars-chrome-ap" to="/lcars/wallpaper">Wallpaper</router-link>
      <router-link class="lcars-btn lcars-chrome-fl" to="/lcars/michael-okuda">Michael Okuda</router-link>
      <router-link class="lcars-btn lcars-chrome-bg" to="/lcars/books-cds">Bücher und CDs</router-link>
      <router-link class="lcars-btn lcars-chrome-pi" to="/lcars/animations">LCARS Animationen</router-link>
      <router-link class="lcars-btn lcars-chrome-or" to="/lcars/dietrich-kerner">Dietrich Kerner</router-link>
      <router-link class="lcars-btn lcars-chrome-lb" to="/lcars/wearables">LCARS Wearables</router-link>
      <router-link class="lcars-btn lcars-chrome-rb" to="/lcars/museum">LCARS-Museum</router-link>

      <router-link id="home-link" class="lcars-btn lcars-chrome-lb" to="/home">Home</router-link>
      <router-link class="lcars-btn lcars-chrome-pi" to="/sitemap">Sitemap</router-link>
      <a class="lcars-btn lcars-chrome-rb" href="https://google.de">Google</a>
    </div>
    <div class="lcars-grid-content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .lcars-grid {
    margin-top: 1rem;
    height: calc(100% - 1rem);
  }

  #menu {
    width: 9.7rem;
    box-sizing: border-box;
    --lcars-chrome-btn-size: 14pt;
    overflow-y: scroll;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  #home-link {
    padding-top: 5rem;
  }
</style>
