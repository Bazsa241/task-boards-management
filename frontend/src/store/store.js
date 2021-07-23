import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import boardsReducer from './reducers/boards'

const store = configureStore({
  reducer: {
    boardsReducer,
  },
  middleware: [...getDefaultMiddleware()]
})

export default store
