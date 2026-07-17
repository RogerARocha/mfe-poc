import { Component } from '@angular/core';
import { Card, List, Button } from 'shared-ui';

interface CrewMember {
  name: string;
  role: string;
  type: string;
  share: number;
}

@Component({
  selector: 'app-human-resources',
  imports: [Card, List, Button],
  templateUrl: './human-resources.html',
  styleUrl: './human-resources.scss',
})
export class HumanResources {
  protected readonly boatMaintenanceShare = 30;

  protected readonly crew: CrewMember[] = [
    { name: 'Rodrigo Santos', role: 'Master', type: 'Crewmember', share: 15 },
    { name: 'Carlos Lima', role: 'Chef', type: 'Crewmember', share: 15 },
    { name: 'Marcos Silva', role: 'Deckhand', type: 'Crewmember', share: 10 },
    { name: 'Pedro Santos', role: 'Pilot', type: 'Crewmember', share: 10 },
    { name: 'Rafael Costa', role: 'Cook', type: 'Crewmember', share: 10 },
    { name: 'Bruno Almeida', role: 'Mechanic', type: 'Crewmember', share: 10 }
  ];
}
