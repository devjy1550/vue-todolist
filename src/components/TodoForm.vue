<template>
  <div>
    <div v-if="loading">Loading ...</div>
    <form v-else @submit.prevent="onSave">
      <div class="row">
        <!-- 제목입력및 수정영역 -->
        <div class="col-6">
          <!-- <div class="form-group">
            <label>Todo Subject</label>
            <input type="text" class="form-control" v-model="todo.subject" />
            <div v-if="subjectError" style="color: red">{{ subjectError }}</div>
          </div> -->
          <InputView
            label="제목"
            :err="subjectError"
            :subject="todo.subject"
            @update-subject="updateSubject"
          />
        </div>
        <!-- 내용 수정 -->
        <div v-if="editing" class="col-6">
          <div class="form-group">
            <label>Status</label>
            <div>
              <button
                class="btn"
                :class="todo.complete ? 'btn-success' : 'btn-danger'"
                @click="toggleTodoState"
                type="button"
              >
                {{ todo.complete ? "완료" : "진행중" }}
              </button>
            </div>
          </div>
        </div>
        <!-- 내용 입력 -->
        <div class="col-12">
          <div class="form-group">
            <label>내용</label>
            <textarea
              v-model="todo.body"
              class="form-control"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>

      <button class="btn btn-primary" type="submit" :disabled="todoState">
        {{ editing ? "Update" : "Add" }}
      </button>
      <button class="btn btn-outline-dark ml-2" @click="moveList">
        {{ editing ? "Add" : "Cancel" }}
      </button>
    </form>

    <!-- <ToastBox v-if="showToast" :message="toastMessage" :color="toastType" /> -->
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "vue";
import axios from "@/api/axios";
import _ from "lodash";
// import ToastBox from "@/components/ToastBox.vue";
import { useToast } from "@/composables/toast.js";
import InputView from "@/components/InputView.vue";

export default {
  components: {
    // ToastBox,
    InputView,
  },
  props: {
    editing: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    // "update-todo",
    // "new-todo",
    // "update-load-fail",
    // "update-todo-fail",
    // "new-todo-fail",
    // "err-subject",
  ],
  setup(
    props
    //  { emit }
  ) {
    const route = useRoute();
    const router = useRouter();
    // 데이터로딩 화면창 상태
    const loading = ref(false);
    const todo = ref({ subject: "", complete: "false", body: "" });
    // 원본 데이터 보관 및 비교(todo 객체) 용
    const originalTodo = ref(null);
    // 전달받은 id 를 이용해서 db 에서 자료를 가져온다.
    const getTodo = async () => {
      loading.value = true;
      try {
        const response = await axios.get(
          // `http://localhost:3000/todos/${route.params.id}`
          `todos/${route.params.id}`
        );
        todo.value = { ...response.data };
        originalTodo.value = { ...response.data };
        loading.value = false;
      } catch (err) {
        // emit("err-load-fail", {});
        triggerToast(
          "서버에러가 발생하였습니다. 잠시 뒤 시도해 주세요.",
          "danger"
        );
      }
    };
    if (props.editing) {
      getTodo();
    }
    const toggleTodoState = () => {
      todo.value.complete = !todo.value.complete;
    };
    const moveList = () => {
      router.push({
        name: "Todos",
      });
    };

    // 제목 미 입력시 경고
    const subjectError = ref("");

    const onSave = async () => {
      try {
        subjectError.value = "";
        if (!todo.value.subject) {
          subjectError.value = "제목을 입력하세요.";
          // emit("error-subject", {});
          triggerToast("제목을 입력하세요.", "danger");
          return;
        }

        let res;
        const data = {
          subject: todo.value.subject,
          complete: todo.value.complete,
          body: todo.value.body,
        };
        if (props.editing) {
          // 수정 axios 실행
          res = await axios.put(
            // `http://localhost:3000/todos/${todo.value.id}`,
            `todos/${todo.value.id}`,
            data
          );
          originalTodo.value = { ...res.data };

          // emit("update-todo", {});

          triggerToast("업데이트가 성공하였습니다.");
        } else {
          // 등록 axios 실행
          // res = await axios.post(`http://localhost:3000/todos`, data);
          res = await axios.post(`todos`, data);
          todo.value.subject = "";
          todo.value.body = "";

          // emit("new-todo", {});
          triggerToast("새글이 등록되었습니다.");

          // 내용이 입력되었으면 목록으로 보냄
          moveList();
        }
      } catch (err) {
        if (props.editing) {
          // emit("update-todo-fail", {});
          triggerToast("수정에 실패했습니다.", "danger");
        } else {
          // emit("new-todo-fail", {});
          triggerToast("등록에 실패했습니다.", "danger");
        }
      }
    };

    const todoState = computed(() => {
      return _.isEqual(todo.value, originalTodo.value);
    });
    // 안내창 관련
    const { showToast, toastMessage, toastType, triggerToast } = useToast();

    const updateSubject = (value) => {
      todo.value.subject = value;
    };

    return {
      todo,
      loading,
      toggleTodoState,
      moveList,
      onSave,
      todoState,
      // toastMessage,
      // showToast,
      // toastType,
      subjectError,
      updateSubject,
    };
  },
};
</script>

<style></style>
