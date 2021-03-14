import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import qs from 'querystring';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: null,
    kkboxToken: '',
    AJAXConfig: null,
    readyMusic: {},
    metaTitle: '',
  },
  mutations: {
    KKBOXTOKEN(state, payload) {
      state.kkboxToken = payload;
    },
    AJAXCONFIG(state, payload) {
      state.AJAXConfig = payload;
    },
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    READYMUSIC(state, payload) {
      state.readyMusic = payload;
    },
    SETTITLE(state, payload) {
      state.metaTitle = payload;
    },
  },
  actions: {
    async getToken(context) {
      // 註解為另一種 CORS 解法
      // const cors = 'https://cors-anywhere.herokuapp.com/';
      // const kkboxOauth = '/token';
      let oauthAPI = `https://cors-anywhere.herokuapp.com/${process.env.VUE_APP_KKBOXAUTH}`;

      if (process.env.NODE_ENV === 'development') {
        oauthAPI = '/token';
      }
      const config = {
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      const oauth = {
        grant_type: process.env.VUE_APP_GRANTTYPE,
        client_id: process.env.VUE_APP_CLINETID,
        client_secret: process.env.VUE_APP_CLIENTSECRET,
      };
      context.commit('LOADING', true);
      await Axios.post(oauthAPI, qs.stringify(oauth), config)
        .then((res) => {
          context.commit('KKBOXTOKEN', res.data);

          const AJAXConfig = {
            headers: {
              Authorization: `${res.data.token_type} ${res.data.access_token}`,
            },
          };

          context.commit('AJAXCONFIG', AJAXConfig);
          context.commit('LOADING', false);
        });
    },
    getMetaTitle(context, title) {
      context.commit('SETTITLE', title);
    },
  },
  getters: {
    kkboxToken(state) {
      return state.kkboxToken;
    },
    isLoading(state) {
      return state.isLoading;
    },
    AJAXConfig(state) {
      return state.AJAXConfig;
    },
    readyMusic(state) {
      return state.readyMusic;
    },
    metaTitle(state) {
      return state.metaTitle;
    },
  },
  modules: {
  },
});
