import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import AddUserFormik from './AddUserFormik'

const AddUserModal = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.modal')
    M.Modal.init(elems)
  }, [])

  return <AddUserFormik />
}

export default AddUserModal
