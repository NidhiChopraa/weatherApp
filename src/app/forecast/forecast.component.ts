import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.sass']
})
export class ForecastComponent implements OnInit {
  @Input() weather
  constructor() { }

  ngOnInit() {
  }

}
