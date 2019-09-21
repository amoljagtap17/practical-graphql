import React from 'react'

import ApolloProvider from './ApolloProvider'
import User from './User'
import AddUserModal from './AddUserModal'

const App = () => (
  <ApolloProvider>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <div className="brand-logo">GraphQL React</div>
        </div>
      </nav>
    </div>
    <div className="container" style={{ marginTop: '50px' }}>
      <User />
    </div>
    <div className="fixed-action-btn">
      <button
        data-target="addUserModal"
        className="btn modal-trigger btn-floating btn-large red"
      >
        <i className="large material-icons">add</i>
      </button>
    </div>
    <AddUserModal />
  </ApolloProvider>
)

export default App
