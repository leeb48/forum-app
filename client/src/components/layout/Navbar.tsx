import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Theme,
  Badge,
  Menu,
  MenuItem,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles, createStyles } from "@material-ui/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
  })
);

const authButtons = (
  <Fragment>
    <IconButton component={RouterLink} to="/register">
      <Badge>
        <AddCircleOutlineIcon />
      </Badge>
    </IconButton>
    <IconButton>
      <Badge>
        <LockOpenIcon />
      </Badge>
    </IconButton>
    <IconButton>
      <Badge>
        <ExitToAppIcon />
      </Badge>
    </IconButton>
  </Fragment>
);

// Desktop Menu
const Navbar = () => {
  const classes = useStyles();

  const navButtons = (
    <Fragment>
      <Button component={RouterLink} to="/">
        <Typography variant="h6">Home</Typography>
      </Button>

      <Button component={RouterLink} to="/">
        <Typography variant="h6">Profile</Typography>
      </Button>
      <Button component={RouterLink} to="/">
        <Typography variant="h6">Posts</Typography>
      </Button>
    </Fragment>
  );

  // Mobile Menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mobileMenu = (
    <Fragment>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-nav-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={RouterLink} to="/" onClick={handleClose}>
          Home
        </MenuItem>
        <MenuItem component={RouterLink} to="/" onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem component={RouterLink} to="/" onClick={handleClose}>
          Posts
        </MenuItem>
      </Menu>
    </Fragment>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden smUp>
          <div className={classes.grow}>{mobileMenu}</div>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.grow}>{navButtons}</div>
        </Hidden>
        <div>{authButtons}</div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
