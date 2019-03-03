import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import reduxTestReducer from './reduxTestReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    tests: reduxTestReducer
})

export default rootReducer