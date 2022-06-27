import {createStoreForTesting} from "../store";
import {actions, userReducer} from "./userReducer";
import {signUpUserStrapi} from "../thunks/userThunks";

describe('userReducer slice', () => {
  describe('reducers', () => {
    it('incrementCounter increments the counter by 1 on each call', () => {
      const store = createStoreForTesting();
      const initialState = store.getState().user;
      let reducedState = userReducer(initialState, actions.incrementCounter());
      expect(reducedState.counter).toBe(initialState.counter + 1);

      // increment counter again
      reducedState = userReducer(reducedState, actions.incrementCounter());
      expect(reducedState.counter).toBe(initialState.counter + 2);
    });
  });

  describe('extraReducers', () => {
    describe('signInUserStrapi', () => {
      it('pending action correctly updates the state', () => {
        const store = createStoreForTesting();
        const initialState = store.getState().user;
        const reducedState = userReducer(initialState, {type: signUpUserStrapi.pending.type});

        const expectedResult = {...initialState, isSigningUp: true};
        expect(reducedState).toEqual(expectedResult);
      });

      it('fulfilled action correctly updates the state', () => {
        const store = createStoreForTesting();
        const initialState = store.getState().user;
        const reducedState = userReducer(initialState, {type: signUpUserStrapi.fulfilled.type, payload: {email: 'test@jest.com', id: 85}});

        const expectedResult = {...initialState, user: {email: 'test@jest.com', id: 85}};
        expect(reducedState).toEqual(expectedResult);
      });

      it('rejected action correctly updates the state', () => {
        const store = createStoreForTesting();
        const initialState = store.getState().user;
        let reducedState = userReducer(initialState, {type: signUpUserStrapi.rejected.type, payload: {message: 'Error 404'}});

        const expectedResult = {...initialState, isSigningUpError: 'Error 404'};
        expect(reducedState).toEqual(expectedResult);

        // handles case in which there is no error message in the payload
        reducedState = userReducer(initialState, {type: signUpUserStrapi.rejected.type});
        expect(reducedState).toEqual({...initialState, isSigningUpError: ''});
      });
    });

  });
});
