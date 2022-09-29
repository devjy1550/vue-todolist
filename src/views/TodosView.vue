<template>
  <div class="container">
    <h2>Todo View</h2>
    <div v-if="loading">Lading ...</div>
    <form v-else @submit.prevent="onSave">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label>Todo Subject</label>
            <input type="text" class="form-control" v-model="todo.subject" />
          </div>
        </div>
        <div class="col-6">
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
      </div>

      <button class="btn btn-primary" type="submit" :disabled="todoState">
        Save
      </button>
      <button class="btn btn-outline-dark ml-2" @click="moveList">
        Cnacel
      </button>
    </form>
    <ToastBox v-if="showToast" :message="toastMessage" :color="toastType" />

    <!-- <div id="test">code</div> -->
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import {
  computed,
  // onBeforeMount,
  // onBeforeUnmount,
  // onBeforeUpdate,
  // onMounted,
  // onUnmounted,
  // onUpdated,
  ref,
} from "vue";
import axios from "axios";
import _ from "lodash";
import ToastBox from "@/components/ToastBox.vue";
import { useToast } from "@/composibles/toast";
export default {
  components: {
    ToastBox,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    // 생명 주기 코드(LifeCycle Hooks)
    // 화면에 보여지기전(등록) 단계
    // : 화면을 보여주기 전에 데이터를 준비하는 Hook
    // onBeforeMount(() => {
    //   console.log("onBeforeMount");
    // });
    // // 화면에 보여지(등록)는 단계
    // onMounted(() => {
    //   console.log("onMounted");
    // });
    // // 화면이 갱신이 되기 전 단계
    // onBeforeUpdate(() => {
    //   console.log("onBeforeUpdate");
    // });
    // // 화면이 갱신이 되고 난 후 단계
    // onUpdated(() => {
    //   console.log("onUpdated");
    // });
    // 컴포넌트가 화면에서 제거 되기 전 준비 단계
    // : 메모리를 정리하는 곳
    // onBeforeUnmount(() => {
    //   console.log("onBeforeUnmount");
    // });
    // 컴포넌트가 완전히 제거되었을 때
    // 컴포넌트가 완전히 제거되었을 때
    // onUnmounted(() => {
    //   clearTimeout(toastTimer.value);
    // console.log("onUnmounted");
    // });

    // 데이터로딩 화면창 상태
    const loading = ref(true);
    const todo = ref(null);
    // 원본 데이터 보관 및 비교(todo 객체) 용
    const originalTodo = ref(null);
    // 전달받은 id 를 이용해서 db 에서 자료를 가져온다.
    const getTodo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todos/${route.params.id}`
        );
        todo.value = { ...response.data };
        originalTodo.value = { ...response.data };
        loading.value = false;
      } catch (err) {
        triggerToast(
          "서버에러가 발생하였습니다. 잠시 뒤 시도해 주세요.",
          "danger"
        );
      }
    };
    getTodo();

    const toggleTodoState = () => {
      todo.value.complete = !todo.value.complete;
    };
    const moveList = () => {
      router.push({
        name: "Todos",
      });
    };

    const onSave = async () => {
      try {
        const res = await axios.put(
          `http://localhost:3000/todos/${todo.value.id}`,
          {
            subject: todo.value.subject,
            complete: todo.value.complete,
          }
        );
        originalTodo.value = { ...res.data };
        triggerToast("업데이트가 성공하였습니다.");
      } catch (err) {
        triggerToast(
          "서버 에러가 발생하였습니다. 다시 저장해 주세요.",
          "danger"
        );
      }
    };

    const todoState = computed(() => {
      return _.isEqual(todo.value, originalTodo.value);
    });

    // 안내창 관련
    const { showToast, toastMessage, toastType, triggerToast } = useToast();
    // const toastMessage = ref("");
    // const toastType = ref("");
    // const showToast = ref(false);
    // const toastTimer = ref(null);
    // const triggerToast = (message, color = "success") => {
    //   toastMessage.value = message;
    //   toastType.value = color;
    //   showToast.value = true;
    //   toastTimer.value = setTimeout(() => {
    //     toastMessage.value = "";
    //     toastType.value = "";
    //     showToast.value = false;
    //     console.log("안내창이 제거되었어요.");
    //   }, 10000);
    // };

    return {
      todo,
      loading,
      toggleTodoState,
      moveList,
      onSave,
      todoState,
      toastMessage,
      showToast,
      toastType,
    };
  },
};
</script>

<style></style>
