import React from 'react'

export default function Project({project}) {
    const {image, title, message} = project
    const {github,live} = project.links
    return (
        <div className='project'>
          <div className='project__image'><img src={image} alt='test'/></div>
          <h2 className='project__name'>{title}</h2>
          <p>{message}</p>
          <section className='project__buttons'>
            <a target='_blank' rel='noreferrer' href={github} className='github'>Github</a>
            <a target='_blank' rel='noreferrer' href={live} className='live'>Live Demo</a>
          </section>
        </div>
    )
}
