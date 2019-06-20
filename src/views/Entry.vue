<template>
  <div class="entry">
    <h1 class="title red">&#0133; 17 Jahre GTJLCARS &#0133;</h1>
    <h3 class="title red">&bull;Klick auf das UFP Logo um zur Startseite zu gelangen&bull;</h3>
    <p class="title red">
      oder warte 5 Sekunden und du wirst automatisch weitergeleitet<br>
      <small>Falls du nicht automatisch weitergeleitet wirst, klick <router-link to="/home">hier</router-link></small>
    </p>
    <h1 class="title lcars-fg-lb">Willkommen bei gtjlcars.de</h1>
    <blockquote class="teaser lcars-fg-or">
      Die einzige deutschsprachige LCARS-Seite,<br>
      die sich mit LCARS als Thema befasst
    </blockquote>
    <span class="stat lcars-font lcars-bg-or black">Letzte Aktualisierung</span>
    <span class="stat lcars-font lcars-fg-or">22. Mai 2019</span>
    <br><br>
    <h4 class="title lcars-fg-rb">Diese und die folgenden Seiten wurden erstellt durch:</h4>
    <strong><a href="http://www.gtj-webdesign.de">GTJ Webdesign</a></strong>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
  .title { border-bottom: unset; }
  .stat { font-size: 1.3em; padding: 0 0.3em; }

  .red { color: red; }
  .black { color: black; }

  .entry {
    margin: 2rem auto;

    &, & p {
        text-align: center;
    }
  }

  .teaser {
    border: none;
    padding: none;
    font-size: 1.5em;
  }

  small {
    color: gray;
  }
</style>
