import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#E57CD8",
      contrastText: "#FFF3F2",
    },
    error: {
      main: "#FF7070",
    },
    background: {
      default: "#F7D8F3",
      paper: "#FFF3F2",
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
