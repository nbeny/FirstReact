/**
 * 26. Il faut export comme dans reducer_users.js, default function avec 2paramètres (state, action)
 *     Le state en paramètre n'est pas le state d'un component, c'est le state relatif à ce reducer (reducer_activeUser.js)
 * 27. Il faut switcher l'action que l'on à reçue notamment sur son type 
 *     Pour utiliser l'action USER_SELECTED il faut l'importer
 * 28. On return le payload de notre action qui contient le user
 * 29. Puis on return le state
 * 30. Il faut binder ce state à un nom de variable donc il faut aller dans l'index de nos reducers | (31. dans reducers/index.js)
 * 44. Utiliser le raccourci ES6 dans la propriété (state) pour définir les valeurs par défault du state
 */

import { USER_SELECTED } from '../actions/index'

export default function(state = null ,action){
    switch(action.type){
        case USER_SELECTED :
            return action.payload;
        default: 
            return state;
    }
}