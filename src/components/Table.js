import React from 'react';
import { RowTable } from './RowTable'

export function Table({ data }) {

  return (
    <>
      <h1 className='h3 mb-2 text-gray-800'>All the movies in the Databse</h1>
      <div className="container-fluid">
        <div className='table-responsive'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Título</th>
                <th scope="col">Duración</th>
                <th scope="col">Rating</th>
                <th scope="col">Género</th>
                <th scope="col">Premios</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((movie) => <RowTable {...movie} key={movie.id} />)
              }

            </tbody>

            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Título</th>
                <th scope="col">Duración</th>
                <th scope="col">Rating</th>
                <th scope="col">Género</th>
                <th scope="col">Premios</th>
              </tr>
            </thead>

          </table>
        </div>
      </div>
    </>
  )
}

export default Table