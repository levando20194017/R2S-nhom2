import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import appReducer from './reducers/appReducer'

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer
})
const store = createStore(rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__())
export default store