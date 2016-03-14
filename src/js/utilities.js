import _ from 'lodash';

export function identity(input) {
    return input;
}

export function mapToObject(array, getKey=identity, getValue=identity) {
    return _.zipObject(
        _.map(array, getKey),
        _.map(array, getValue),
    );
}
