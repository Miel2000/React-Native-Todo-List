import { createStore } from 'redux';
import rootReducer from './reducers/index';

export default createStore(rootReducer);


const store = {
    tasksList: [
        {
            id: 1,
            title: "exemple de tache yo",
            completed: false
        }
    ]
}