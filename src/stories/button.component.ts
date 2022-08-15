import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export default class ButtonComponent {

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label = 'Continuar';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['storybook-button', `storybook-button--${this.size}`];
  }
}
