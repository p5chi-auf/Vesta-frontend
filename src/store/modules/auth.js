import { login } from "@/api/user";
import router from "@/router";
export default {
  namespaced: true,
  state: {
    accessToken: false,
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
    }
  },
  mutations: {
    mutateTokens(state, tokens) {
      state.accessToken = tokens.accessToken;
      state.refreshToken = tokens.refreshToken;
    }
  },
  getters: {
    getAccessToken: state => state.accessToken
  }
};
