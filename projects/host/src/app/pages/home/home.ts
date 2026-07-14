import { Component } from '@angular/core';
import { Button, Card } from 'shared-ui';

@Component({
  selector: 'app-home',
  imports: [Button, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
