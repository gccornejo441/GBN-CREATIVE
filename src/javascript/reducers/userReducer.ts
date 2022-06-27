import {createSlice} from "@reduxjs/toolkit";
import {
  confirmEmailStrapi, requestResetPassword, resetPassword,
  signUpUserCustom,
  signUpUserStrapi,
  validateTokenStrapi
} from "../thunks/userThunks";


export type IUserState = {
  isSigningUp: boolean;
  isSigningUpError: string;
  validatingToken: boolean;
  validateTokenError: string;
  validatingEmail: boolean;
  validatingEmailError: string;
  emailValidated: boolean;
  resettingPassword: boolean;
  resettingPasswordError: string;
  resetPassword: boolean;
  user: {
    id: number;
    email: string;
  },
  counter: number;
}
const initialState: IUserState = {
  isSigningUp: false,
  isSigningUpError: '',
  validatingEmail: false,
  validatingEmailError: '',
  emailValidated: false,
  resettingPassword: false,
  resettingPasswordError: '',
  resetPassword: false,
  user: {},
  counter: 0
} as IUserState;

const {actions, reducer: userReducer} = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementCounter: state => {
      state.counter += 1;
    }
  },
  extraReducers: (builder) => {
    // Strapi
    builder.addCase(signUpUserStrapi.pending, (state) => {
      state.isSigningUp = true;
    });
    builder.addCase(signUpUserStrapi.fulfilled, (state, {payload}) => {
      state.isSigningUp = false;
      state.user = payload;
    });
    builder.addCase(signUpUserStrapi.rejected, (state, action) => {
      state.isSigningUp = false;
      if (action.payload) {
        state.isSigningUpError = action.payload.message;
      } else {
        state.isSigningUpError = action.error as string;
      }
    });
    builder.addCase(confirmEmailStrapi.pending, (state) => {
      state.validatingEmail = true;
    });
    builder.addCase(confirmEmailStrapi.fulfilled, (state) => {
      state.validatingEmail = false;
      state.emailValidated = true;
    });
    builder.addCase(confirmEmailStrapi.rejected, (state, action) => {
      state.validatingEmail = false;
      if (action.payload) {
        state.validatingEmailError = action.payload.message;
      } else {
        state.validatingEmailError = action.error as string;
      }
    });
    builder.addCase(validateTokenStrapi.pending, (state) => {
      state.validatingToken = true;
    });
    builder.addCase(validateTokenStrapi.fulfilled, (state, {payload}) => {
      state.validatingToken = false;
      state.user = payload;
    });
    builder.addCase(validateTokenStrapi.rejected, (state, action) => {
      state.validatingToken = false;
      if (action.payload) {
        state.validateTokenError = action.payload.message;
      } else {
        state.validateTokenError = action.error as string;
      }
    });
    builder.addCase(requestResetPassword.pending, (state) => {
      state.resettingPassword = true;
    });
    builder.addCase(requestResetPassword.fulfilled, (state) => {
      state.resettingPassword = false;
      state.resetPassword = true;
    });
    builder.addCase(requestResetPassword.rejected, (state, action) => {
      state.resettingPassword = false;
      if (action.payload) {
        state.resettingPasswordError = action.payload.message;
      } else {
        state.resettingPasswordError = action.error as string;
      }
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.resettingPassword = true;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.resettingPassword = false;
      state.resetPassword = true;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.resettingPassword = false;
      if (action.payload) {
        state.resettingPasswordError = action.payload.message;
      } else {
        state.resettingPasswordError = action.error as string;
      }
    });

    // Custom server
    builder.addCase(signUpUserCustom.pending, (state) => {
      state.isSigningUp = true;
    });
    builder.addCase(signUpUserCustom.fulfilled, (state, {payload}) => {
      state.isSigningUp = false;
      state.user = payload;
    });
    builder.addCase(signUpUserCustom.rejected, (state, action) => {
      state.isSigningUp = false;
      if (action.payload) {
        state.isSigningUpError = action.payload.message;
      } else {
        state.isSigningUpError = action.error as string;
      }
    });
  }
});

export {actions, userReducer};
