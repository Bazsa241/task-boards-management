import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const URL = 'http://localhost:5000/api/user'

export const getUser = createAsyncThunk('boards/getUser', async () => {
  return fetch(URL).then(response => response.json())
})


const initialState = {
  myBoards: [],
  sharedBoards: [],
  activeBoardId: null
}

const initialBoard = {
  id: null,
  title: 'Untitled Board',
  todo: [],
  inProgress: [],
  done: [],
}

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {

    addTask: (state, { payload }) => {
      const { boardId, task, category } = payload
      const board = state.myBoards.find(board => board.id === boardId)
      board[category].push(task)
    },

    removeTask: (state, { payload }) => {
      const { boardId, id, category } = payload
      const board = state.myBoards.find(board => board.id === boardId)
      board[category] = board[category].filter(task => task.id !== id)
    },

    modifyTask: (state, { payload }) => {
      const { boardId, category, task } = payload
      const board = state.myBoards.find(board => board.id === boardId)
      const taskIndex = board[category].findIndex(t =>
        t.id === task.id
      )
      board[category][taskIndex] = task
    },

    changeBoard: (state, { payload }) => {
      state.activeBoardId = payload
    },

    addBoard: (state) => {
      const id = Date.now()
      state.myBoards.push({
        ...initialBoard,
        id
      })
      state.activeBoardId = id
    },

    removeBoard: (state, { payload }) => {
      state.myBoards = state.myBoards.filter(board => board.id !== payload)
    },

    modifyBoard: (state, { payload }) => {
      const { id, title } = payload
      const board = state.myBoards.find(board => board.id === id)
      board.title = title
    },
      
    [getUser.pending]: () => {
      console.log('getUser pending')
    },

    [getUser.rejected]: () => {
      console.log('getUser rejected')
    },

    [getUser.fulfilled]: (state, { payload }) => {
      console.log('getUser fulfilled')
      state.myBoards = payload
    },

  }
})

const boardsReducer = boardsSlice.reducer
export default boardsReducer

export const {
  addTask,
  removeTask,
  modifyTask,
  changeBoard,
  addBoard,
  removeBoard,
  modifyBoard,
} = boardsSlice.actions
