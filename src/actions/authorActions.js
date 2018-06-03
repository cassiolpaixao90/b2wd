import * as types from "../constants/actionTypes";
import courseApi from "../api/mockAuthorApi";
import { beginAjaxCall  } from './statusActions';

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorSuccess(authors));
    }).catch(error => {
      throw (error);
    });
  }
}
