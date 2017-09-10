import { Injectable } from '@angular/core/';
import { MembersDataService } from '../services/members-data.service';
import { Actions, Effect } from '@ngrx/effects';
import { SUBMIT_MEMBER_FORM, SubmitMemberFormAction } from '../actions/members-form.actions';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class MembersFormEffects {

    constructor(private actions$: Actions,
                private membersService: MembersDataService,
                private router: Router) { }
    
    @Effect({dispatch: false})
    submit$ = this.actions$.ofType(SUBMIT_MEMBER_FORM)
        .map((action: SubmitMemberFormAction) => action.payload)
        .do(member => { 
            this.membersService.addMember(member);
            this.router.navigate(['members']);
        });

}
