import { Formik } from 'formik'
import React from 'react'
import Hero from '../components/Hero'
import Inputs from '../components/Inputs'
import Section from '../components/Section'
import * as Yup from 'yup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import LoadingButton from '@mui/lab/LoadingButton'
import styled from '@mui/material/styles/styled'

const Home = () => {
  const submitCountry = (countryId: number | null) => {
    return console.log(countryId)
  }

  const SearchCountrySchema = Yup.object().shape({
    countryId: Yup.number().typeError('Select a country'),
  })

  return (
    <>
      <Hero />
      <Section>
        <Box>
          <Formik
            initialValues={{ countryId: null } as { countryId: number | null }}
            validationSchema={SearchCountrySchema}
            onSubmit={({ countryId }, { setSubmitting }) => {
              submitCountry(countryId)
              setTimeout(() => {
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
                      Submit
                    </LoadingButton>
                  )}
                </SearchForm>
              )
            }}
          </Formik>
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
})
