import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {userReducer} from "./reducers/userReducer";
import {HYDRATE, createWrapper} from 'next-redux-wrapper';
import {postsReducer} from "./reducers/postsReducer";

const combinedReducer = combineReducers({
  user: userReducer,
  posts: postsReducer
});

const rootReducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducer(state, action);
  }
};

export const createStore = () => configureStore({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  reducer: rootReducer,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  middleware: getDefaultMiddleware => getDefaultMiddleware({immutableCheck: {warnAfter: 200}}).concat(thunk),
});

export const createStoreForTesting = (preloadedState?: RootState) => {
  return configureStore({reducer: combinedReducer, preloadedState});
};

export const wrapper = createWrapper(createStore, {debug: process.env.NODE_ENV === 'development',});

const store = createStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
