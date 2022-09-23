<template>
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
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, context) {
    // 빈내용 입력 방지 hasError", hasError)
    const hasError = ref(false);

    // 새로운 할일 데이터 todo", todo)
    const todo = ref("");

    //todo등록
    const onSubmit = () => {
      if (todo.value === "") {
        hasError.value = true;
      } else {
        hasError.value = false;
        // todos.value.push({
        //   id: Date.now(),
        //   subject: todo.value,
        //   complete: false,
        // });
        context.emit("add-todo", {
          id: Date.now(),
          subject: todo.value,
          complete: false,
        });
      }
      todo.value = "";
    };
    return {
      onSubmit,
      todo,
      hasError,
    };
  },
};
</script>

<style></style>
