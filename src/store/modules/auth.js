import { login, getCurrentUserInfo, register } from "@/api/user";
import router from "@/router";
export default {
  namespaced: true,
  state: {
    accessToken: false,
    userInfo: {},
    refreshToken: false
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await login(username, password);
        commit("mutateTokens", response.data);
        router.push({ name: "dashboard" });
      } catch (error) {
        throw error;
      }
    },
    async register({ dispatch }, data) {
      try {
        await register(data);
        await dispatch("login", {
          username: data.username,
          password: data.password
        });
        router.push({ name: "dashboard" });
      } catch (error) {
        throw error;
      }
    },
    async getCurrentUserInfo({ commit }) {
      const userInfo = await getCurrentUserInfo();
      commit("mutateUserInfo", userInfo.data);
    }
  },
  mutations: {
    mutateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    mutateTokens(state, tokens) {
      state.accessToken = tokens.accessToken;
      state.refreshToken = tokens.refreshToken;
    }
  },
  getters: {
    getAccessToken: state => state.accessToken,
    getUserInfo: state => state.userInfo
  }
};
