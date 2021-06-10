import { configureStore } from '@reduxjs/toolkit'
import myBoardsReducer from './reducers/boards'

const store = configureStore({
  reducer: {
    myBoardsReducer,
  },
})

export default store
