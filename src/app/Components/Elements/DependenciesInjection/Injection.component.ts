import { Component } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';

@Component({
  selector: 'Injection',
  templateUrl: './Injection.component.html',
  styleUrls: ['./Injection.component.css'],
})
export class InjectionComponent {
  count = 0;

  constructor(private logger: Logger) {}

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
