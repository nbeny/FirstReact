/**
 * Fichier de configuration des reducers
 * On viens y associé le return des reducers dans une variable qui sera la state de notre application
 * 
 * 2. On import notre reducer (via reducer_users.js)
 * 3. Donner un nom a ce morceaux de state retourner | (4. dans reducer_users.js)
 * 31. On ajoute une nouvelle ligne (activeUser)
 * 32. On import notre reducer (recuer_activeUser.js)
 * 33. Il faut créer un nouveaux container qui contiendra tout les détails de l'users (comme une view) | (34. dans containers/user_detail.js)
 */
import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ActiveUserReducer from './reducer_active_user'

const rootReducer = combineReducers({
  users : UsersReducer,
  activeUser : ActiveUserReducer
});

export default rootReducer;