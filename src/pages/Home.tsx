import * as React from 'react'
import Hero from '../components/Hero'
import Inputs from '../components/Inputs'
import Section from '../components/Section'

const Home = () => {
  const retrieveId = (id?: number) => {
    console.log('retrieveId', id)
  }

  return (
    <>
      <Hero />
      <Section>
        <Inputs countryId={retrieveId} />
      </Section>
    </>
  )
}

export default Home
