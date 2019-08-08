import { getUserList } from "@/api/user";
const state = () => ({
  list: []
});
const actions = {
  fetchUsers: async ({ commit }) => {
    try {
      const { data } = await getUserList();
      commit("setUserList", data);
    } catch (error) {
      throw error;
    }
  }
};
const mutations = {
  setUserList: (state, users) => {
    state.list = users;
  }
};
const getters = {
  getUserList: state => state.list
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
