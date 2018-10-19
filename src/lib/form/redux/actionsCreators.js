import {
    ADD_VALUE,
} from './actionTypes';

const addValue = (formId, value) => ({
    type: ADD_VALUE,
    formId,
    value,
});

export {
    addValue,
}