<template>
  <div class="app">
    <TodoHeader></TodoHeader>

    <!-- 버튼 클릭시 발생하는 이벤트 이름: addTodo -->
    <!-- 이벤트를 받아서 실행할 App 컴포넌트의 method: addTodo() -->
    <!-- v-bind를 이용하여 하위 컴포넌트로 props를 전달 -->
    <!-- TodoList component에 propsdata속성에 props로 전달 -->
    <transition name="page"
      enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// add components in other location
import TodoHeader from './components/TodoHeader.vue'

export default {
  // enroll local components
  components: {
    TodoHeader
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  .Contact {
    position: fixed;
    width: inherit;
  }
</style>
