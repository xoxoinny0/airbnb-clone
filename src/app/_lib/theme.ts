"use client";
import { createTheme } from "@mui/material/styles";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
// });

const theme = createTheme({
  cssVariables: true,
  breakpoints: {
    values: {
      xs: 550,
      sm: 745,
      md: 950,
      lg: 1128,
      xl: 1640,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#FF385C",
    },
  },
  typography: {
    fontFamily:
      "Airbnb Cereal VF, Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      // Global CSS는 여기에서
      styleOverrides: {
        body: {
          fontFamily:
            " Airbnb Cereal VF, Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
          fontSize: 14,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
