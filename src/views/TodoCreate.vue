<template>
  <div class="container">
    <h1>Todo Create</h1>
    <!-- <TodoForm
      @new-todo="newTodo"
      @new-todo-fail="newTodoFail"
      @err-subject="errSubject"
    /> -->
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";

export default {
  components: {
    TodoForm,
  },
  // emits: ["new-todo-toast", "new-todo-fail-toast", "err-subject-toast"],
  emits: [],
  // setup(props, { emit }) {
  setup() {
    // const newTodo = () => {
    //   // console.log("새 글 등록");
    //   emit("new-todo-toast", {});
    // };

    // const newTodoFail = () => {
    //   emit("new-todo-fail-toast", {});
    // };
    // const errSubject = () => {
    //   emit("err-subject-toast", {});
    // };

    // return { newTodo, newTodoFail, errSubject };
    return {};
  },
};
</script>

<style></style>
