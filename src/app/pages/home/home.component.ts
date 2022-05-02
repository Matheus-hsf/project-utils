import { Component, OnInit } from '@angular/core';
import { SimpleCardDefinition } from 'src/app/components/simple-card/simple-card';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  descDirective: SimpleCardDefinition = {
    title: 'Directive Increase Scroll',
    description: 'Its a directive to increase size of customs scroll on mouse hover.',
    srcImage: '../../../assets/imgs/scroll.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
