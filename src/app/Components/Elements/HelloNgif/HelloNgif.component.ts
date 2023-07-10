import { Component } from '@angular/core';

@Component({
  selector: 'NgifComponent',
  templateUrl: './HelloNgif.component.html',
  styleUrls: ['./HelloNgif.component.css'],
})
export class HelloNgifComponent {
  message = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;

    this.canEdit
      ? (this.message = 'You can edit me!')
      : (this.message = "I'm read only!");
  }
}
