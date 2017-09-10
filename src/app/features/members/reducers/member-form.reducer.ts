import { Member } from '../models/member';
import { Actions, LOAD_NEW_MEMBER_FORM, SUBMIT_MEMBER_FORM } from '../actions/members-form.actions';

export interface State {
    memberToEdit: Member;
    submitedMember: Member;
}

export const initialState: State = {
    memberToEdit: {} as Member,
    submitedMember: {} as Member
};

export function reducer(state: State = initialState, action: Actions) {
    switch(action.type) {

        case LOAD_NEW_MEMBER_FORM: {
            return {...state, memberToEdit: { id: -1}, submitedMember: {} }
        }   

        case SUBMIT_MEMBER_FORM: {
            
            return {...state, memberToEdit: {}, submitedMember: action.payload }
        }

        default: {
            return { ...state };
        }

    }
}

export const getEditedMember = (state: State) => state.memberToEdit;