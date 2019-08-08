//TODO import  api function getFloorObject
import { getFloorObjects } from "@/api/floor";

export default {
  namespaced: true,
  state: {
    objects: []
  },
  actions: {
    async fetchFloorObjects({ commit }) {
      const { data } = await getFloorObjects(1);
      commit("updateFloorObjects", data);
    }
  },
  getters: {
    getFloorObjects: state => state.objects
  },
  mutations: {
    updateFloorObjects(state, payload) {
      state.objects = payload;
    }
  }
};
