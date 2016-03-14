import { ACTIONS } from './actions';

export const initial_state = {
    payload: 0,
};

export function reducer(state=initial_state, action) {
    let {
        type,
        payload,
    } = action;

    switch (type) {
        case ACTIONS.LAUNCH:
            return {...state, payload};
        default:
            return state;
    }
}
