import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserDetail extends Component {
  render() {
      const {myActiveUser} = this.props
      if(!myActiveUser){
          return <div>Selectionnez un utilisateur pour démarrer</div>
      }
      return (
          <div className="container">
              <h3>Détail de {myActiveUser.name}</h3>
              <ul className="col-md-4">
                  <li className="list-group-item">ID: {myActiveUser.id}</li>
                  <li className="list-group-item">Role: {myActiveUser.role}</li>
                  <li className="list-group-item">Actif: {myActiveUser.active}</li>
              </ul>
          </div>
      )
  }
}

function mapStateToProps(state) {
  return {
      myActiveUser: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);
