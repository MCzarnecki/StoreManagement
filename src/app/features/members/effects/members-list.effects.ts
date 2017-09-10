import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core/';
import { Actions, Effect } from '@ngrx/effects'
import { MembersDataService } from '../services/members-data.service';
import { LOAD_MEMBERS, LoadMembersSuccessAction } from '../actions/members-list.actions';
import { Member } from '../models/member';

@Injectable()
export class MembersListEffects {

    constructor(private actions$: Actions, private membersService: MembersDataService) { }

    @Effect()
    loadList$ = this.actions$.ofType(LOAD_MEMBERS)
            .switchMap(() => this.membersService.getMembers())
            .map((list: Member[]) => new LoadMembersSuccessAction(list));

}
