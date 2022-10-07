import {
  // onUnmounted,
  // ref,
  computed,
} from "vue";
import { useStore } from "vuex";
export const useToast = () => {
  const store = useStore();

  // 안내상자 보여지는 목록 관리
  const toasts = computed(() => store.state.toast.toasts);

  // const showToast = ref(false);
  // const showToast = computed(() => store.state.toast.showToast);
  // 안내상자에 보여질 내용
  // const toastMessage = ref("");
  // const toastMessage = computed(() => store.state.toast.toastMessage);

  // 안내상자 타입종류
  // const toastType = ref("");
  // const toastType = computed(() => store.state.toast.toastMessage);

  // 타이머식별자
  // const toastTimer = ref(null);
  // const toastTimer = computed(() => store.state.toast.toastTimer);

  // 안내상자 실행 메소드
  // const triggerToast = (message, color = "success") => {
  const triggerToast = (message, color) => {
    // toastMessage.value = message;
    // toastType.value = color;
    // showToast.value = true;
    // toastTimer.value = setTimeout(() => {
    //   toastMessage.value = "";
    //   toastType.value = "";
    //   showToast.value = false;
    // }, 3000);
    store.dispatch("toast/triggerToast", message, color);
  };
  //  컴포넌트 이동으로 인하여 화면에서 제거완료시 실행
  // onUnmounted(() => {
  //   clearTimeout(toastTimer.value);
  // console.log("onUnmounted");
  // });
  return {
    toasts,
    // showToast,
    // toastMessage,
    // toastType,
    triggerToast,
  };
};
