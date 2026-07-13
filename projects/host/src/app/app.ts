import { Component, signal } from '@angular/core';
import { Button, Card } from 'shared-ui';

@Component({
  selector: 'app-root',
  imports: [Button, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('host');
}
