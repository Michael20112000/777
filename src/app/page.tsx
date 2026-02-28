'use client'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const Btn = styled(Button)`
  position: relative;
`

const Home = () => {
  return (
    <>
      fresh clean project <Btn variant='contained'>Contained</Btn>
    </>
  )
}

export default Home
