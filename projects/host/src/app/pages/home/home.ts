import { Component } from '@angular/core';
import { Card, List, Button } from 'shared-ui';

@Component({
  selector: 'app-home',
  imports: [Card, List, Button],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
