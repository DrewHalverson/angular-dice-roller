import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-roll-a-die',
  templateUrl: './roll-a-die.component.html',
  styleUrls: ['./roll-a-die.component.css']
})
export class RollADieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rollResult = 0;

  roll = () => {
    this.rollResult = Math.floor(Math.random() * Number(this.sideCount)) + 1;
  };

  @Input("side-count")
  sideCount = "";

}
