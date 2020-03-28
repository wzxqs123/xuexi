export default {
  state: {
    show: false,
    newcount: 100
  },
  getters: {
    multiplication: function(state) {
      return state.newcount * 10;
    }
  },
  mutations: {
    changeState(state) {
      state.show = state.show ? false : true;
    },
    newNumAdd(state) {
      state.newcount += 100;
    }
  },
  actions: {
    switch_dialog(context) {
      context.commit("changeState");
      context.commit("newNumAdd");
    }
  }
};
