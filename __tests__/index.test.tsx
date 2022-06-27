import {render, screen} from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import {createStore} from "../src/javascript/store";
import {Provider} from "react-redux";
import {SessionProvider} from "next-auth/react";


describe('Home', () => {
  it('renders the test string', () => {
    const store = createStore();
    render(
      <SessionProvider>
        <Provider store={store}>
          <Home/>
        </Provider>
      </SessionProvider>
    )

    const button = screen.getByRole('button', {
      name: /test/i,
    })

    expect(button).toBeInTheDocument()
  })
})


