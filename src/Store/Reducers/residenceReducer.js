import * as actionTypes from "../Actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  residence: [],
  loadingResidence: false,
};

const startLoading = (state, action) => {
  return updateObject(state, { loadingResidence: true });
};

const endLoading = (state, action) => {
  return updateObject(state, { loadingResidence: false });
};

const fetchResidence = (state, action) => {
  return updateObject(state, { residence: action.payload.residence });
};


const residenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESIDENCE:
      return fetchResidence(state, action);
    case actionTypes.START_RESIDENCE_LOADING:
      return startLoading(state, action);
    case actionTypes.END_RESIDENCE_LOADING:
      return endLoading(state, action);
    default:
      return state;
  }
};

export default residenceReducer;