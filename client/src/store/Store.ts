// redux persist
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// ...
import CategoryReducer from './Category/CategorSlice';
import productReducer from './products/productSlice';
import cartReducer from './cart/cartSlice';
import { wishlistReducer } from './wishlist/wishlistSlice';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};
const cartPersistConfig = {
  key: 'cart',
  storage: storage,
  whitelist: ['items'],
};
const wishlistPersistConfig = {
  key: 'wishlist',
  storage: storage,
  whitelist: ['itemsId'],
};

const rootReducer = combineReducers({
  catogery: CategoryReducer,
  products: productReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  // solve non-serializable
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const presistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, presistor };
