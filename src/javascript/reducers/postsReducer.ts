import {createSlice} from "@reduxjs/toolkit";
import {
  createCategory,
  createPost,
  deletePost,
  getAllCategories,
  getAllPosts,
  getCategoryById,
  getPostById
} from "../thunks/postThunks";

export type IPostsState = {
  localeFilter: string,
  posts: Array<IPost>,
  currentPost: IPost | null,
  currentCategory: ICategory | null,
  categories: Array<ICategory>,
  creatingPost: boolean,
  creatingPostError: string,
  gettingPosts: boolean,
  gettingPostsError: string,
  gettingCategories: boolean,
  gettingCategoriesError: string,
  gettingPostById: boolean,
  gettingPostByIdError: string,
  deletingPost: boolean,
  deletingPostError: string

}
const initialState: IPostsState = {
  localeFilter: 'all',
  posts: [],
  currentPost: null,
  categories: [],
  currentCategory: null,
  creatingPost: false,
  creatingPostError: '',
  gettingPosts: false,
  gettingPostsError: '',
  gettingCategories: false,
  gettingCategoriesError: '',
  gettingPostById: false,
  gettingPostByIdError: '',
  deletingPost: false,
  deletingPostError: ''
} as IPostsState;

const {actions, reducer: postsReducer} = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changeLocaleFilter: (state, {payload}) => {
      state.localeFilter = payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(createPost.pending, (state) => {
      state.creatingPost = true;
    });
    builder.addCase(createPost.fulfilled, (state, {payload}) => {
      state.creatingPost = false;
      state.posts.push(payload);
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.creatingPost = false;
      if (action.payload) {
        state.creatingPostError = action.payload.message;
      } else {
        state.creatingPostError = action.error as string;
      }
    });
    builder.addCase(getAllPosts.pending, (state) => {
      state.gettingPosts = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, {payload}) => {
      state.gettingPosts = false;
      state.posts = payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.gettingPosts = false;
      if (action.payload) {
        state.gettingPostsError = action.payload.message;
      } else {
        state.gettingPostsError = action.error as string;
      }
    });
    builder.addCase(getAllCategories.pending, (state) => {
      state.gettingCategories = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, {payload}) => {
      state.gettingCategories = false;
      state.categories = payload;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.gettingCategories = false;
      if (action.payload) {
        state.gettingCategoriesError = action.payload.message;
      } else {
        state.gettingCategoriesError = action.error as string;
      }
    });
    builder.addCase(getPostById.pending, (state) => {
      state.gettingPostById = true;
    });
    builder.addCase(getPostById.fulfilled, (state, {payload}) => {
      state.gettingPostById = false;
      state.currentPost = payload;
    });
    builder.addCase(getPostById.rejected, (state, action) => {
      state.gettingPostById = false;
      if (action.payload) {
        state.gettingPostByIdError = action.payload.message;
      } else {
        state.gettingPostByIdError = action.error as string;
      }
    });
    builder.addCase(deletePost.pending, (state) => {
      state.deletingPost = true;
    });
    builder.addCase(deletePost.fulfilled, (state, {payload}) => {
      state.deletingPost = false;
      state.posts = state.posts.filter(post => post.id !== payload.id);
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.deletingPost = false;
      if (action.payload) {
        state.deletingPostError = action.payload.message;
      } else {
        state.deletingPostError = action.error as string;
      }
    });
    builder.addCase(createCategory.pending, (state) => {
      state.creatingPost = true;
    });
    builder.addCase(createCategory.fulfilled, (state, {payload}) => {
      state.creatingPost = false;
      state.categories.push(payload);
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.creatingPost = false;
      if (action.payload) {
        state.creatingPostError = action.payload.message;
      } else {
        state.creatingPostError = action.error as string;
      }
    });
    builder.addCase(getCategoryById.pending, (state) => {
      state.gettingCategories = true;
    });
    builder.addCase(getCategoryById.fulfilled, (state, {payload}) => {
      state.gettingCategories = false;
      state.currentCategory = payload;
    });
    builder.addCase(getCategoryById.rejected, (state, action) => {
      state.gettingCategories = false;
      if (action.payload) {
        state.gettingCategoriesError = action.payload.message;
      } else {
        state.gettingCategoriesError = action.error as string;
      }
    });
  }
});

export {actions, postsReducer};
