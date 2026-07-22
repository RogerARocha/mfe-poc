import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CrewService, CrewMember } from '../../services/crew.service';
import { Card, Button } from 'shared-ui';

@Component({
  selector: 'app-member-details',
  imports: [Card, Button, RouterLink],
  templateUrl: './member-details.html',
  styleUrl: './member-details.scss'
})
export class MemberDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private crewService = inject(CrewService);

  protected member: CrewMember | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.member = this.crewService.getMember(Number(id));
    }
  }
}
