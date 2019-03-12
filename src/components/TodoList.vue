<template>
  <section>
    <!-- name은 css class와 관련됨-->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.todoItems" :key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
        v-on:click="toggleCompleted({todoItem, index})" aria-hidden="true"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="importantBtn" type="button" @click="importantTodo({todoItem, index})">
          <i :class="{ 'far fa-star': !todoItem.isFilled, 'fas fa-star': todoItem.isFilled}" aria-hidden="true"></i>
        </span>
        <span class="removeBtn" type="button" @click="removeTodo({todoItem, index})">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
        <span class="modifyBtn" type="button" @click="showEditModal(todoItem, index)">
          <i class="fas fa-pen-square" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>

    <modal v-if="showModal" @close="showModal = false" >
      <h3 slot="header">할 일 수정</h3>
      <h3 slot="body">
        <input type="text" v-model ="editItem" placeholder="수정 할일 입력해주세요"
        v-on:keyup.enter="modifyTodo" v-on:keyup="esc" autofocus>
        <i class="closeModalBtn fas fa-times" aria-hidden="true" @click="showModal = false"></i>
      </h3>
      <span slot="footer">
      </span>
    </modal>
  </section>
</template>

<script>
import Modal from './common/Modal.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  // Vue instance가 생성되자마자 Vue 데이터에 접근
  data() {
    return {
      editItem: '',
      editIndex: '',
      todoItem: [],
      showModal: false
    }
  },
  computed: {
    //...mapGetters(['getTodoItems'])
    ...mapGetters({
      todoItems: 'getTodoItems'
    })
  },
  methods: {
    ...mapMutations(['removeTodo', 'toggleCompleted', 'importantTodo']),
    modifyTodo() {
      const obj = {
        todoItem: this.todoItem,
        editItem: this.editItem,
        editIndex: this.editIndex
      }
      this.showModal = !this.showModal
      this.$store.commit('modifyTodo', obj)
    },
    showEditModal(todoItem, index){
      this.todoItem = todoItem;
      this.editItem = todoItem.item;
      this.editIndex = index;
      this.showModal = true;
    },
    esc() {
      if (event.key == 'Escape') {
        this.showModal = false;
      }
    }
  },
  components:{
    'Modal' : Modal
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s; /* 1초 정도 지속 */
  }
  .list-enter, .list-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
  .importantBtn {
    float: right;
    margin-left: auto;
    font-size: 20px;
    color: rgb(246, 241, 9);
  }
  .modifyBtn {
    margin-left: 1vw;
    font-size: 25px;
  }
  .removeBtn {
    margin-left: 1vw;
    color: #de4343;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
</style>
