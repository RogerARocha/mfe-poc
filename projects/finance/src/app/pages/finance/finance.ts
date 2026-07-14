import { Component } from '@angular/core';
import { Button, Card } from 'shared-ui';

@Component({
  selector: 'app-finance',
  imports: [Button, Card],
  templateUrl: './finance.html',
  styleUrl: './finance.scss',
})
export class Finance {}
