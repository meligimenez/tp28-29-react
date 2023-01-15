import React from 'react';
import { Metrics } from './Metrics';

export function ContentRowMovies() {

  const metrics = [
    {
      id: 1,
      title: 'Movies',
      color: 'primary',
      icon: 'fa-film',
      data: '21'
    },
    {
      id: 2,
      title: 'Awards',
      color: 'success',
      icon: 'fa-award',
      data: '79'
    },
    {
      id: 3,
      title: 'Users',
      color: 'warning',
      icon: 'fa-user',
      data: '49'
    }
  ]
  return (
    <div className="row">

      {
        metrics.map(({ id, title, icon, color, data }) => (
          <Metrics key={id}
            title={title}
            icon={icon}
            color={color}
            data={data} />
        ))
      }

    </div>
  )
}

export default ContentRowMovies