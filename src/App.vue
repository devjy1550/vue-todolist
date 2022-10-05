<template>
  <Navbar />

  <RouterView
    @update-todo-toast="updateTodoToast"
    @new-todo-toast="newTodoToast"
    @update-load-fail-toast="UpdateLoadFailToast"
    @update-todo-fail-toast="UpdateTodoFailToast"
    @err-subject-toast="errSubjectToast"
    @new-todo-fail-toast="newTodoFailToast"
    @list-load-fail-toast="listLoadFailToast"
    @delete-todo-toast="deleteTodoToast"
    @delete-todo-fail-toast="deleteTodoFailToast"
  />
  <Transition name="fade">
    <ToastBox v-if="showToast" :message="toastMessage" :color="toastType" />
  </Transition>
</template>
<script>
import ToastBox from "@/components/ToastBox.vue";
import { useToast } from "@/composables/toast";
import Navbar from "@/components/NavBar.vue";

export default {
  components: { ToastBox, Navbar },
  setup() {
    // 안내창 관련
    const { showToast, toastMessage, toastType, triggerToast } = useToast();

    const updateTodoToast = () => {
      // console.log("업데이트하였습니다.");

      triggerToast("업데이트가 성공하였습니다.");
    };

    const newTodoToast = () => {
      triggerToast("새 글이 등록되었습니다.");
    };

    const UpdateLoadFailToast = () => {
      triggerToast(
        "서버에러가 발생하였습니다. 잠시 뒤 시도해 주세요.",
        "danger"
      );
    };

    const UpdateTodoFailToast = () => {
      triggerToast("업데이트가 실패하였습니다.", "danger");
    };
    const errSubjectToast = () => {
      triggerToast("제목을 입력하시오.", "danger");
    };

    const newTodoFailToast = () => {
      triggerToast("새글 등록을 실패하였습니다.", "danger");
    };

    const listLoadFailToast = () => {
      triggerToast("목록 호출을 실패하였습니다.", "danger");
    };
    const deleteTodoToast = () => {
      triggerToast("삭제하였습니다.");
    };
    const deleteTodoFailToast = () => {
      triggerToast("삭제하기를 실패하였습니다.", "danger");
    };

    return {
      updateTodoToast,
      newTodoToast,
      UpdateLoadFailToast,
      UpdateTodoFailToast,
      errSubjectToast,
      newTodoFailToast,
      listLoadFailToast,
      deleteTodoToast,
      deleteTodoFailToast,

      showToast,
      toastMessage,
      toastType,
      triggerToast,
    };
  },
};
</script>
<style scoped>
#app {
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
