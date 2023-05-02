import { configureStore } from '@reduxjs/toolkit'

import carrinhoRedutor from './carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoRedutor
  }
})

export type RootReducer = ReturnType<typeof store.getState>
