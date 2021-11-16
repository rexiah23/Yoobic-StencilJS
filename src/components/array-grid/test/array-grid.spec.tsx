import { newSpecPage } from '@stencil/core/testing';
import { ArrayGrid } from '../array-grid';

describe('array-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArrayGrid],
      html: `<array-grid></array-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <array-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </array-grid>
    `);
  });
});
