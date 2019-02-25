import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserDetail extends Component {
    render () {
        const user = this.props
        if(!user){
          return  <div>Selectionnez un utilisateur pour démarrer</div>
        }
        return (
            <div>
              <h3>Detail de : {user.name}</h3>
              <li>ID : {user.id}</li>
              <li>Role : {user.role} </li>
              <li>Actif : {user.active} </li>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail)
