<template>
  <div class="alert toast-box" :class="`alert=${color}`" role="alert">
    <!-- Success -->
    {{ message }}
  </div>
</template>

<script>
export default {
  // props: ["message"],
  props: {
    message: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "success",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style>
.toast-box {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
