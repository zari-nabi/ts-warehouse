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


export const darkTheme = createTheme({
  direction:"rtl",
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 15,
      },
    },
    MuiFormLabel: {
      root: {
        color: "#BABABA",
        "&.Mui-focused": {
          color: "#BABABA",
        },
      },
    },
    // MuiDialog: {
    //   paperWidthSm: { maxWidth: "min-content",minWidth:"600px" },
    // },
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
      },
    },

    MuiTable: {
      root: {
        "& th.MuiTableCell-sizeSmall": {
          whiteSpace: "nowrap",
        },
        "& .MuiTableCell-sizeSmall": {
          border: "1px solid #4A4C59",
        },
      },
    },
    MuiInputBase: {
      root: {
        minHeight: 50,
        borderRadius: 15,
      },
    },
    MuiButton: {
      contained: {
        height: 50,
        margin: "5px 0",
        borderRadius: 15,
        background: "linear-gradient(#FCD300 ,#BC7708)",
      },
      label: {
        color: "#000",
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
          backgroundColor: "#0F142B",
        },
        "& tr:nth-child(2n)": {
          backgroundColor: "#000312",
        },
        "& tr.Mui-selected": {
          backgroundColor: "#605639",
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
        color: "#bababa",
      },
    },
    MuiInput: {
      root: {
        backgroundColor: "#000312",
        input: {
          padding: "0 5px",
        },
        "&$disabled": {
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
        background: "#393B45",
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
    type: "dark",
    primary: {
      main: "#0e1014",
    },
    secondary: {
      main: "#FFD739",
    },
    text: {
      primary: "#BABABA",
      secondary: "#FFD739",
    },
    background: {
      paper: "#282C37",
    },
    
  },
  customColors: {
    main: "#5E606D",
    dark: "#3D3F4B",
    inputDisable: "#282C37",
    title: "#fff",
    dashboardBg: "#03051182",
  },
});
