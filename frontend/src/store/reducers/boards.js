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
      const board = state.myBoards.find(board => board.id === payload.boardId)
      board.todo.push(payload.todoItem)
    },
  },
})

const boardsReducer = boardsSlice.reducer
export const { addTodo } = boardsSlice.actions
export default boardsReducer

/*
boardsReducer = {
  myBoards: [
    {
      id: 01234,
      title: 'Board1',
      todo: [
        {
          id: 1111,
          title: 'task1',
          description: 'description'
        }
      ],
      inProgress: [],
      done: [],
    },
    {
      id: 56789
      title: 'Board2',
      todo: [],
      inProgress: [],
      done: [],
    },
  ],
  sharedBoards: [],
}
*/
