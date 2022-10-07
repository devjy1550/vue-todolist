<template>
  <div class="container">
    <h2>Todo 수정</h2>
    <TodoForm :editing="true" />
    <!-- <div id="test">code</div> -->
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";

export default {
  components: { TodoForm },

  emits: [
    // "update-todo-toast",
    // "update-load-fail-toast",
    // "update-todo-fail-toast",
    // "err-subject-toast",
  ],

  // setup(props, { emit }) {
  //   const updateTodo = () => {
  //     // console.log("내용 업데이트");
  //     emit("update-todo-toast", {});
  //   };

  //   const updateLoadFail = () => {
  //     emit("update-load-fail-toast", {});
  //   };

  //   const updateTodoFail = () => {
  //     emit("update-todo-fail-toast", {});
  //   };
  //   const errSubject = () => {
  //     emit("err-subject-toast", {});
  //   };
  //   return { updateTodo, updateLoadFail, updateTodoFail, errSubject };
  // },
};
</script>

<style></style>

// triggerToast( // "서버에러가 발생하였습니다. 잠시 뒤 시도해 주세요.", //
"danger" // );
