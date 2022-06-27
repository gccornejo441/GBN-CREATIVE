import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {createStore} from "../store";
import {Provider} from "react-redux";
import {SessionProvider} from "next-auth/react";
import ExampleComponent from "./ExampleComponent";
import {actions} from "../reducers/userReducer";


describe('ExampleComponent', () => {
  it('renders the component', () => {
    const store = createStore();
    render(
      <SessionProvider>
        <Provider store={store}>
          <ExampleComponent/>
        </Provider>
      </SessionProvider>
    );

    const heading = screen.getByRole('button', {
      name: /test/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('dispatches the action in CDM', () => {
    const store = createStore();
    jest.spyOn(store, 'dispatch');
    render(
      <SessionProvider>
        <Provider store={store}>
          <ExampleComponent/>
        </Provider>
      </SessionProvider>
    );
    expect(store.dispatch).toHaveBeenCalledWith(actions.incrementCounter());
  });
});


