import { combineReducers } from 'redux';
import HomeReducer from './home.reducer';
import ConvertReducer from './convert.reducer';
import StatReducer from './stat.reducer';

export default combineReducers({ HomeReducer, ConvertReducer, StatReducer });
