import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html'
})
export class CardItemComponent {

  @Input() albums: any = {};

  constructor() { }
}
