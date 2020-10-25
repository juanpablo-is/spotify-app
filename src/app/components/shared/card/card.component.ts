import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() items: any[] = [];
  @Input() pathHome: boolean = true;

  constructor(private route: Router) { }

  artist(item: any) {
    let idArtist = item.id;
    this.route.navigate(["/artist", idArtist]);
  }
}
