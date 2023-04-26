import React from 'react'
import Base from '../Base/Base'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

const ErrorPage = () => {
    const history = useHistory()
  return (
    <Base
    title = "Have you lost your way"
    subtitle= "Please click the below button to route back to dashboard">
    <Button className='btn' variant='contained' color='primary' onClick={() => history.push('/')}>Dashboard</Button>
    </Base>
  )
}

export default ErrorPage