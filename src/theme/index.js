import { typographyVariants } from './typographyVariants'

const palette = {
  background: {
    light: {
      color: '#FFFFFF'
    },
    main: {
      color: '#F2F2F2'
    }
  },
  borders: {
    main: {
      color: '#F1F1F1'
    }
  },
  primary: {
    main: {
      color: '#E53935',
      contrastText: '#FFFFFF'
    }
  },
  secondary: {
    main: {
      color: '#00BCD4',
      contrastText: '#000000'
    }
  },
  tertiary: {
    main: {
      color: '#737B85',
      contrastText: '#FFFFFF'
    }
  },
  modes: {
    light: {},
    dark: {}
  }
}

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
}

export default {
  palette,
  typographyVariants,
  breakpoints,
  fontFamily: '\'Rubik\', sans-serif',
  borderRadius: '8px',
  transition: '200ms ease-in-out'
}