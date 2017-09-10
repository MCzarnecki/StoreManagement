import { RouterStateUrl } from '../shared/utils/router-state';
import { ActionReducerMap } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer,
};
