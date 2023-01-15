import React from 'react'

export function RowTable(props) {


  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.length}</td>
      <td>{props.rating}</td>
      <td><ul>
        {
          props.genres.map((item, i) => <li key={item + i}>{item}</li>)
        }
      </ul></td>
      <td>{props.awards}</td>

    </tr>
  )
}

export default RowTable