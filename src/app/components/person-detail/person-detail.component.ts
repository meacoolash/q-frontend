import { Component } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [],
  template: `
    <p>
      person-detail works!
      <button (click)="back()">Back</button>
    </p>
  `,
  styleUrl: './person-detail.component.scss'
})
export class PersonDetailComponent {

  back() {
    window.history.back();
  }

}
