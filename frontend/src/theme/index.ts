import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#A4CCF4",
      paper: "#D7EBFE",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
