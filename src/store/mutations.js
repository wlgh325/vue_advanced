const addTodo = (state, todoItem) => {
  const obj = {item: todoItem, isFilled: false, completed: false}
  localStorage.setItem(todoItem, JSON.stringify(obj))
  state.todoItems.push(obj);
}

const removeTodo = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item)
  state.todoItems.splice(payload.index, 1)
}

const clearAll = (state) => {
  localStorage.clear()
  state.todoItems = []
}

const importantTodo = (state, payload) => {
  const temp_key = localStorage.key(payload.index)
  state.todoItems[payload.index].isFilled = !payload.todoItem.isFilled
  console.log(payload.todoItem);
  console.log(payload.index);
  localStorage.removeItem(temp_key)
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}

const modifyTodo = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item)
  state.todoItems[payload.editIndex].item = payload.editItem
  localStorage.setItem(payload.editItem, JSON.stringify(payload.todoItem))
}

const toggleCompleted = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
  localStorage.removeItem(payload.todoItem.item)
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}

export { addTodo, removeTodo, clearAll, importantTodo, modifyTodo, toggleCompleted }
