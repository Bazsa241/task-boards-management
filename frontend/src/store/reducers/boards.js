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
    {
      id: 1287635,
      title: 'My Second Board',
      todo: [],
      inProgress: [],
      done: [],
    },
  ],
  sharedBoards: [],
  activeBoardId: null
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
    modifyTask: (state, { payload }) => {
      const { boardId, category, modifiedTask } = payload
      const board = state.myBoards.find(board => board.id === boardId)
      const taskIndex = board[category].findIndex(task =>
        task.id === modifiedTask.id
      )
      board[category][taskIndex] = modifiedTask
    },
    changeBoard: (state, { payload }) => {
      state.activeBoardId = payload
    }
  },
})

const boardsReducer = boardsSlice.reducer
export default boardsReducer

export const {
  addTodo,
  removeTask,
  modifyTask,
  changeBoard,
} = boardsSlice.actions
