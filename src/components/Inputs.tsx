import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { db } from '../../data'

export type House = {
  image: string
  title: string
  label: string
  description: string
  countryId: number
  id: number
}
export const Inputs = ({
  setFieldValue,
  setFieldTouched,
  error,
  touched,
  helperText,
}: {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void
  setFieldTouched: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => void
  error: boolean
  touched: boolean
  helperText?: string
}) => {
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={db}
        sx={{ width: 300 }}
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            error={error && touched}
            helperText={helperText}
            label="Destination"
          />
        )}
        onChange={(e, value) => {
          setFieldTouched('countryId', true, true)
          setFieldValue('countryId', value?.countryId || null)
        }}
        onBlur={() => setFieldTouched('countryId', true, true)}
      />
    </>
  )
}

export default Inputs
