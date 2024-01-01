/* Core */
import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux'

/* Instruments */
import { reducer } from '@/lib/redux/rootReducer'
import { middleware } from '@/lib/redux/middleware'

export const reduxStore = (preloadedState) => configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware)
  },
  preloadedState
})
export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector
