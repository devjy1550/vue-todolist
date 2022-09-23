<template>
  <div class="container">
    <h2>To Do List</h2>
    <!-- <ToDoForm 이벤트발생 = "App에서 처리/> -->
    <!-- ㅎ할일검색폼 -->
    <input
      type="text"
      class="form-control"
      v-model="searchText"
      placeholder="Search"
    />
    <!-- 할일입력창 -->
    <ToDoForm @add-todo="addToDo" />
    <!-- 목록없음안내 -->
    <div v-if="!todos.length">추가된 ToDo 가 없습니다.</div>
    <ToDoList
      :todos="filterTodos"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
  </div>
</template>
<script>
import { ref, computed } from "vue";
import ToDoForm from "./components/ToDoSimpleForm.vue";
import ToDoList from "./components/ToDoList.vue";

export default {
  components: {
    ToDoForm,
    ToDoList,
  },
  setup() {
    // const hasError = ref(false);      TDSF.vue로 옮겨줌 ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ
    // const todo = ref("");     TDSF.vue로 옮겨줌  ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ
    const todos = ref([
      { id: 1, subject: "할일목록 1", complete: false },
      { id: 2, subject: "할일목록 2", complete: false },
      { id: 3, subject: "할일목록 3", complete: false },
    ]);

    const searchText = ref("");
    const filterTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter((todo) => {
          return todo.subject.includes(searchText.value);
        });
      }
      return todos.value;
    });
    // const todoStyle = { textDecoration: "line-through", color: "gray" };
    // const onSubmit = () => {
    //   if (todo.value === "") {
    //     hasError.value = true;
    //   } else {
    //     hasError.value = false;
    //     todos.value.push({
    //       id: Date.now(),
    //       subject: todo.value,
    //       complete: false,
    //     });
    //   }
    //   todo.value = "";
    // };      TDSF.vue로 옮겨줌  ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ
    const addToDo = (todo) => {
      todos.value.push(todo);
    };
    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };
    const toggleTodo = (index) => {
      // 변경되기전
      todos.value[index].complete = !todos.value(index).complete;
      // 변경된후
    };

    return {
      // todo,
      todos,
      addToDo,
      // onSubmit,
      // hasError,
      // todoStyle,
      deleteTodo,
      toggleTodo,
      searchText,
      filterTodos,
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
