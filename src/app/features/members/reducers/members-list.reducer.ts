import { Member } from '../models/member';
import { Actions, LOAD_MEMBERS_SUCCESS } from '../actions/members-list.actions';

export interface State {
    content: Member[];
}

const initialState: State = {
    content: []
}

export function reducer(state: State = initialState, action: Actions) {
    switch (action.type) {

        case LOAD_MEMBERS_SUCCESS: {
            return { ...state, content: action.payload };
        }

        default: {
            return { ...state };
        }

    }
}

export const getContent = (state: State) => state.content;