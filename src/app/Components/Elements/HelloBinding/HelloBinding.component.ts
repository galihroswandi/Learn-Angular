import { Component } from '@angular/core';

@Component({
  selector: 'Hello-Binding',
  templateUrl: './HelloBinding.component.html',
  styleUrls: ['./HelloBinding.component.css'],
})
export class HelloBindingComponent {
  fontColor = 'green';
  sayHelloId = 1;
  canClick = true;
  message = 'Hello, World';

  sayMessage = () => {
    alert(this.message);
  };
}
