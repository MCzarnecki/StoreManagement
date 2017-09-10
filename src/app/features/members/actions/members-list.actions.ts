import { Action } from '@ngrx/store';
import { Member } from '../models/member';

export const LOAD_MEMBERS = '[Members-list] Load initiated';
export const LOAD_MEMBERS_SUCCESS = '[Members-list] Load Success';

export class LoadMembersAction implements Action {
    readonly type = LOAD_MEMBERS;
}

export class LoadMembersSuccessAction implements Action {
    readonly type = LOAD_MEMBERS_SUCCESS;

    constructor(public payload: Member[]) { }
}

export type Actions = 
    LoadMembersAction |
    LoadMembersSuccessAction;
