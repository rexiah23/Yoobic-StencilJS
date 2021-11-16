import { Component, h } from '@stencil/core';

@Component({
  tag: 'array-grid',
  styleUrl: 'array-grid.css',
  shadow: true,
})
export class ArrayGrid {

  render() {
    return (
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    )
  }

}
