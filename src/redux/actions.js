import { ADD_TASK, TOGGLE_TASK } from "./actionsType";

//  action = {
//     type: nom_de_laction,
//     payload: data
// }


export const addTask = title => ({
    type: ADD_TASK,
    payload: {
        id: new Date().getTime(),
        title: title,
        completed : false,
    }

})

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id
  },
});