
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../state'; 
import { setupListeners } from '@reduxjs/toolkit/query';
import {api} from "state/api";

const Store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer
    
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
});
setupListeners(Store.dispatch);

export default Store;
