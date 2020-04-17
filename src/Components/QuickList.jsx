import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Fab, Button } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import TableResults from "./Table";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  absolute: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(4),
    zIndex: "10",
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/List">Go to list</Link>
      <TableResults />
    </div>
  );
  const anchor = "bottom";
  return (
    <div>
      <React.Fragment key={anchor}>
        <Fab color="primary" className={classes.absolute}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ListIcon style={{ color: "#FFF" }}> </ListIcon>
          </Button>
        </Fab>
        <Drawer
          color="primary"
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
