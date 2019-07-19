import { login, getCurrentUserInfo } from "@/api/user";
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
        const userInfo = await getCurrentUserInfo();
        commit("mutateUserInfo", userInfo.data);

        router.push({ name: "dashboard" });
      } catch (error) {
        throw error;
      }
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
