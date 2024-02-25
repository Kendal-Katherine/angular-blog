import { Component, Input, OnInit, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [ RouterLink, RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  @Input()
  photoCover:string = " "
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string = " "
  @Input()
  Id:string="0"

  constructor(){ }

  ngOnInit(): void {

  }




}
