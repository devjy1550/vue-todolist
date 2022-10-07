export default {
  namespaced: true,
  state: {
    // toastBox 관련
    toasts: [],
    showToast: false,
    // toastMessage: "",
    // toastType: "",
  },
  actions: {
    triggerToast({ commit }, { message, color }) {
      // 메세지및 색상업데이트
      commit("ADD_TOAST", { message, color });

      // // 메세지 업데이트
      // commit("UPDATE_TOAST_MESSAGE", message);
      // // 색상 업데이트
      // commit("UPDATE_TOAST_TYPE", color);
      // 상태 업데이트
      // commit("UPDATE_TOAST_STATE", true);
      // 타이머 업데이트
      setTimeout(() => {
        // commit("UPDATE_TOAST_MESSAGE", "");
        // commit("UPDATE_TOAST_TYPE", "");

        //목록 toast 제일앞쪽 즉, 배열[0] 삭제
        commit("REMOVE_TOAST");
        commit("UPDATE_TOAST_STATE", false);
      }, 3000);
    },
  },
  mutations: {
    // UPDATE_TOAST_MESSAGE(state, payload) {
    //   state.toastMessage = payload;
    // },
    // UPDATE_TOAST_TYPE(state, payload) {
    //   console.log("toastType", payload);
    //   state.toastType = payload;
    // },
    ADD_TOAST(state, payload) {
      state.toast.push(payload);
    },
    REMOVE_TOAST(state) {
      state.toast.shift();
    },
    // UPDATE_TOAST_STATE(state, payload) {
    //   state.showToast = payload;
    // },
  },
};
