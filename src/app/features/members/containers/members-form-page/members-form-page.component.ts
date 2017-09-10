import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';

import * as Members from '../../reducers/index';
import * as Form from '../../actions/members-form.actions';

import { Store } from '@ngrx/store';
import { LoadNewMemberFormAction, SubmitMemberFormAction } from '../../actions/members-form.actions';

@Component({
  selector: 'app-members-form-page',
  templateUrl: './members-form-page.component.html'
})
export class MembersFormPageComponent implements OnInit {

  member$;

  constructor(private store: Store<Members.State>) {
    this.member$ = store.select(Members.getFormEditedMember);
  }

  ngOnInit() {
    this.store.dispatch(new LoadNewMemberFormAction())
  }

  onSubmit(member: Member) {
    this.store.dispatch(new SubmitMemberFormAction(member));
  }

}
