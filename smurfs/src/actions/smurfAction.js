import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_ERROR = "SMURF_FETCH_ERROR";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

export const fetchSmurf = () => {
  return dispatchEvent => {
    dispatchEvent({
      type: FETCHING_SMURFS
    })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatchEvent({
        type: SMURF_FETCH_SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatchEvent({
        type: SMURF_FETCH_ERROR,
        payload: err.response
      })
    })
  }
}

export const addSmurf = newSmurf => dispatch => {
  axios
    .post(`http://localhost:3333/smurfs/`, newSmurf)
    .then(response => dispatch(
      { 
        type: ADD_NEW_SMURF,
        payLoad: response.data
      })
    )
}