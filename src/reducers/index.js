import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './apiReducer'
import apiMiddleware from '../middliware/apiMiddleware'
import ApiClient from '../middliware/apiClient'

const client = new ApiClient();
export default configureStore({
  reducer: {
    apiReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware(client))
})
