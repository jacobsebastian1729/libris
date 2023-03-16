import { configureStore } from "@reduxjs/toolkit";

import { bookReducer } from "./slices/book";
import userReducer from './slices/user'
import bookShelfListReducer from "./slices/bookShelf";
import commentsReducer from "./slices/comment"

const store = configureStore({
  reducer: {
    bookItem: bookReducer,
    user: userReducer,
    bookShelf: bookShelfListReducer,
    commentList: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
