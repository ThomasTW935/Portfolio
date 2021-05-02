import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ICONS} from '../data/Data'

export default function Project({project}) {
    const {image, title, message, skills } = project
    const {github,live} = project.links
    return (
        <div className='project'>
          <div className='project__image'><img alt={`${title}`} src={image}/></div>
          <div className='project__details'>
            <div className='project__title'>
              <h1>{title}</h1>
              <section className='project__cta'>
                <a href={github} target='_blank' rel='noreferrer' className='github project__skill'>
                  <FontAwesomeIcon size='2x' icon={ICONS.GITHUB.icon} />
                  <span>Github</span>
                </a>
                <a href={live} target='_blank' rel='noreferrer' className='live'>Live</a>
              </section>
            </div>
            <div className='project__skills'>
              {
                skills.map((skill,index)=>
                  <div className='project__skill' key={index}>
                    <FontAwesomeIcon icon={skill.icon} size='2x' color={skill.color}/>
                    <span>{skill.name}</span>
                  </div>
                )
              }
            </div>
            <p className='project__description'>LoiruenakjK jnsadkjnnaksjdnqi jnsdks</p>
          </div>
        </div>
    )
}
