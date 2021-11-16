import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'array-grid',
  styleUrl: 'array-grid.css',
  shadow: true,
})
export class ArrayGrid {

  @Prop() itemsArray: string[];

  render() {
    const parsedItems = JSON.parse(document.querySelector('array-grid').getAttribute('items-array'));
    const gridItems = parsedItems.map(item => <span>{item}</span>);

    return (
      <div>
       {gridItems}
      </div>
    )
  }
}
