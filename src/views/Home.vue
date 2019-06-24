<template>
  <div class="home">
    <div class="block-1 lcars-bg-rb"></div>
    <a class="lcars-btn btn-0 lcars-chrome-or lcars-chrome-smaller">93-741</a>
    <div class="block-2 lcars-chrome-horizontal lcars-chrome-smaller">
      <span class="lcars-bar-space lcars-bg-lb"></span>
      <h1>Sekundaernavigation</h1>
    </div>
    <div class="block-3 lcars-bg-be"></div>
    <div class="block-4 lcars-bg-fl"></div>
    <div class="block-5 lcars-bg-lb"></div>
    <div class="block-6 lcars-bg-fl"></div>
    <div class="ufp-logo">
      <span class="lcars-font lcars-fg-rb">Online seit 14.09.2001</span>
    </div>
    <div class="block-7 lcars-bg-rb"></div>
    <div class="block-8 lcars-bg-rb"></div>
    <div class="block-9 lcars-bg-rb"></div>
    <div class="block-10 lcars-bg-bg"></div>
    <div class="buttons">
      <a class="lcars-btn lcars-round lcars-chrome-or">Win Styles</a>
      <a class="lcars-btn lcars-round lcars-chrome-lb">Spenden</a>
      <a class="lcars-btn lcars-round lcars-chrome-r0">Suchen</a>
      <a class="lcars-btn lcars-round lcars-chrome-rb">Webdesign</a>
    </div>

    <div class="nav-secondary"></div>
    <a class="lcars-btn btn-1 lcars-chrome-rb">Sound Aus</a>
    <a class="lcars-btn btn-2 lcars-chrome-fl">LCARS Shop</a>
    <a class="lcars-btn btn-3 lcars-chrome-bg">59-874</a>
    <h3 class="head-1">25</h3>
    <h3 class="head-2">36</h3>
    <h3 class="head-3">47</h3>
    <span class="lcars-chrome-set lcars-chrome-lb blob-1"></span>
    <span class="lcars-chrome-set lcars-chrome-lb blob-2"></span>
    <span class="lcars-chrome-set lcars-chrome-lb blob-3"></span>
    <a class="lcars-btn btn-4 lcars-chrome-fl lcars-round-right">Newsletter</a>
    <a class="lcars-btn btn-5 lcars-chrome-lb lcars-round-right">Trek News</a>
    <a class="lcars-btn btn-6 lcars-chrome-or lcars-round-right">Trekkige KFZ</a>
    <a class="lcars-btn btn-7 lcars-chrome-or lcars-round">Gästebuch</a>
    <a class="lcars-btn btn-8 lcars-chrome-rb lcars-round">Props</a>
    <a class="lcars-btn btn-9 lcars-chrome-pi lcars-round">Sitemap</a>
    <a class="lcars-btn btn-10 lcars-chrome-bg lcars-round">Downloads</a>
    <a class="lcars-btn btn-11 lcars-chrome-fl lcars-round">Fotoalbum</a>
    <a class="lcars-btn btn-12 lcars-chrome-or lcars-round">Logbücher</a>
    <a class="lcars-btn btn-13 lcars-chrome-rb lcars-round">Facebook</a>

    <div class="block-sn-1 lcars-chrome-rb lcars-chrome-set"></div>
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
      <h1 class="lcars-fg-ho">
        Logbuch
        &nbsp;<small class="lcars-fg-bg">Stand</small>
        &nbsp;<small class="lcars-fg-or">22. Mai 2019</small>
        <a class="lcars-btn lcars-round lcars-chrome-or year">2019</a>
      </h1>

      <p class="text-center">
        Falls du dich wunderst, warum hier nicht soo viel Neues steht...<br>
        Mehr Infos nun Neuigkeiten von GTJLCARS findest du immer auf der<br>
        GTJLCARS-Facebook-Seite
      </p>

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
    @include border-left-radius(0);
  }

  .block-2 h1,
  .block-13 h1,
  .block-12 .lcars-bar-space {
    border-right: 0.3rem solid var(--lcars-screen-bg);
  }

  .home {
    display: grid;
    grid-template-columns:
    [LEFT] 4fr
    [L1A] 0.3rem [L1B]
    1fr [MA] 1.5fr [MB] 2rem [MBP] 1.5fr
    [RXA] 0.3rem [RXB] 0.4fr
    [R1A] 0.3rem [R1B] 1.5fr
    [RTA] 0.3rem [RTB] 0.5fr
    [R2A] 0.3rem [R2B] 2fr
    [R3A] 0.3rem [R3B] 2fr
    [RPA] 0.3rem [RPB] 2rem
    [RIGHT];
    grid-template-rows:
    [TOP] min-content [TP]
    2rem [T1A] 0.3rem [T1B]
    2.5rem [T2A] 0.3rem [T2B]
    2.5rem [T3A] 0.3rem [T3B]
    2.5rem [T4A] 0.3rem [T4B]
    2.5rem [T5A] 0.3rem [T5B]
    1.1rem [TLA] 0.3em [TLB]
    1.1rem [T6A] 0.3rem [T6B]
    2.5rem [T7A] 0.3rem [T7B]
    2.5rem [T8A] 0.3rem [T8B]
    2.5rem [MPA]
    min-content [MA] 0.3rem [MB] min-content
    [MPB] 2rem
    [B1A] 0.3rem [B1B] 5rem
    [B2A] 0.3rem [B2B] min-content
    [BOTTOM];
    min-height: 20rem;
    margin: 1rem auto;
    max-width: 80%;
    --lcars-chrome-inlay-depth: 0.7rem;
  }

  .ufp-logo {
    grid-area: TOP / LEFT / T5B / MA;
    background-image: url("../assets/img/ufp.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--lcars-screen-bg);
    border-bottom-right-radius: 2rem;

    span {
      font-size: 16pt;
    }
  }

  .buttons {
    grid-area: T6A / LEFT / MA / MA;
    background-color: var(--lcars-screen-bg);
    border-top-right-radius: 2rem;
  }

  .nav-secondary {
    grid-area: TP / MB / MPA / RIGHT;
    background-color: var(--lcars-screen-bg);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }

  .buttons, .newslog {
    padding: 1rem;

    --lcars-chrome-btn-padding: 1rem 1.4rem 0 2rem;
    --lcars-btn-min-width: 9rem;
    --lcars-chrome-btn-size: 20pt;

    .lcars-btn {
      min-width: var(--lcars-btn-min-width);
      margin: 0.3rem;
    }
  }

  .newslog {
    grid-area: MPB / MB / BOTTOM / RIGHT;
    background-color: var(--lcars-screen-bg);
    @include border-left-radius(2rem);

    .year {
      float: right;
    }

    h1 {
      border-bottom: none;
    }
  }

  .block-1 {
    display: block;
    grid-area: TOP / MA / T1A / R1A;
    border-top-left-radius: 2rem;
  }

  .btn-0 {
    grid-area: TOP / R1B / TP / RTA;
  }

  .block-2 {
    grid-area: TOP / RTB / TP / RIGHT;
    @include border-left-radius(0);
    padding-left: 0;
  }

  .block-3 {
    grid-area: T1B / MA / T3A / MB;
  }

  .block-4 {
    grid-area: T3B / MA / T4A / MB;
  }

  .block-5 {
    grid-area: T4B / L1B / TLA / MB;
    border-bottom-right-radius: 2rem;
  }

  .block-6 {
    grid-area: T4B / LEFT / TLA / L1A;
  }

  .block-7 {
    grid-area: TLB / LEFT / T7A / L1A;
  }

  .block-8 {
    grid-area: TLB / L1B / T7A / MB;
    border-top-right-radius: 2rem;
  }

  .block-9 {
    grid-area: T7B / MA / T8A / MB;
  }

  .block-10 {
    grid-area: T8B / MA / MA / RXA;
    border-bottom-left-radius: 2rem;
  }

  .block-11 {
    grid-area: MPA / RXB / MA / R2A;
    border-top: var(--lcars-chrome-inlay-depth) solid var(--lcars-screen-bg);
  }

  .block-12 {
    grid-area: MPA / R2B / MA / RIGHT;
    @include bar-elem-right();
  }

  .block-13 {
    grid-area: MB / R2B / MPB / RIGHT;
    @include bar-elem-right();
  }

  .block-14 {
    grid-area: MB / RXB / MPB / R2A;
    border-bottom: var(--lcars-chrome-inlay-depth) solid var(--lcars-screen-bg);
  }

  .block-15 {
    grid-area: MB / MA / B1A / RXA;
    border-top-left-radius: 2rem;
  }

  .block-16 {
    grid-area: B1B / MA / B2A / MB;
  }

  .block-17 {
    grid-area: B2B / MA / BOTTOM / MB;
  }

  .btn-1 {
    grid-area: T1B / MBP / T2A / RXA;
  }

  .btn-2 {
    grid-area: T2B / MBP / T3A / RXA;
  }

  .btn-3 {
    grid-area: T3B / MBP / T4A / RXA;
  }

  .btn-4 {
    grid-area: T1B / R2B / T2A / R3A;
  }

  .btn-5 {
    grid-area: T2B / R2B / T3A / R3A;
  }

  .btn-6 {
    grid-area: T3B / R2B / T4A / R3A;
  }

  .btn-7 {
    grid-area: T1B / R3B / T2A / RPA;
  }

  .btn-8 {
    grid-area: T2B / R3B / T3A / RPA;
  }

  .btn-9 {
    grid-area: T3B / R3B / T4A / RPA;
  }

  .btn-10 {
    grid-area: T4B / R3B / T5A / RPA;
  }

  .btn-11 {
    grid-area: T5B / R3B / T6A / RPA;
  }

  .btn-12 {
    grid-area: T6B / R3B / T7A / RPA;
  }

  .btn-13 {
    grid-area: T7B / R3B / T8A / RPA;
  }

  .blob-1 {
    grid-area: T1B / RTB / T2A / R2A;
  }

  .blob-2 {
    grid-area: T2B / RTB / T3A / R2A;
  }

  .blob-3 {
    grid-area: T3B / RTB / T4A / R2A;
  }

  .head-1, .head-2, .head-3 {
    @extend %lcars-chrome-heading;
    text-align: center;
    border-bottom: 0;
  }

  .head-1 {
    grid-area: T1B / RXA / T2A / R1B;
  }

  .head-2 {
    grid-area: T2B / RXA / T3A / R1B;
  }

  .head-3 {
    grid-area: T3B / RXA / T4A / R1B;
  }

  .block-sn-1 {
    grid-area: T1B / R1B / T4A / RTA;
  }
</style>
