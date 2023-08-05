import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { useApi } from '@services/api/api';
import userSlice from '@store/features/userSlice';

const getToken = () => {
  return localStorage.getItem('idToken');
};

export const store = configureStore({
  reducer: {
    user: userSlice,
    [useApi.reducerPath]: useApi.reducer // Add the useApi reducer to the store
  },
  preloadedState: {
    user: { firstName: '', lastName: '', role: '', authToken: getToken() || '' }
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(useApi.middleware) // Add the useApi middleware
});

// Call setupListeners to set up background polling and prefetching
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { user: UserState, ...otherReducers }
export type AppDispatch = typeof store.dispatch;
