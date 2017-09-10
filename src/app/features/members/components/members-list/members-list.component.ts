import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../models/member';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html'
})
export class MembersListComponent{

  @Input()
  members: Member[];

  constructor() { }

}
