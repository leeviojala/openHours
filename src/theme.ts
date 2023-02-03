import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    closed: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    closed?: React.CSSProperties;
    today?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    closed: true;
    today: true;
  }
}
export const theme = createTheme({
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          marginTop: "24px",
          padding: "0px 24px 0px 24px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#a1a2a4",
          borderWidth: "1px",
        },
      },
    },
  },
  typography: {
    h6: {
      fontWeight: 700,
      lineHeight: 1.875,
      fontSize: "1.5rem",
    },
    subtitle1: {
      lineHeight: 1.375,
    },
    body1: {
      fontWeight: 500,
      lineHeight: 1.375,
      textTransform: "capitalize",
    },
    closed: {
      color: "#A1A2A4",
      fontWeight: 400,
      lineHeight: 1.375,
    },
    today: {
      color: "#5BCB02",
      fontSize: "0.75rem",
      lineHeight: 1,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
  palette: {
    background: {
      default: "#F8F8F8",
    },
    primary: {
      main: "#f44336",
    },
  },
  shape: {
    borderRadius: 10,
  },
});
