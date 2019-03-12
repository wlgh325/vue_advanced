const storage = {
  fetch() {
    const arr =  [];
    if ( localStorage.length > 0 ) {
      for (let i=0; i < localStorage.length; i++) {
        if(localStorage.key(i) != "loglevel:webpack-dev-server")
          arr.push( JSON.parse( localStorage.getItem( localStorage.key(i) )))
      }
    }
    return arr;
  }
};

const state = {
  todoItems: storage.fetch(),
  modification: '',
  index: 0,
  nowYear: '',
  nowMonth: '',
  nowDate: '',
  dateString: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
  allLastDate: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  nowLastDate: 0,
  week: 0,
  dateNum: 0,
  nowDay: 0
};

const getters = {
  getTodoItems(state) {
    return state.todoItems
  },
  getNowYear(state) {
    return state.nowYear;
  },
  getNowMonth(state) {
    return state.nowMonth;
  },
  getNowDate(state) {
    return state.nowDate
  },
  getDateString(state) {
    return state.dateString
  },
  getLastDate(state) {
    return state.nowLastDate
  },
  getWeek(state) {
    return state.week
  },
  getDateNum(state) {
    return state.dateNum
  },
  getAllLastDate(state) {
    return state.allLastDate
  }
};

const mutations = {
  addTodo(state, todoItem) {
    const obj = {item: todoItem, isFilled: false, completed: false}
    localStorage.setItem(todoItem, JSON.stringify(obj))
    state.todoItems.push(obj);
  },
  removeTodo(state, payload) {
    localStorage.removeItem(payload.todoItem.item)
    state.todoItems.splice(payload.index, 1)
  },
  clearAll(state) {
    localStorage.clear()
    state.todoItems = []
  },
  importantTodo(state, payload) {
    const temp_key = localStorage.key(payload.index)
    state.todoItems[payload.index].isFilled = !payload.todoItem.isFilled
    console.log(payload.todoItem);
    console.log(payload.index);
    localStorage.removeItem(temp_key)
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
  },
  modifyTodo(state, payload) {
    localStorage.removeItem(payload.todoItem.item)
    state.todoItems[payload.editIndex].item = payload.editItem
    localStorage.setItem(payload.editItem, JSON.stringify(payload.todoItem))
  },
  toggleCompleted(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    localStorage.removeItem(payload.todoItem.item)
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
  },
  setYear(state, year) {
    state.nowYear = year;
  },
  setMonth(state, month) {
    state.nowMonth = month*1;
  },
  setDate(state, date) {
    state.nowDate = date;
  },
  setLastDate(state) {
    state.nowLastDate = state.allLastDate[state.nowMonth-1];
  },
  setWeek(state) {
    state.week = Math.ceil( ( state.nowDay + state.nowLastDate ) / 7 );
  },
  setDateNum(state) {
    state.dateNum = 1 - state.nowDay
  },
  setDay(state, day) {
    state.nowDay = day;
  }
};

export default {
  state,
  getters,
  mutations
}
