<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" :to="{ name: 'Home' }"
        >My ToDo</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              class="nav-link active"
              aria-current="page"
              :to="{ name: 'Home' }"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'Todos' }"
              >Todos</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'TodoCreate' }"
              >Create</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'Profile' }"
              >Profile</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'About' }"
              >About</RouterLink
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/devjy1550/vue-todolist"
              target="_blank"
              >Github</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
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

export default {
  components: { ToastBox },
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
