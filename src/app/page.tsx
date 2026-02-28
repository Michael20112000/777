'use client'

import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const FirstSection = styled(Box)`
  position: relative;
  min-height: 100vh;
  background: url('/bg.jpg') center top / cover no-repeat;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 362px;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 70px,
      transparent 100%
    );
    pointer-events: none;
    opacity: 0.7;
  }
`

const SecondSection = styled(Box)`
  min-height: 100vh;
`

const Home = () => {
  return (
    <>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
    </>
  )
}

export default Home
