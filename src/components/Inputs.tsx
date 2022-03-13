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

export const Inputs = ({countryId}: {countryId: (id?:number) => void}) => {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={db}
      sx={{ width: 300 }}
      onChange={(e, newValue) => countryId(newValue?.countryId)}
      renderInput={(params) => <TextField {...params} label="Destination" />}
    />
  )
}

export default Inputs
