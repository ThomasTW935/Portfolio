import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ICONS} from '../data/Data'

export default function Project({project}) {
    const {image, title, description, skills } = project
    const {github,live} = project.links
    return (
        <div className='project'>
          <div className='project__image'><img alt={`${title}`} src={image}/></div>
          <div className='project__details'>
            <p className='project__title'>{title}</p>
            <section className='project__cta'>
              <a href={github} target='_blank' rel='noreferrer' className='github project__skill'>
                <FontAwesomeIcon  icon={ICONS.GITHUB.icon} />
                <span>Github</span>
              </a>
              <a href={live} target='_blank' rel='noreferrer' className='live'>LIVE</a>
            </section>
            <div className='project__skills'>
              {
                skills.map((skill,index)=>
                  <div className='project__skill' key={index}>
                    <FontAwesomeIcon icon={skill.icon} color={skill.color}/>
                    <span>{skill.name}</span>
                  </div>
                )
              }
            </div>
            <p className='project__description'>{description}</p>
            
          </div>
        </div>
    )
}
