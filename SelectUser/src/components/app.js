/**
 * 11. On utilise notre container UserList dans la div | (12. dans user_list.js)
 * 35. Rajouter <UserDetail et l'importer | (36. dans user_detail.js)
 */
import React, { Component } from 'react';
import UserList from '../containers/user_list'
import UserDetail from '../containers/user_detail'


export default class App extends Component {
  render() {
      return (
          <div>
              <UserList />
              <UserDetail />
          </div>
      )
  }
}
