import Home from '../../src/routes/Home.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(Home, {
    name: 'world'
  })

  expect(getByText("Hello world!")).toBeTruthy()
  expect(getByText("APP_ENV: test")).toBeTruthy()
})