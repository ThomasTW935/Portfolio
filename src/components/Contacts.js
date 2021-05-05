import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {ICONS} from '../data/Data';

export default function Contacts() {
  return (
    <div className='contact'>
        <span>
          <FontAwesomeIcon icon={faEnvelopeSquare}/>
          <span>thomastw935@gmail.com</span>
        </span>
        <span>
          <FontAwesomeIcon icon={faFilePdf}/>
        </span>
      <div className='links'>
        <a href='https://github.com/ThomasTW935' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={ICONS.GITHUB.icon}/></a>
        <a href='https://github.com/ThomasTW935' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={ICONS.LINKEDIN.icon}/></a>
      </div>
  </div>
  )
}
