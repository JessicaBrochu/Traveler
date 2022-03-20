import { Formik } from 'formik'
import React, { useState } from 'react'
import Hero from '../components/Hero'
import Inputs from '../components/Inputs'
import Section from '../components/Section'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import LoadingButton from '@mui/lab/LoadingButton'
import styled from '@mui/material/styles/styled'
import { db } from '../../data'
import CountryCard from '../components/CountryCard'

const Home = () => {
  const [data, setData] = useState(db)

  const submitCountry = (countryId: number | null) => {
    let newData: {
      image: string
      title: string
      label: string
      description: string
      countryId: number
      id: number
    }[] = []
    if (!countryId) return setData(db)
    db.map((item) => {
      if (item.countryId === countryId) {
        newData.push(item)
      }
    })
    setData(newData)
  }

  return (
    <>
      <Hero />
      <Section>
        <Box>
          <Formik
            initialValues={{ countryId: null } as { countryId: number | null }}
            onSubmit={({ countryId }, { setSubmitting }) => {
              // simulate sending data
              setTimeout(() => {
                submitCountry(countryId)
                setSubmitting(false)
              }, 1000)
            }}
          >
            {({
              errors,
              touched,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              setFieldTouched,
            }) => {
              const { countryId } = errors
              return (
                <SearchForm onSubmit={handleSubmit}>
                  <Inputs
                    setFieldValue={setFieldValue}
                    setFieldTouched={setFieldTouched}
                    error={!!countryId}
                    touched={!!touched.countryId}
                    helperText={countryId}
                  />
                  {!isSubmitting && (
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      sx={{ alignSelf: 'flex-start', height: '40px' }}
                    >
                      Search
                    </Button>
                  )}
                  {isSubmitting && (
                    <LoadingButton
                      loading
                      variant="contained"
                      size="large"
                      sx={{ alignSelf: 'flex-start', height: '40px' }}
                    >
                      Search
                    </LoadingButton>
                  )}
                </SearchForm>
              )
            }}
          </Formik>
          <CountryCard data={data} />
        </Box>
      </Section>
    </>
  )
}

export default Home

const SearchForm = styled('form')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '30px',
  gap: '10px',
})
