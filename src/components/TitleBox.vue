<template>
  <h2>할일 정리 메모장</h2>
</template>

<script>
export default {};
</script>

<style>
h2 {
  position: relative;
  display: block;
  margin: 30px auto;

  width: 60%;
  text-align: center;
  border-radius: 15px;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  padding: 30px 0;
  border-radius: 0;
  background: #faeba2;
  box-shadow: 0 0 0 2px rgb(82, 81, 63) inset;
  border-radius: 0px 0px 8px 8px;
  z-index: 2;
}

h2:before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  height: 20px;
  width: 100%;
  border-bottom: 4px solid rgb(66, 66, 66);
  background-color: rgb(104, 104, 104);
}

h2:after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  height: 4px;
  width: calc(100% - 4px);
  background-color: #d6cabc;
}
</style>
