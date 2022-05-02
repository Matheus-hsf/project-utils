import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-scroll-increase',
  templateUrl: './directive-scroll-increase.component.html',
  styleUrls: ['./directive-scroll-increase.component.scss']
})
export class DirectiveScrollIncreaseComponent implements OnInit {

  contentX: any[] = [
    {
      name: 'Jorje',
      age: 24
    },
    {
      name: 'Denzel',
      age: 42
    },
    {
      name: 'Noah',
      age: 45
    },
    {
      name: 'Nyasia',
      age: 75
    },
    {
      name: 'Joselyn',
      age: 57
    },
    {
      name: 'Solomon',
      age: 27
    },
    {
      name: 'Jovani',
      age: 68
    },
    {
      name: 'Elise',
      age: 16
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
