import { Injectable } from '@angular/core';

export interface CrewMember {
  id: number;
  name: string;
  role: string;
  type: string;
  share: number;
}

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  private readonly crew: CrewMember[] = [
    { id: 1, name: 'Rodrigo Santos', role: 'Master', type: 'Crewmember', share: 15 },
    { id: 2, name: 'Carlos Lima', role: 'Chef', type: 'Crewmember', share: 15 },
    { id: 3, name: 'Marcos Silva', role: 'Deckhand', type: 'Crewmember', share: 10 },
    { id: 4, name: 'Pedro Santos', role: 'Pilot', type: 'Crewmember', share: 10 },
    { id: 5, name: 'Rafael Costa', role: 'Cook', type: 'Crewmember', share: 10 },
    { id: 6, name: 'Bruno Almeida', role: 'Mechanic', type: 'Crewmember', share: 10 }
  ];

  getCrew(): CrewMember[] {
    return this.crew;
  }

  getMember(id: number): CrewMember | undefined {
    return this.crew.find(member => member.id === id);
  }
}
