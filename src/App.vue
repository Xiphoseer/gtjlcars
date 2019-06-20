<template>
  <div class="lcars-body lcars-chrome-voyager" id="app">
    <div class="lcars-page lcars-fixed">
      <div class="lcars-topbar lcars-chrome-horizontal">
        <h1>gtjlcars.de</h1>
        <span class="lcars-bar-space lcars-bg-rb"></span>
      </div>
      <span class="lcars-infoline">
        <router-link class="lcars-color-lb upper" to="privacy">Datenschutzerklärung</router-link>&nbsp;
        <router-link class="lcars-color-fl upper" to="imprint">Impressum</router-link>&nbsp;<!--
        --><span class="lcars-fg-rb upper">&bull; {{date}}</span>&nbsp;<!--
        --><span class="lcars-fg-lb upper">&bull; {{time}}</span>&nbsp;<!--
        --><span class="lcars-fg-fl upper">&bull; Sternzeit {{stardate}}</span>
      </span>
      <div class="lcars-grid-content lcars-v-scroll">
        <router-view/>
      </div>
      <div class="lcars-bottombar lcars-chrome-horizontal" id="nav">
        <router-link v-show="shownav" class="lcars-btn lcars-sidenav-dock" to="/home">Home</router-link>
        <router-link v-show="shownav" class="lcars-btn lcars-chrome-rb" to="/info">Info</router-link>
        <router-link v-show="shownav" class="lcars-btn" to="/lcars">LCARS</router-link>
        <router-link v-show="shownav" class="lcars-btn lcars-chrome-fl" to="/excel">Excel</router-link>
        <router-link v-show="shownav" class="lcars-btn lcars-chrome-rb" to="/links">Links</router-link>
        <router-link v-show="shownav" class="lcars-btn" to="/imprint">Impressum</router-link>
        <router-link v-show="shownav" class="lcars-btn lcars-chrome-ap" to="/other">Sonstiges</router-link>
        <span class="lcars-bar-space lcars-bg-fl"></span>
      </div>
      <router-link to="/" class="lcars-btn lcars-chrome-ho lcars-topbar-left"></router-link>
      <a href="javascript:history.back();" class="lcars-btn lcars-chrome-ho lcars-bottombar-left"></a>
      <a href="javascript:history.forward();" class="lcars-btn lcars-chrome-ho lcars-bottombar-right"></a>
      <router-link to="/login" class="lcars-btn lcars-chrome-ho lcars-topbar-right"></router-link>
    </div>
  </div>
</template>

<script>
  const WEEKDAYS = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ];

  const MONTHS = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

  const SECONDS_PER_DAY = 86400;
  const UNITS_PER_DAY = (1000 / 365);

  export default {
    data() {
      return {
        stardate: "#####.#",
        date: "Failed Transmission",
        time: "--:--:--",
        timerId: "",
        shownav: true,
      }
    },
    mounted: function() {
      this.tick();
      this.shownav = this.$route.path !== "/";
    },
    beforeDestroy: function() {
      clearInterval(this.timerId);
    },
    methods: {
      tick: function() {
        this.timerId = setInterval(() => {
          let cd = new Date();

          let sec = ("00" + cd.getSeconds()).slice(-2);
          let min = ("00" + cd.getMinutes()).slice(-2);
          let hor = ("00" + cd.getHours()).slice(-2);

          let day = cd.getDay();
          let dat = cd.getDate();
          let mon = cd.getMonth();
          let yar = cd.getFullYear();

          // based on work from Heath Coop of TrekConnection.com,
          // please keep these credits when using this script
          let Month = mon + 1;
          let Year = yar;

          let yearDif = Math.abs(Year - 1987);

          var SDYear = 40500 + (yearDif * 1000);
          let YearStart = new Date(Year,0,1,0,0,0)

          let NowTime = cd.getTime() / 1000;
          let YearStartTime = YearStart.getTime() / 1000;
          let Days = (NowTime - YearStartTime) / SECONDS_PER_DAY;

          var SDDays = (Days * UNITS_PER_DAY);
          let StarDate = Math.floor((SDYear + SDDays) * 10 + .5) / 10

          this.stardate = StarDate;
          this.time = hor + ":" + min + ":" + sec;
          this.date = WEEKDAYS[day] + ", " + dat + ". " + MONTHS[mon] + ", " + yar;
        }, 1000);
      }
    },
    watch: {
      $route: function() {
        this.shownav = (this.$route.path !== "/")
      }
    }
  }
</script>

<style lang="scss" src="../node_modules/htmlcars/src/assets/sass/lcars.scss"></style>
<style lang="scss" src="@/assets/sass/gtjlcars.scss"></style>

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

  .upper {
    text-transform: uppercase;
  }

  .lcars-topbar-left {
    grid-area: head / head / bar-end / content-begin;
  }

  .lcars-topbar-right {
    grid-area: head / content-end / bar-end / tail;
  }

  .lcars-bottombar-left {
    grid-area: bar-start / head / tail / content-begin;
  }

  .lcars-bottombar-right {
    grid-area: bar-start / content-end / tail / tail;
  }

  .lcars-topbar-left, .lcars-bottombar-left,
  .lcars-topbar-right, .lcars-bottombar-right {
    padding: 0;
    min-width: 0;
    max-width: 2.3rem;
  }

  .lcars-topbar-left, .lcars-bottombar-left {
    border-top-left-radius: var(--lcars-chrome-height);
    border-bottom-left-radius: var(--lcars-chrome-height);
    border-right: 0.3rem solid var(--lcars-screen-bg);
  }

  .lcars-topbar-right, .lcars-bottombar-right {
    border-top-right-radius: var(--lcars-chrome-height);
    border-bottom-right-radius: var(--lcars-chrome-height);
    border-left: 0.3rem solid var(--lcars-screen-bg);
  }

  .lcars-sidenav-dock {
    width: 10rem;
  }
</style>
