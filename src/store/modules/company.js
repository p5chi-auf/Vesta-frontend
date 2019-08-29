//TODO import  api function getFloorObject
import { GetCompany } from "@/api/company";

export default {
  namespaced: true,
  state: {
    list: []
  },
  actions: {
    async fetchCompanies({ commit }) {
      const { data } = await GetCompany();
      commit("updateCompanyList", data);
      return data;
    }
  },
  getters: {
    getCompanyList: state => state.list
  },
  mutations: {
    updateCompanyList(state, payload) {
      state.list = payload;
    }
  }
};
