import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  makeStyles,
  alpha,
  Avatar,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
    width: "100%",
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {/* <Toolbar component={Box} flex justifyContent="space-between"> */}
        <Typography variant="h6" className={classes.logoLg}>
          Lama Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LAMA
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/7897258/pexels-photo-7897258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
