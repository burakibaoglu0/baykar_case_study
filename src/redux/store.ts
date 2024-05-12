import { configureStore } from '@reduxjs/toolkit'
import header from './reducers/header'

export const makeStore = () => {
  return configureStore({
    reducer: {
      header
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
