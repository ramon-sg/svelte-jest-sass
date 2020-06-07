import App from '../src/App.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(App, {
    name: 'world'
  })

  expect(getByText("Hello world!")).toBeTruthy()
  expect(getByText("APP_ENV: test")).toBeTruthy()
})