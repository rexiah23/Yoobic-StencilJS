import { newE2EPage } from '@stencil/core/testing';

describe('array-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<array-grid></array-grid>');

    const element = await page.find('array-grid');
    expect(element).toHaveClass('hydrated');
  });
});
