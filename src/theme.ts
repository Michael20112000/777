import { createTheme } from '@mui/material/styles'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true
  }
}

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {},
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            maxWidth: 360,
            width: '100%',
            background:
              'linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)',
            borderRadius: 16,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 1.4,
            letterSpacing: 0,
            color: 'white',
            padding: 16,
          },
        },
      ],
    },
  },
})
