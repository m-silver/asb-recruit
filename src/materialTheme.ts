import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: 'white'
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: '#FCBD1B',
          zIndex: 1000
        }
      }
    }
  }
})

export default theme
