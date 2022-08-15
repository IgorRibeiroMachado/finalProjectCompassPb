import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-input',
  template: ` <input
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [placeholder]="label"
  >`,
  styleUrls: ['./input.css'],
})
export default class InputComponent {

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label = 'Usuário';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['storybook-input', `storybook-input--${this.size}`];
  }
}
