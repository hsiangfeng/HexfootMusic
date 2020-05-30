import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/Index.vue'),
        meta: {
          title: 'HexfootMusic - 六腳大平台',
        },
      },
      {
        path: 'categories/:categoriesid',
        name: 'Categories',
        component: () => import('../views/Categories.vue'),
        meta: {
          title: 'HexfootMusic - 六腳大分類',
        },
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('../views/Search.vue'),
        meta: {
          title: 'HexfootMusic - 六腳強力搜尋器',
        },
      },
      {
        path: 'artists/:artistsid',
        name: 'Artists',
        component: () => import('../views/Artists.vue'),
        meta: {
          title: 'HexfootMusic - 六腳藝人',
        },
      },
    ],
  },
  {
    path: '/game',
    name: '',
    component: () => import('../views/Game/Index.vue'),
    children: [
      {
        path: '',
        name: 'Select',
        component: () => import('../views/Game/GameSelect.vue'),
        meta: {
          title: 'HexfootMusic - 選擇遊戲',
        },
      },
      {
        path: 'Learningmode/:id',
        name: 'Learningmode',
        component: () => import('../views/Game/LearningMode.vue'),
        meta: {
          title: 'HexfootMusic - 練習模式',
        },
      },
      {
        path: 'ordinary/:id',
        name: 'Ordinary',
        component: () => import('../views/Game/Ordinary.vue'),
        meta: {
          title: 'HexfootMusic - 30 秒挑戰模式',
        },
      },
    ],
  },
  {
    path: '/playview',
    name: 'playview',
    component: () => import('../views/PlayVIew.vue'),
    meta: {
      title: 'HexfootMusic - 播放清單',
    },
  },
];

const scrollBehavior = () => ({ x: 0, y: 0 });

const router = new VueRouter({
  routes,
  scrollBehavior,
});

export default router;
