/**
 * Components qui s'occupe d'afficher les informations reçus(dans les props) par le reducer
 * 6. Création d'une class
 * 7. Créer une List (<ul></ul>)
 * 8. On prévoit de recevoir les props (pas encore définie) puis on map cette props (pour avoir un array)
 * 9. Puis on return un <li></li> avec en attribu le state id de notre user (définie dans reducer_users.js), puis on affiche le name associé à notre id
 * 10. Importer user_list.js dans notre app | (11. dans app.js)
 * 12. /!\/!\ Créer un pont entre react et redux (grace à l'import react-redux) /!\/!\
 * 13. Déclarer la function mapStateToProps(state) (mapStateToProps est appelé à chaque fois que la state reçue du reducer, change)
 * 14. On stock le retour de reducer_users.js (le retour étant state.users)
 * 15. On doit connecter tout notre container (user_list.js) à redux pour ça on rajoute à l'export : connect(mapStateToProps)
 * 16. A partir de la on a accès a notre state de reducer_users.js | (17. dans actions/index.js)
 * 17. On doit import bindActionCreators pour que l'action soit envoyer à tous les reducers
 * 18. Créer la function mapDispatchToProps avec 1 paramètre (dispatch)
 * 19. Puis on appel la function que l'on a créer dans actions/index.js avec 2 paramètres (nom de props : function), dispatch
 * 21. Pour que tout fonctionne il faut rajouter mapDispatchToProps dans l'export après mapStateToProps
 * 22. Maintenant il faut appeler l'actions dans notre <li></li> avec onClick et notre selectUser que l'on a stocker avec mapDispatchToProps
 *     dans selectUser
 * 23. on utilise une function fléché pour binder la props {(this.props.selectUser(user).bind(this)} devient {() => this.props.selectUser(user)}
 *     | (24. dans index.js)
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'

class UserList extends Component {
    render () {
        return (
            <div className="container">
                <ul className="col-md-4">
                    {
                        this.props.myUsers.map((user) => {
                            return (
                                <li className="list-group-item"
                                    key={user.id}
                                    onClick={ () => this.props.selectUser(user) }>
                                    {user.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myUsers : state.users
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)