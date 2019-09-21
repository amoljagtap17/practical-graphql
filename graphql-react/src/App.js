import React from 'react'

import ApolloProvider from './ApolloProvider'
import User from './User'

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
      <button className="btn-floating btn-large red">
        <i className="large material-icons">add</i>
      </button>
    </div>
  </ApolloProvider>
)

export default App
