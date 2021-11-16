import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'array-grid',
  styleUrl: 'array-grid.css',
  shadow: true,
})
export class ArrayGrid {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
