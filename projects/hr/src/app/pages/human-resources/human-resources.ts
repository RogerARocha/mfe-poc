import { Component } from '@angular/core';
import { Card, Button, List } from 'shared-ui';

@Component({
  selector: 'app-human-resources',
  imports: [Card, Button, List],
  templateUrl: './human-resources.html',
  styleUrl: './human-resources.scss',
})
export class HumanResources {
  protected readonly employees = [
    { name: 'Sarah Jenkins', role: 'VP of Finance', department: 'Leadership' },
    { name: 'David Chen', role: 'Lead Platform Architect', department: 'Engineering' },
    { name: 'Elena Rostova', role: 'Director of Talent', department: 'Talent Acquisition' },
    { name: 'Aris Thorne', role: 'Senior Security Engineer', department: 'SecOps' }
  ];
}
