import { colors } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
// import { green, amber, red, blue, lightBlue } from "@material-ui/core/colors";
declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    status?: {
      danger: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    status?: {
      danger: React.CSSProperties['color']
    }
  }
}

// declare module "@material-ui/core/styles/createPalette" {
//   interface Palette {
//     neutral: Palette['primary'];
//   }
//   interface PaletteOptions {
//     neutral: PaletteOptions['primary'];
//   }
// }
const theme = createTheme({
  // direction: "ltr",
  direction:"rtl",


  overrides: {},
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
       main: '#e4c632',
       dark:"#d8b622",
    },

    // neutral: {
    //   main: '#FCFCFC',
    //   dark:"#E1E1E1",
      
    // },
    text: {
      primary: '#444',
      secondary: '#183a4d',
    },
    
  },

  props:{
    MuiIconButton:{
      disableRipple:true
    }
  },
});
export default theme;
