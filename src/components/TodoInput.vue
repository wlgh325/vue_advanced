<template>
  <div>
    <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" placeholder="Type what you have to do"
      v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
    </div>

    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <h3 slot="body"></h3>
      <span slot="footer" >
          할 일을 입력하세요
          <i class="closeModalBtn fas fa-times" aria-hidden="true" @click="showModal = false"></i>
      </span>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
import { mapMutations } from 'vuex'

export default {
  data(){
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem != ''){
        const value = this.newTodoItem && this.newTodoItem.trim();
        // addTodo event 발생, value값 전달

        this.$store.commit('addTodo', value);
        this.clearInput();
      }
      else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    margin-top: 0;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
