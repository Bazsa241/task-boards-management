import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myBoards: [
    {
      id: 2387645,
      title: 'My First Board',
      todo: [],
      inProgress: [],
      done: [],
    },
  ],
  sharedBoards: [],
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const { boardId, todoItem } = payload
      const board = state.myBoards.find(board => board.id === boardId)
      board.todo.push(todoItem)
    },
    removeTask: (state, { payload }) => {
      const { boardId, id, category } = payload
      const board = state.myBoards.find(board => board.id === boardId)
      board[category] = board[category].filter(task => task.id !== id)
    },
  },
})

const boardsReducer = boardsSlice.reducer
export const { addTodo, removeTask } = boardsSlice.actions
export default boardsReducer
