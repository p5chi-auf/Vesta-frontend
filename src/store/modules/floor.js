//TODO import  api function getFloorObject
import { getFloorObjects } from "@/api/floor";

export default {
  namespaced: true,
  state: {
    objects: []
  },
  actions: {
    async fetchFloorObjects({ commit }, floorId) {
      const { data } = await getFloorObjects(floorId);
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
