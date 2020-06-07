import About from '../../src/routes/About.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(About)

  expect(getByText("svelte-spa-router")).toBeTruthy()
})