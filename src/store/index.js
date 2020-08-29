import {createStore} from 'redux'

import rootReducer from './rooter-reducer'

const store = createStore(rootReducer)
export default store