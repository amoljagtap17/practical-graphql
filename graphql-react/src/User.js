import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Spinner from './Spinner'

const USERS = gql`
  query getUsers {
    users {
      id
      name
      car {
        id
        make
        model
        colour
      }
    }
  }
`

const Collapsible = ({ data }) => {
  useEffect(() => {
    let elems = document.querySelectorAll('.collapsible')
    M.Collapsible.init(elems)
  }, [])

  const renderedList = data.users.map(({ id, name, car }) => (
    <li key={id}>
      <div className="collapsible-header">{name}</div>
      <div className="collapsible-body">
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>Owned Cars:</h5>
          </li>
          {car.map(({ id, make, model, colour }) => (
            <li className="collection-item" key={id}>
              {make} - {model}
              <span
                className={`new badge ${colour.trim().toLowerCase()}`}
                data-badge-caption="color"
              >
                {colour}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  ))

  return renderedList
}

const User = () => {
  const { loading, error, data } = useQuery(USERS)

  if (loading) return <Spinner />
  if (error) return <p>Error :(</p>

  return (
    <div className="row">
      <div className="col s12">
        <ul className="collapsible popout">
          <Collapsible data={data} />
        </ul>
      </div>
    </div>
  )
}

export default User
