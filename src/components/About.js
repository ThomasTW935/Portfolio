import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare, faFilePdf} from '@fortawesome/free-solid-svg-icons'


export default function About() {
  return (
    <div className='aboutMe'>
    <h1>Hi!</h1>
    <div className='contact'>
      <p>
        <FontAwesomeIcon icon={faEnvelopeSquare}/>
        <span>thomastw935@gmail.com</span>
      </p>
      <p>
        <FontAwesomeIcon icon={faFilePdf}/>
      </p>
      <div className='links'>
        <a href='https://github.com/ThomasTW935' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
      </div>
    </div>
  </div>
  )
}
