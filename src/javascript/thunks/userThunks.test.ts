import {EnhancedStore, CombinedState, AnyAction} from '@reduxjs/toolkit';
import {ThunkMiddleware} from 'redux-thunk';
import {IUserState} from '../reducers/userReducer';
import {createStoreForTesting, RootState} from '../store';
import {signUpUserCustom, signUpUserStrapi, validateTokenStrapi} from "./userThunks";
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import {API_URL} from "../utils/calls";

describe('userThunks', () => {
  let mock: MockAdapter;
  let store: EnhancedStore<CombinedState<{ user: IUserState; }>, AnyAction, [ThunkMiddleware<CombinedState<{ user: IUserState; }>, AnyAction, undefined>]>;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  beforeEach(() => {
    const state: RootState = {
      user: {
        isSigningUp: false,
        isSigningUpError: '',
        validatingToken: false,
        validateTokenError: '',
        user: {
          id: 0,
          email: '',
        }
      }
    };
    store = createStoreForTesting(state);
  });

  describe('Signup with strapi', () => {


    it('should register a user', async () => {
      mock.onPost(`${API_URL}/auth/local/register`).reply(200,
        {
          email: 'test@jest.com',
          id: 85,
          confirmed: false,
          username: 'test@jest.com'
        });
      await store.dispatch(signUpUserStrapi({email: 'test@jest.com', password: '1234567890',}));
      expect(store.getState().user).toEqual({
        isSigningUp: false,
        isSigningUpError: '',
        validatingToken: false,
        validateTokenError: '',
        user: {
          id: 85,
          email: 'test@jest.com'
        }
      });
    })
    ;


    it('should fail to register a user', async () => {
      mock.onPost(`${API_URL}/auth/local/register`).networkErrorOnce();
      await store.dispatch(signUpUserStrapi({email: 'test@jest.com', password: '1234567890',}));
      expect(store.getState().user).toEqual({
        isSigningUp: false,
        isSigningUpError: 'Network Error',
        validatingToken: false,
        validateTokenError: '',
        user: {
          id: 0,
          email: ''
        }
      });
    });
  });


  describe('Sign up custom', () => {
    it('should register a user', async () => {
      mock.onPost(`${API_URL}/signup`).reply(200,
        {
          email: 'test@jest.com',
          id: 85
        });
      await store.dispatch(signUpUserCustom({email: 'test@jest.com', password: '1234567890',}));
      expect(store.getState().user).toEqual({
        isSigningUp: false,
        isSigningUpError: '',
        validatingToken: false,
        validateTokenError: '',
        user: {
          id: 85,
          email: 'test@jest.com'
        }
      });
    });


    it('should fail to register a user', async () => {
      mock.onPost(`${API_URL}/signup`).networkErrorOnce();
      await store.dispatch(signUpUserCustom({email: 'test@jest.com', password: '1234567890',}));
      expect(store.getState().user).toEqual({
        isSigningUp: false,
        isSigningUpError: 'Network Error',
        validatingToken: false,
        validateTokenError: '',
        user: {
          id: 0,
          email: ''
        }
      });
    });
  });

  describe('Validate token strapi', () => {
    it('should validate the token and return a user', async () => {
      mock.onGet(`${API_URL}/users/me`).reply(200,
        {
          email: 'test@jest.com',
          id: 85
        });
      await store.dispatch(validateTokenStrapi('test_token'));
      expect(store.getState().user).toEqual({
        isSigningUp: false,
        isSigningUpError: '',
        validatingToken: false,
        validateTokenError: '',
        user: {
          id: 85,
          email: 'test@jest.com'
        }
      });
    });


    it('should fail to validate the token', async () => {
      mock.onGet(`${API_URL}/users/me`).networkErrorOnce();
      await store.dispatch(validateTokenStrapi('test_token'));
      expect(store.getState().user).toEqual({
        isSigningUp: false,
        isSigningUpError: '',
        validatingToken: false,
        validateTokenError: 'Network Error',
        user: {
          id: 0,
          email: ''
        }
      });
    });
  });
});
