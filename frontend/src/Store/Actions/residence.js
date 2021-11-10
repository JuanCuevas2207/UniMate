import * as actionTypes from "./actionTypes";
import databaseAxios from "../../Instances/databaseAxios";

const startResidenceLoading = () => {
  return {
    type: actionTypes.START_RESIDENCE_LOADING,
  };
};

const endResidenceLoading = () => {
  return {
    type: actionTypes.END_RESIDENCE_LOADING,
  };
};

const loadResidence = (residence) => {
    return {
      type: actionTypes.FETCH_RESIDENCE,
      payload: {
        residence: residence,
      },
    };
};

  export const fetchResidence = (onSuccessCallback) => {
    return (dispatch) => {
      dispatch(startResidenceLoading());
      databaseAxios
        .get("residence")
        .then((response) => {
          const residence = Object.values(response.data)
          dispatch(loadResidence(residence));
          dispatch(endResidenceLoading());
          onSuccessCallback();
        })
        .catch((error) => {
          console.log(error);
          dispatch(endResidenceLoading());
        });
    };
  };