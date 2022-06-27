import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {calls} from "../utils/calls";
import {AxiosThunkError} from "../types/general";


export const createPost = createAsyncThunk<CreatePostThunkResponse, CreatePostThunkBody, { rejectValue: AxiosThunkError }>('posts/createPost', async (data, thunkApi) => {
  return axios(calls.createPost(data.data, data.locale, data.token)).then((res) => {
    return res.data.data;
  }).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const updatePost = createAsyncThunk<CreatePostThunkResponse, UpdatePostThunkBody, { rejectValue: AxiosThunkError }>('posts/updatePost', async (data, thunkApi) => {
  return axios(calls.updatePost(data.id, data.data, data.locale, data.token)).then((res) => {
    return res.data.data;
  }).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const deletePost = createAsyncThunk<CreatePostThunkResponse, DeletePostThunkBody, { rejectValue: AxiosThunkError }>('posts/updatePost', async (data, thunkApi) => {
  return axios(calls.deletePost(data.id, data.locale, data.token)).then((res) => {
    return res.data.data;
  }).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const getAllPosts = createAsyncThunk<GetAllPostsThunkResponse, GetAllPostsThunkBody, { rejectValue: AxiosThunkError }>('posts/getAllPosts', async (data, thunkApi) => {
  return axios(calls.getAllPosts(data.locale, data.token)).then((res) => res.data.data).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const getPostById = createAsyncThunk<GetPostByIdThunkResponse, GetPostByIdThunkBody, { rejectValue: AxiosThunkError }>('posts/getPostById', async (data, thunkApi) => {
  return axios(calls.getPostById(data.id, data.locale, data.token)).then((res) => res.data.data).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const createCategory = createAsyncThunk<CreateCategoryThunkResponse, CreateCategoryThunkBody, { rejectValue: AxiosThunkError }>('posts/createCategory', async (data, thunkApi) => {
  return axios(calls.createCategory(data.data, data.locale, data.token)).then((res) => {
    return res.data.data;
  }).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const updateCategory = createAsyncThunk<UpdateCategoryThunkResponse, UpdateCategoryThunkBody, { rejectValue: AxiosThunkError }>('posts/updateCategory', async (data, thunkApi) => {
  return axios(calls.updateCategory(data.id, data.data, data.locale, data.token)).then((res) => {
    return res.data.data;
  }).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const getCategoryById = createAsyncThunk<GetCategoryByIdThunkResponse, GetCategoryByIdThunkBody, { rejectValue: AxiosThunkError }>('posts/getCategoryById', async (data, thunkApi) => {
  return axios(calls.getCategoryById(data.id, data.locale, data.token)).then((res) => res.data.data).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const getAllCategories = createAsyncThunk<GetAllCategoriesThunkResponse, GetAllCategoriesThunkBody, { rejectValue: AxiosThunkError }>('posts/getAllCategories', async (data, thunkApi) => {
  return axios(calls.getAllCategories(data.locale, data.token, data.populate)).then((res) => res.data.data).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});



