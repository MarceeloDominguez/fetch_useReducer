import { ACTION_TYPES } from "./actionTypes";

export const initialState = {
  loading: false,
  error: false,
  post: [],
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        error: false,
        post: [],
      };

    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };

    case ACTION_TYPES.FETCH_ERROR:
      return {
        error: true,
        loading: false,
        post: [],
      };

    default:
      return state;
  }
};
