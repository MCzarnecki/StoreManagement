import { Action } from '@ngrx/store';
import { Member } from '../models/member';

export const LOAD_NEW_MEMBER_FORM = '[Member-form] Load new member form';
export const SUBMIT_MEMBER_FORM = '[Member-form] Submit form';

export class LoadNewMemberFormAction implements Action {
    readonly type = LOAD_NEW_MEMBER_FORM;
}

export class SubmitMemberFormAction implements Action {
    readonly type = SUBMIT_MEMBER_FORM;

    constructor(public payload: Member) { }
}

export type Actions = 
    LoadNewMemberFormAction |
    SubmitMemberFormAction;
