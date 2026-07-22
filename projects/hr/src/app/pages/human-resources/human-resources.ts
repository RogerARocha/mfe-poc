import { Component, inject } from '@angular/core';
import { Card, List, Button } from 'shared-ui';
import { RouterLink } from '@angular/router';
import { CrewService, CrewMember } from '../../services/crew.service';

@Component({
  selector: 'app-human-resources',
  imports: [Card, List, Button, RouterLink],
  templateUrl: './human-resources.html',
  styleUrl: './human-resources.scss',
})
export class HumanResources {
  private crewService = inject(CrewService);

  protected readonly boatMaintenanceShare = 30;
  protected readonly crew: CrewMember[] = this.crewService.getCrew();
}
