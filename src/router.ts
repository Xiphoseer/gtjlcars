import Vue from 'vue';
import Router from 'vue-router';
import Entry from './views/Entry.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entry',
      component: Entry,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/lcars',
      component: () => import(/* webpackChunkName: "lcars" */ './views/LCARS.vue'),
      children: [
        {
          path: '',
          name: 'lcars-what',
          component: () => import(/* webpackChunkName: "lcars-what" */ './views/lcars/What.vue'),
        },
        {
          path: 'isolinear-storage',
          name: 'lcars-isolinear-storage',
          component: () => import(/* webpackChunkName: "lcars-isolinear-storage" */ './views/lcars/IsolinearStorage.vue'),
        },
        {
          path: 'padds',
          name: 'lcars-padds',
          component: () => import(/* webpackChunkName: "lcars-padds" */ './views/lcars/Padds.vue'),
        },
        {
          path: 'screenshots',
          name: 'lcars-screenshots',
          component: () => import(/* webpackChunkName: "lcars-screenshots" */ './views/lcars/Screenshots.vue'),
        },
        {
          path: 'stylepack',
          name: 'lcars-stylepack',
          component: () => import(/* webpackChunkName: "lcars-stylepack" */ './views/lcars/Stylepack.vue'),
        },
        {
          path: 'screensaver',
          name: 'lcars-screensaver',
          component: () => import(/* webpackChunkName: "lcars-screensaver" */ './views/lcars/Screensaver.vue'),
        },
        {
          path: 'construction',
          name: 'lcars-construction',
          component: () => import(/* webpackChunkName: "lcars-construction" */ './views/lcars/Construction.vue'),
        },
        {
          path: 'font',
          name: 'lcars-font',
          component: () => import(/* webpackChunkName: "lcars-font" */ './views/lcars/Font.vue'),
        },
        {
          path: 'colorindex',
          name: 'lcars-colorindex',
          component: () => import(/* webpackChunkName: "lcars-colorindex" */ './views/lcars/Colorindex.vue'),
        },
        {
          path: 'wallpaper',
          name: 'lcars-wallpaper',
          component: () => import(/* webpackChunkName: "lcars-wallpaper" */ './views/lcars/Wallpaper.vue'),
        },
        {
          path: 'michael-okuda',
          name: 'lcars-michael-okuda',
          component: () => import(/* webpackChunkName: "lcars-michael-okuda" */ './views/lcars/MichaelOkuda.vue'),
        },
        {
          path: 'books-cds',
          name: 'lcars-books-cds',
          component: () => import(/* webpackChunkName: "lcars-books-cds" */ './views/lcars/BooksAndCDs.vue'),
        },
        {
          path: 'animations',
          name: 'lcars-animations',
          component: () => import(/* webpackChunkName: "lcars-animations" */ './views/lcars/Animations.vue'),
        },
        {
          path: 'dietrich-kerner',
          name: 'lcars-dietrich-kerner',
          component: () => import(/* webpackChunkName: "lcars-dietrich-kerner" */ './views/lcars/DietrichKerner.vue'),
        }
        ,
        {
          path: 'wearables',
          name: 'lcars-wearables',
          component: () => import(/* webpackChunkName: "lcars-wearables" */ './views/lcars/Wearables.vue'),
        },
        {
          path: 'museum',
          name: 'lcars-museum',
          component: () => import(/* webpackChunkName: "lcars-museum" */ './views/lcars/Museum.vue'),
        }
      ]
    },
  ],
});
