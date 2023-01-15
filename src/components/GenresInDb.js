import React from 'react'
import Genre from './Genre'

export function GenresInDb() {

  let genres = [
    { id: 1, name: 'Accion' },
    { id: 2, name: 'Animacion' },
    { id: 3, name: 'Aventura' },
    { id: 4, name: 'Ciencia Ficcion' },
    { id: 5, name: 'Comedia' },
    { id: 6, name: 'Documental' },
    { id: 7, name: 'Drama' },
    { id: 8, name: 'Fantasia' },
    { id: 9, name: 'Infantiles' },
    { id: 10, name: 'Musical' }
  ]

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
        </div>
        <div className="card-body">
          <div className="row">

            {
              genres.map(({ name, id }) => (
                <Genre name={name} key={id} />
              ))
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default GenresInDb