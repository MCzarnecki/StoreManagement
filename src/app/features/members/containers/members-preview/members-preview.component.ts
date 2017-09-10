import { Component, OnInit } from '@angular/core';
import { MembersDataService } from '../../services/members-data.service';
import { Member } from '../../models/member';

import * as List from '../../actions/members-list.actions';
import * as Members from '../../reducers/index';
import { Store } from '@ngrx/store';
import { LoadMembersAction } from '../../actions/members-list.actions';

@Component({
  selector: 'app-members-preview',
  templateUrl: './members-preview.component.html'
})
export class MembersPreviewComponent implements OnInit {

  constructor(private store: Store<Members.State>) { 
    this.members$ = store.select(Members.getMembersListContent);
  }

  members$;

  ngOnInit() {
    this.store.dispatch(new LoadMembersAction);
  }

}
