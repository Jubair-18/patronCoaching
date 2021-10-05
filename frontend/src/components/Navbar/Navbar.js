import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from './styles';
import DrawerComponent from "./Drawer/DrawerComponent";

function Navbar({ isAdmin }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
            P@TRON
        </Typography>
        {isMobile ? (
          <DrawerComponent isAdmin={isAdmin}/>
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            {isAdmin === true && <>
            <Link to="/admin" className={classes.link}>
              Admin
            </Link>
            <Link to="/studentlist" className={classes.link}>
              student List
            </Link>
            </>}
            <Link to="/signin" className={classes.link}>
              Registration
            </Link>
            <Link to="/teacherList" className={classes.link}>
              TeacherList
            </Link>

            <Link to="/graph" className={classes.link}>
              Success Rate
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;