import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { combineReducers } from 'redux';
import providerReducer from './reducers/providers'
import accountsIndexReducer from './reducers/accountsindex'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({ provider: providerReducer, accounts: accountsIndexReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}