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
      },
      {
        path: 'categories/:categoriesid',
        name: 'Categories',
        component: () => import('../views/Categories.vue'),
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('../views/Search.vue'),
      },
      {
        path: 'artists/:artistsid',
        name: 'Artists',
        component: () => import('../views/Artists.vue'),
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
      },
      {
        path: 'Learningmode/:id',
        name: 'Learningmode',
        component: () => import('../views/Game/LearningMode.vue'),
      },
      {
        path: 'ordinary/:id',
        name: 'Ordinary',
        component: () => import('../views/Game/Ordinary.vue'),
      },
    ],
  },
  {
    path: '/playview',
    name: 'playview',
    component: () => import('../views/PlayVIew.vue'),
  },
];

const scrollBehavior = () => ({ x: 0, y: 0 });

const router = new VueRouter({
  routes,
  scrollBehavior,
});

export default router;
