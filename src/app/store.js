import { configureStore,  getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE

} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import authReducer from '../features/auth/authSlice';
import profileReducer from "../features/user-profile/profileSlice";
import checkoutMerchantReducer from "../features/checkout/checkoutSlice";
import transactionReducer from "../features/transaction/transactionSlice";
import payIn3 from "../features/pay-in-3/Pay-In-3-Slice";
import subscriptions from "../features/subscriptions/SubscriptionsSlice";
import shop from "../features/shop/shopSlice";
import cart from "../features/cart/cartSlice"

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}


const combinedReducer = combineReducers({
  auth: authReducer,
  users: profileReducer,
  checkout:checkoutMerchantReducer,
  transaction:transactionReducer,
  payIn3:payIn3,
  subscriptions:subscriptions,
  shop:shop,
  cart:cart
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout/fulfilled'){
    storage.removeItem('persist:root')
    return combinedReducer(undefined, action);
  }
  return combinedReducer(state, action);
};


const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  })
});

export const persistedStore = persistStore(store);
