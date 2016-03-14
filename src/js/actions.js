import _ from 'lodash';
import * as util from './utilities';

export const ACTIONS = util.mapToObject([
    'LAUNCH',
]);

export function launch(payload) {
    return {
        type: ACTIONS.LAUNCH,
        payload,
    };
}
