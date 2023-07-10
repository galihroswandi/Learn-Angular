import { Component } from '@angular/core';

@Component({
  selector: 'HelloInterpolation',
  templateUrl: './HelloInterpolation.component.html',
  styleUrls: ['./HelloInterpolation.component.css'],
})
export class HelloInterpolation {
  message = '*Hello, Interpolation world';
}
