<template>
  <div class="container">
    <h2>To Do List</h2>
    <form action="" @submit.prevent="onSubmit">
      <!-- prevent를 써야 갱신이 되지않으면서 목록이 추가가됨 -->
      <div class="d-flex">
        <div class="flex-grow-1 mr-2">
          <input
            type="text"
            class="form-control"
            v-model="todo"
            placeholder="Type New Todo"
          />
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </div>
      <div v-show="hasError" style="color: red">내용을 기재해 주세요.</div>
    </form>
    <div v-if="!todos.length">추가된 ToDo 가 없습니다.</div>

    <div v-for="(item, index) in todos" v-bind:key="index" class="card mt-2">
      <div class="card-body p-2 d-flex">
        <div class="form-check flex-grow-1 align-items-center">
          <input
            type="checkbox"
            class="form-check-input"
            v-model="item.complete"
          />
          <label
            class="form-check-label"
            v-bind:class="{ todoStyle: item.complete }"
            >{{ item.subject }}
          </label>
          <!--   v-bind:style="item.complete ? todoStyle : {}" -->
        </div>
        <div>
          <button class="btn btn-danger btn-sm" @click="deleteTodo(index)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const hasError = ref(false);
    const todo = ref("");
    const todos = ref([
      { id: 1, subject: "할일목록 1", complete: false },
      { id: 2, subject: "할일목록 2", complete: false },
      { id: 3, subject: "할일목록 3", complete: false },
    ]);
    // const todoStyle = { textDecoration: "line-through", color: "gray" };
    const onSubmit = () => {
      if (todo.value === "") {
        hasError.value = true;
      } else {
        hasError.value = false;
        todos.value.push({
          id: Date.now(),
          subject: todo.value,
          complete: false,
        });
      }
      todo.value = "";
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };
    return {
      todo,
      todos,
      onSubmit,
      hasError,
      // todoStyle,
      deleteTodo,
    };
  },
};
</script>
<style>
#app {
}
.todoStyle {
  text-decoration: line-through;
  color: gray;
}
</style>
