import { configureStore } from '@reduxjs/toolkit'
import counterslice from './slices/counterslice'

const globalStore = configureStore({
  reducer: {counterslice},
})

export default globalStore