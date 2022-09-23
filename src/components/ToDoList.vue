<template>
  <div>
    <div v-for="(item, index) in todos" v-bind:key="index" class="card mt-2">
      <div class="card-body p-2 d-flex">
        <div class="form-check flex-grow-1 align-items-center">
          <input
            type="checkbox"
            class="form-check-input"
            :value="item.complete"
            @change="toggleTodo(index)"
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
export default {
  props: ["todos"],
  setup(props, context) {
    const deleteTodo = (index) => {
      context.emit("delete-todo", index);
    };

    const toggleTodo = (index) => {
      context.emit("toggle-todo", index);
    };
    return { deleteTodo, toggleTodo };
  },
};
</script>

<style></style>
