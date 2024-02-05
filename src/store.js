import { createStore } from 'redux';
import rootReducer from './reducers'; // You will define this later

const store = createStore(rootReducer);

export default store;
