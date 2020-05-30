import { FETCHING_SMURFS, SMURF_FETCH_SUCCESS, SMURF_FETCH_ERROR, ADD_NEW_SMURF } from "../actions/smurfAction";

const initialState = { smurfs: [], fetchingSmurfs: false, error: "" };

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {...state, fetchingSmurfs: true };
    case SMURF_FETCH_SUCCESS:
      return {...state,
        smurfs: action.payload,       
        fetchingSmurfs: false
      };
    case SMURF_FETCH_ERROR:
      return {...state,
        fetchingSmurfs: false, 
        error: "Error fetching Smurfs"
      };
    case ADD_NEW_SMURF:
	return{...state,
	fetchingSmurfs: false,
	smurfs: action.payload};
    default:
      return state;
  }
};
