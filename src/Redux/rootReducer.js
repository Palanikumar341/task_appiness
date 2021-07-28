import {combineReducers} from 'redux';
import { authReducer, dataReducer} from './Reducers/userReducer'

let rootReducer = combineReducers({
  user : authReducer,
  data : dataReducer,

});
export default rootReducer;