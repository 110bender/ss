import React from "react";
import { Grid, Box, Avatar, Typography } from "@material-ui/core";
import TableResults from "./Table";
import logo from "../assets/SSlogo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./QuickList";

const useStyles = makeStyles({
  container: {
    paddingBottom: "8%",
  },
  logo: {
    maxWidth: "4em",
  },
  header: {
    marginTop: "3%",
    padding: "0 5%",
  },
});

function Search() {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item container className={classes.header}>
        <Grid item xs={1}>
          <Link to="/">
            <img src={logo} className={classes.logo} />
          </Link>
        </Grid>
        <Grid item xs={10} />
        <Grid item xs={1}>
          <Box display="flex" justifyContent="flex-end">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />{" "}
          </Box>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Box
            display="flex"
            justifyContent="center"
            m={1}
            p={1}
            bgcolor="background.paper"
          >
            <Typography variant="h5" color="primary">
              Search bar
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <TableResults />
      <TableResults />
      <TableResults />
      <TemporaryDrawer />
    </Grid>
  );
}
export default Search;
