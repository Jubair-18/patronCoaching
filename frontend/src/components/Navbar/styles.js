import { makeStyles, theme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: '-1rem',
      display: "flex",
    },
    logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "15px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));

  export default useStyles;