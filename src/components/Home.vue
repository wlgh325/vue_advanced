<template lang="html">
  <div class="home">
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// add components in other location
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
import TodoInput from './TodoInput.vue'

export default {
  name: 'Home',
  // enroll local components
  components: {
    TodoList,
    TodoFooter,
    TodoInput
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #FFFFFF;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
