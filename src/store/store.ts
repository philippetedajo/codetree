import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./features/editorSlice";
import consoleReducer from "./features/consoleSlice";

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    console: consoleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
