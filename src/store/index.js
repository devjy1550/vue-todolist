// import modules from "./modules/index";

// import { createStore } from "vuex";
// export default createStore({
//   modules: {},
// });

// export default createStore({
// state: {
//   // toastBox 관련
//   showToast: false,
//   toastMessage: "",
//   toastType: "",
//   // triggerToast: null,
// },
// getters: {},
// actions: {
//   triggerToast({ commit }, message = "", color = "success") {
//     // 메세지업데이트
//     commit("UPDATE_TOAST_MESSAGE", message);
//     // 색상업데이트
//     commit("UPDATE_TOAST_TYPE", color);
//     // 상태업데이트
//     commit("UPDATE_TOAST_STATE", true);
//     // 타이머업데이트
//     const toastTimer = setTimeout(() => {
//       commit("UPDATE_TOAST_MESSAGE", "");
//       commit("UPDATE_TOAST_TYPE", "");
//       commit("UPDATE_TOAST_STATE", false);
//     }, 3000);
//   },
// },
// modules: {},

// mutations: {
//   UPDATE_TOAST_MESSAGE(state, payload) {
//     state.message = payload;
//   },
//   UPDATE_TOAST_TYPE(state, payload) {
//     state.toastType = payload;
//   },
//   UPDATE_TOAST_STATE(state, payload) {
//     state.showToast = payload;
//   },
// },
// modules,
// });
import { createStore } from "vuex";
import modules from "./modules/index";
export default createStore({
  modules,
});
