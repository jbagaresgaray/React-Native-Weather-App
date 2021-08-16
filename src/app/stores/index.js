import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  rootReducer,
);

const setupReduxFlipper = (middlewares) => {
  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  return middlewares;
};

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefault) {
    const defaultMiddlewares = getDefault({
      serializableCheck: {
        ignoredActions: [
          'persist/REGISTER',
          'persist/REHYDRATE',
          'persist/PERSIST',
        ],
      },
    });
    return setupReduxFlipper([...defaultMiddlewares, thunk]);
  },
});

const persistor = persistStore(store);
export {store, persistor};
