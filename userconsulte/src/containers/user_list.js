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
                        this.props.ftUsers.map((user) => {
                            return (
                                <li className="list-group-item"
                                    key={user.id}
                                    onClick={ () => this.props.selectUser(user)}>
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
        ftUsers : state.users
    }
}

function mapDispatchToProps(dispatch){
    bindActionCreators({selectUser:selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)