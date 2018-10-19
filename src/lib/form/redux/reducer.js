import {
    ADD_VALUE,
} from './actionTypes'

const addValue = (state, action) => ({
    ...state,
    [action.formId]: action.value,
})

const reducer = (state = {}, action) => {
    const mapper = {
      [ADD_VALUE]: addValue,
    };
  
    if (Object.prototype.hasOwnProperty.call(mapper, action.type)) {
      return mapper[action.type](state, action);
    }
  
    return state;
  };
  
  export default reducer;