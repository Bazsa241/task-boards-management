import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myBoards: [
    {
      id: 2387645,
      title: 'My First Board',
      todo: [
        {
          id: 7812635,
          title: "Task1",
          description: "Lorem ipsum dolor sit amet consectetur"
        },
      ],
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
  activeBoardId: 2387645
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

  },
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
} = boardsSlice.actions
