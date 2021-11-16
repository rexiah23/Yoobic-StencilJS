import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'array-grid',
  styleUrl: 'array-grid.css',
  shadow: true,
})
export class ArrayGrid {

  @Prop() itemsArray: string;

  render() {
    let gridItems = <span></span>
    if (this.itemsArray) {
      const parsedItems = JSON.parse(this.itemsArray);
      gridItems = parsedItems.map((item: string) => <div class="grid-item">{item}</div>);
    }

    return (
      <div class="grid-container">
        <ul>
          {gridItems}
        </ul>
      </div>
    )
  }
}
