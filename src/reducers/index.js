import { combineReducers } from 'redux';
import desafio from './desafioReducer';
import ajaxCallsInProgress from './statusReducer';

const rootReducer = combineReducers({
  desafio,
  ajaxCallsInProgress
});

export default rootReducer;
