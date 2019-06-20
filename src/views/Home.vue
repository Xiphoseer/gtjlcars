<template>
  <div class="home">
    <div class="block-1 lcars-bg-rb"></div>
    <div class="block-2 lcars-chrome-horizontal lcars-chrome-smaller">
      <a class="lcars-btn lcars-chrome-or">TEST</a>
      <span class="lcars-bar-space lcars-bg-lb"></span>
      <h1>Sekundaernavigation</h1>
    </div>
    <div class="block-3 lcars-bg-be"></div>
    <div class="block-4 lcars-bg-fl"></div>
    <div class="block-5 lcars-bg-lb"></div>
    <div class="block-6 lcars-bg-fl"></div>
    <div class="ufp-logo"></div>
    <div class="block-7 lcars-bg-rb"></div>
    <div class="block-8 lcars-bg-rb"></div>
    <div class="block-9 lcars-bg-rb"></div>
    <div class="block-10 lcars-bg-bg"></div>
    <div class="buttons"></div>
    <div class="nav-secondary"></div>
    <div class="block-11 lcars-bg-pi"></div>
    <div class="block-12 lcars-chrome-horizontal lcars-chrome-smaller">
      <span class="lcars-bar-space lcars-bg-rb"></span>
    </div>
    <div class="block-13 lcars-chrome-horizontal lcars-chrome-smaller">
      <span class="lcars-bar-space lcars-bg-lb"></span>
      <h1>Infobereich</h1>
    </div>
    <div class="block-14 lcars-bg-pi"></div>
    <div class="block-15 lcars-bg-fl"></div>
    <div class="block-16 lcars-bg-be"></div>
    <div class="block-17 lcars-bg-rb"></div>
    <section class="newslog">
      <h1>Logbuch <small>Stand</small>&nbsp;<small>22. Mai 2019</small></h1>

      <hr class="lcars-color-pi">
      <h3>Ältere Logbücher</h3>

      <a class="lcars-btn lcars-round lcars-chrome-lb">2001</a>
      <a class="lcars-btn lcars-round lcars-chrome-ap">2002</a>
      <a class="lcars-btn lcars-round lcars-chrome-or">2003</a>
      <a class="lcars-btn lcars-round lcars-chrome-rb">2004</a>
      <a class="lcars-btn lcars-round lcars-chrome-be">2005</a>
      <a class="lcars-btn lcars-round lcars-chrome-fl">2006</a>
      <a class="lcars-btn lcars-round lcars-chrome-pi">2007</a>
      <a class="lcars-btn lcars-round lcars-chrome-bg">2008</a>
      <a class="lcars-btn lcars-round lcars-chrome-ap">2009</a>
      <a class="lcars-btn lcars-round lcars-chrome-pi">2010</a>
      <a class="lcars-btn lcars-round lcars-chrome-rb">2011</a>
      <a class="lcars-btn lcars-round lcars-chrome-or">2012</a>
      <a class="lcars-btn lcars-round lcars-chrome-lb">2013</a>
      <a class="lcars-btn lcars-round lcars-chrome-fl">2014</a>
      <a class="lcars-btn lcars-round lcars-chrome-rb">2015</a>
      <a class="lcars-btn lcars-round lcars-chrome-ap">2016</a>
      <a class="lcars-btn lcars-round lcars-chrome-pi">2017</a>
      <a class="lcars-btn lcars-round lcars-chrome-lb">2018</a>
      <a class="lcars-btn lcars-round lcars-chrome-or">2019</a>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @mixin border-left-radius($rad) {
    border-top-left-radius: $rad;
    border-bottom-left-radius: $rad;
  }

  @mixin bar-elem-right() {
    padding-left: 0;
    margin-left: 0.3rem;
    @include border-left-radius(0);
  }

  .block-2 h1,
  .block-13 h1,
  .block-12 .lcars-bar-space {
    border-right: 0.3rem solid var(--lcars-screen-bg);
  }

  .home {
    display: grid;
    grid-template-columns: 4fr 1fr [C] 2fr 2fr 2fr 3fr 1fr;
    grid-template-rows: min-content
    2rem 0.3rem
    2rem 2rem 0.3rem
    2rem 0.3rem
    2rem 1rem 0.3em
    1rem 2rem 0.3rem
    2rem 0.3rem
    2rem min-content 0.3rem
    min-content 2rem 0.3rem
    5rem 0.3rem
    min-content;
    min-height: 20rem;
    margin: 1rem auto;
    max-width: 80%;
    --lcars-chrome-inlay-depth: 0.7rem;
  }

  .ufp-logo {
    grid-area: 1 / 1 / 10 / 3;
    background-image: url("../assets/img/ufp.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--lcars-screen-bg);
    border-bottom-right-radius: 2rem;
  }

  .buttons {
    grid-area: 13 / 1 / 19 / 3;
    background-color: var(--lcars-screen-bg);
    border-top-right-radius: 2rem;
  }

  .nav-secondary {
    grid-area: 2 / 4 / 18 / 8;
    background-color: var(--lcars-screen-bg);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }

  .newslog {
    grid-area: 21 / 4 / 26 / 8;
    background-color: var(--lcars-screen-bg);
    @include border-left-radius(2rem);
    padding: 1rem;
    --lcars-chrome-btn-padding: 1rem 1.4rem 0 2rem;
    --lcars-btn-min-width: 9rem;
    --lcars-chrome-btn-size: 20pt;

    .lcars-btn {
      min-width: var(--lcars-btn-min-width);
      margin: 0.3rem;
    }
  }

  .block-1 {
    display: block;
    grid-area: 1 / C / 3 / 5;
    border-top-left-radius: 2rem;
  }

  .block-2 {
    grid-area: 1 / 5 / 2 / 8;
    @include border-left-radius(0);
    padding-left: 0;
    margin-left: 0.3rem;
  }

  .block-3 {
    grid-area: 4 / C / 6 / 4;
  }

  .block-4 {
    grid-area: 7 / C / 8 / 4;
  }

  .block-5 {
    grid-area: 9 / 2 / 11 / 4;
    border-bottom-right-radius: 2rem;
  }

  .block-6 {
    grid-area: 9 / 1 / 11 / 2;
    margin-right: 0.3rem;
  }

  .block-7 {
    grid-area: 12 / 1 / 14 / 2;
    margin-right: 0.3rem;
  }

  .block-8 {
    grid-area: 12 / 2 / 14 / 4;
    border-top-right-radius: 2rem;
  }

  .block-9 {
    grid-area: 15 / C / 16 / 4;
  }

  .block-10 {
    grid-area: 17 / C / 19 / 5;
    border-bottom-left-radius: 2rem;
  }

  .block-11 {
    grid-area: 18 / 5 / 19 / 6;
    border-top: var(--lcars-chrome-inlay-depth) solid var(--lcars-screen-bg);
    margin-left: 0.3rem;
  }

  .block-12 {
    grid-area: 18 / 6 / 19 / 8;
    @include bar-elem-right();
  }

  .block-13 {
    grid-area: 20 / 6 / 21 / 8;
    @include bar-elem-right();
  }

  .block-14 {
    grid-area: 20 / 5 / 21 / 6;
    border-bottom: var(--lcars-chrome-inlay-depth) solid var(--lcars-screen-bg);
    margin-left: 0.3rem;
  }

  .block-15 {
    grid-area: 20 / C / 22 / 5;
    border-top-left-radius: 2rem;
  }

  .block-16 {
    grid-area: 23 / C / 24 / 4;
  }

  .block-17 {
    grid-area: 25 / C / 26 / 4;
  }
</style>
