import { createTheme } from '@material-ui/core/styles'


declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    customColors: {
      main: React.CSSProperties['color'],
      dark: React.CSSProperties['color'],
      inputDisable: React.CSSProperties['color'],
      title: React.CSSProperties['color'],
      dashboardBg: React.CSSProperties['color'],
    }
  }
  interface ThemeOptions {
    customColors?: {
      main: string,
      dark: string,
      inputDisable: string,
      title: string,
      dashboardBg: string,
    },
  }
}
export const lightTheme = createTheme({
  direction:"rtl",
  
  overrides: {
  
    MuiOutlinedInput: {
      root: {
        borderRadius: 15,
      },
    },
    MuiFormLabel: {
      root: {
        color: "#686868",
        "&.Mui-focused": {
          color: "#686868",
        },
      },
    },
    MuiTextField: {
      root: {
        minHeight: 50,
        borderRadius: 15,
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#000312",
        disabled: {
          backgroundColor: "#282C37",
          border: "none",
        },
        
      },
      underline: {
        "&:before": {
          display: "none",
        },
      },
    },
    MuiSelect: {
      root: {
        filled: {
          background: "#000312",
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#BABABA",
          },
          "& .MuiFilledInput-underline:before": {
            display: "none",
          },
        },
        disabled: {
          backgroundColor: "#282C37",
          border: "none",
        },
      }
    },
    MuiTable: {
      root: {
        "& .MuiTableCell-sizeSmall": {
          border: "1px solid #4A4C59",
        },
      },
    },
    MuiInputBase: {
      root: {
        minHeight: 50,
      },
    },
    MuiButton: {
      contained: {
        height: 50,
        borderRadius: 15,
        background: "linear-gradient(#3B3D4B ,#272934)",
      },
      label: {
        color: "#fff",
      },
      containedSizeSmall: {
        height: 27,
        margin: "5px 0",
        borderRadius: 10,
        background: "linear-gradient(#272934 ,#272934)",
        "& .MuiButton-label": {
          color: "#FCD300",
          fontSize: 10,
        },
      },
    },
    MuiTableHead: {
      root: {
        backgroundColor: "#000312",
      },
    },
    MuiTableBody: {
      root: {
        "& tr:nth-child(1n)": {
          backgroundColor: "#5B6382",
        },
        "& tr:nth-child(2n)": {
          backgroundColor: "#43454E",
        },
        "& tr.Mui-selected": {
          backgroundColor: "#907d45",
        },
      },
    },
    MuiTableRow: {
      hover: {
        "&:hover": {
          backgroundColor: "#43454Ecc !important",
        },
      },
    },
    MuiTableCell: {
      head: {
        textAlign: "center",
        color: "#FFD739",
        verticalAlign: "bottom",
      },
      body: {
        color: "#D1D1D1",
        textAlign: "center",
      },
    },
    MuiTypography: {
      root: {
        color: "rgba(0, 0, 0, 0.60)",
      },
    },
    MuiInput: {
      root: {
        backgroundColor: "#000312",
        input: {
          padding: "0 5px",
        },
        disabled: {
          backgroundColor: "#282C37",
          border: "none",
        },
        
      },
      underline: {
        "&:before, &:after": {
          display: "none",
        },
      },
    },
    MuiMenu: {
      paper: {
        background: "#eee",
      },
    },
    MuiSnackbar: {
      root: {
        "& .MuiAlert-filledSuccess": {
          color: "#000",
          backgroundColor: "#78DF97",
        },
        "& .MuiAlert-filledInfo": {
          color: "#fff",
          backgroundColor: "#52BAD5",
        },
        "& .MuiAlert-filledWarning": {
          color: "#000",
          backgroundColor: "#FFBE0A",
        },
        "& .MuiAlert-filledError": {
          color: "#fff",
          backgroundColor: "#D14545",
        },
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 18,
        marginBottom: 16,
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FFD739",
    },
    text: {
      primary: "#686868",
      secondary: "#FFD739",
    },
    background: {
      paper: "#E1E1E6",
    },
  },
  customColors: {
    main: "#F9F9F9",
    dark: "#E1E1E6",
    inputDisable: "#E1E1E6",
    title: "#000",
    dashboardBg: "#fff",
  },
});
