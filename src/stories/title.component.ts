import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-title',
  template: ` <h1
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    {{ label }}
  </h1>`,
  styleUrls: ['./title.css'],
})
export default class TitleComponent {

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label = 'Olá';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['storybook-title', `storybook-title--${this.size}`];
  }
}
