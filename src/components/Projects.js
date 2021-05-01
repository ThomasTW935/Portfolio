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
    const projects = [
        {
            image: WindowsCalculator, 
            title: 'Windows Calculator Clone', 
            message:'Windows Calculator Clone using React with SASS', 
            links: {
                github:'https://github.com/ThomasTW935/Windows-Calculator',
                live: 'https://thomastw935-windows-calculator.netlify.app/'
            }
        }
    ]
    return (
        <div className='projects'>
            {
                projects.map((project,index)=> 
                    <Project key={index} project={project}/>
                )
            }
        </div>
    )
}
