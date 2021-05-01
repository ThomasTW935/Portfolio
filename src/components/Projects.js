import React from 'react'
import testImg from '../images/test.png'
import WindowsCalculator from '../images/Windows Calculator.PNG'
import Project from './Project'

export default function Projects() {
    const test = {
        image: WindowsCalculator, 
        title: 'Windows Calculator Clone', 
        message:'Windows Calculator Clone using React with SASS', 
        links: {
            github:'https://github.com/ThomasTW935/Windows-Calculator',
            live: 'https://thomastw935-windows-calculator.netlify.app/'
        }
    }
    return (
        <div className='projects'>
       
        <div className='project'>
          <div className='project__image'><img src={WindowsCalculator} alt='test'/></div>
          <h2 className='project__name'>Windows Calculator Clone</h2>
          <p>Windows Calculator Clone using React with SASS</p>
          <section className='project__buttons'>
            <a target='_blank' rel='noreferrer' href='https://github.com/ThomasTW935/Windows-Calculator' className='github'>Github</a>
            <a target='_blank' rel='noreferrer' href='https://thomastw935-windows-calculator.netlify.app/' className='live'>Live Demo</a>
          </section>
        </div>
        <Project  project={test}/>
        <div className='project'>
          <div className='project__image'><img src={testImg} alt='test'/></div>
          <h2 className='project__name'>Test</h2>
          <p>File edit selection View go run Terminal Help App.js-React-Visual Studio Code</p>
          <section className='project__buttons'>
            <a href='/' className='github'>Github</a>
            <a href='/' className='live'>Live Demo</a>
          </section>
        </div>
        <div className='project'>
          <div className='project__image'><img src={testImg} alt='test'/></div>
          <h2 className='project__name'>Test</h2>
          <p>File edit selection View go run Terminal Help App.js-React-Visual Studio Code</p>
          <section className='project__buttons'>
            <a href='/' className='github'>Github</a>
            <a href='/' className='live'>Live Demo</a>
          </section>
        </div>
      </div>
    )
}
