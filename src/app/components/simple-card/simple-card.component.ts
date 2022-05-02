import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  imgSource: string;

  @Input()
  routeButton: string;

  constructor() { }

  ngOnInit(): void {
  }

}
