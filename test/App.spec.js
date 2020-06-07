import App from '../src/App.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(App)

  expect(getByText("Home")).toBeTruthy()
  expect(getByText("About")).toBeTruthy()
})