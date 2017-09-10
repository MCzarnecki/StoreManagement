
import { ActionReducerMap } from "@ngrx/store/store";
import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as List from './members-list.reducer';
    import * as Form from './member-form.reducer';

    export interface State {
        list: List.State;
        form: Form.State;
    }

    export const reducers = {
        list: List.reducer,
        form: Form.reducer
    };

export const getMembersState = createFeatureSelector('members');

export const getMembersListState = createSelector(
    getMembersState,
    (state: State) => state.list
);

export const getMembersListContent = createSelector(
    getMembersListState,
    List.getContent
);

export const getFormState = createSelector(
    getMembersState,
    (state: State) => state.form
);

export const getFormEditedMember = createSelector(
    getFormState,
    Form.getEditedMember
);


