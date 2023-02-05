import React from 'react'

function List({name, phone, id}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default List