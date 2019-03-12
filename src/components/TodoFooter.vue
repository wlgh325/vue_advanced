<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAll'
    })
  }
}
</script>

<style>
/* Change the link color on hover */
li a:hover {
background-color: #555;
color: white;
}
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: black;
}
</style>
