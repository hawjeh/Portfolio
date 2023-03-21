import React from 'react'
import Card from './Card'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faLaptopCode, faCode, faRuler, faCertificate, faCoffee, faSitemap } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faLaptopCode)
library.add(fas, faCode)
library.add(fas, faRuler)
library.add(fas, faCertificate)
library.add(fas, faCoffee)
library.add(fas, faSitemap)

const Service = () => {
  const cards = [
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Solution Consultation',
      description: 'Consultation for integration and digital solution'
    },
    {
      icon: 'fa fa-cloud',
      title: 'Cloud Architecture & DevOps',
      description: 'Experienced in cloud architecturing and devops solution'
    },    
    {
      icon: 'fa-solid fa-code',
      title: 'Professional Web Development',
      description: 'Hands on web solution, product and CMS development'
    },
    {
      icon: 'fa-solid fa-ruler',
      title: 'Coach and Resource Planning',
      description: 'Coach and code review, screen and interview candidates'
    },
    {
      icon: 'fa-solid fa-certificate',
      title: 'Quality Assurance',
      description: 'Analyze, tech review, software testing and best practices'
    },
    {
      icon: 'fa-solid fa-coffee',
      title: 'Modular Thinking',
      description: 'Ability to solve problems by smaller paradigm and all'
    },
    
  ];

  return (
    <section id="service" className="animate__fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <h2>What I do</h2>
          </div>
        </div>
        <div className='my-5 row service-card-row'>
          {cards.map((card, i) => {
            return (
              <Card key={i} card={card} />
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default Service;
