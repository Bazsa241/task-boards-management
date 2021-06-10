import { createSlice } from '@reduxjs/toolkit'

const myBoardsInit = [
  {
    id: 11111,
    title: 'My First Board',
    todo: [],
    inProgress: [],
    done: [],
  },
]

const myBoardsSlice = createSlice({
  name: 'myBoards',
  initialState: myBoardsInit,
  reducers: {
    addTodo: (state, payload) => {
      const board = state.find(board => board.id === payload.id)
      board.todo.push(payload.todoItem)
    } 
  },
})


const myBoardsReducer = myBoardsSlice.reducer
export const { addTodo } = myBoardsSlice.actions
export default myBoardsReducer

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
