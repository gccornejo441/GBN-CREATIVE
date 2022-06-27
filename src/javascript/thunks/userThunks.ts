import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {calls} from "../utils/calls";
import {AxiosThunkError} from "../types/general";


export const signUpUserStrapi = createAsyncThunk<SignupStrapiThunkResponse, SignupStrapiThunkBody, { rejectValue: AxiosThunkError }>('user/signUpUserStrapi', async (data, thunkApi) => {
  return axios(calls.signUpStrapi(data)).then((res) => ({id: res.data.id, email: res.data.email})).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const confirmEmailStrapi = createAsyncThunk<unknown, string, { rejectValue: AxiosThunkError }>('user/confirmEmailStrapi', async (confirmationToken, thunkApi) => {
  console.log(confirmationToken);
  return axios(calls.verifyEmailStrapi(confirmationToken)).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const requestResetPassword = createAsyncThunk<unknown, string, { rejectValue: AxiosThunkError }>('user/requestResetPassword', async (email, thunkApi) => {
  return axios(calls.requestResetPassword({email: email})).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const resetPassword = createAsyncThunk<unknown, ResetPasswordThunkBody, { rejectValue: AxiosThunkError }>('user/resetPassword', async (data, thunkApi) => {
  return axios(calls.resetPassword(data)).catch((err) => {
    return thunkApi.rejectWithValue({message: err.response.data.error.message});
  });
});

export const validateTokenStrapi = createAsyncThunk<ValidateTokenStrapiThunkResponse, ValidateTokenStrapiThunkBody, { rejectValue: AxiosThunkError }>('user/validateTokenStrapi', async (token, thunkApi) => {
  return axios(calls.validateTokenStrapi(token)).then((res) => {
    return {id: res.data.id, email: res.data.email};
  }).catch((err) => {
    return thunkApi.rejectWithValue({message: err.message});
  });
});

export const signUpUserCustom = createAsyncThunk<SignupThunkResponse, SignupThunkBody, { rejectValue: AxiosThunkError }>('user/signUpUserCustom', async (data, thunkApi) => {
  return axios(calls.signUpCustom(data)).then((res) => res.data).catch((err) => {
    return thunkApi.rejectWithValue({message: err.message});
  });
});




