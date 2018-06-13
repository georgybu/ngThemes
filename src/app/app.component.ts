import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello, mPrest</h1>
    <div class="panel">
      <p>some text</p>
      <div class="action"></div>
      <select class="select-theme" (change)="onThemeChange($event)">
        <option *ngFor="let theme of themes" [value]="theme.id">{{theme.value}}</option>
      </select>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themes = [
    {id: 'default-theme', value: 'Theme 1'},
    {id: 'contempt-theme', value: 'Theme 2'},
    {id: 'american-theme', value: 'Theme 3'}
  ];

  onThemeChange($event) {
    document.body.className = $event.currentTarget.value;
  }
}
