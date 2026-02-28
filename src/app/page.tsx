'use client'

import Image from 'next/image'
import { Stack, Button, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const FirstSection = styled(Stack)({
  position: 'relative',
  minHeight: '100vh',
  background: "#031221 url('/bg.jpg') center top / cover no-repeat",
  padding: 15,

  '&::after': {
    content: '',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 362,
    background: 'linear-gradient(to top, rgba(0,0,0,1) 70px, transparent 100%)',
    pointerEvents: 'none',
    opacity: 0.7,
  },

  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
})

const PictureLogotype = styled(Image)``

const Picture777 = styled(Image)`
  margin-top: 48px;
  margin-bottom: 32px;
`

const OpenGameButton = styled(Button)``

const SecondSection = styled(Box)`
  min-height: 100vh;
`

const Home = () => {
  return (
    <>
      <FirstSection justifyContent='center' alignItems='center'>
        <PictureLogotype
          src='/logotype.png'
          width={264}
          height={120}
          alt='Logotype'
        />
        <Picture777 src='/777.png' width={326} height={200} alt='777 picture' />
        <OpenGameButton variant='gradient'>Open the game</OpenGameButton>
      </FirstSection>
      <SecondSection></SecondSection>
    </>
  )
}

export default Home
