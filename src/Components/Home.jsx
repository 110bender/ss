import React from "react";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    justifyContent: "flex-end",
    marginTop: "3%",
    paddingRight: "5%",
  },
  headerText: {
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  body: {
    marginTop: "10%",
  },
  bodyCenter: {
    alignContent: "center",
  },
  bodyTextH1: {
    fontWeight: "bold",
    textAlign: "center",
  },
  bodyTextSb1: {
    fontWeight: "bold",
    textAlign: "center",
  },
  searchbarbtn: {
    width: "70%",
  },
  mobilediv: {
    textAlign: "-webkit-center",
    marginTop: "10%",
  },
  mobiletext: {
    marginBottom: "3%",
  },
  mobiletext1: {
    marginTop: "2%",
    fontWeight: "bold",
  },
});
function Home() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item container className={classes.header}>
        <Typography className={classes.headerText}>
          <Link to="/Login">Log in / sign up</Link>
        </Typography>
      </Grid>
      <Grid item container className={classes.body}>
        <Grid
          item
          container
          sm={12}
          className={classes.bodyCenter}
          direction="column"
        >
          <Typography
            variant="h2"
            className={classes.bodyTextH1}
            color="primary"
          >
            SCIENTIFIC SEARCH
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.bodyTextSb1}
            color="textPrimary"
          >
            Reach all scientific articles in one plateforme & get insights about
            your searches.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Link to="/feed">
              <Button className={classes.searchbarbtn} color="primary">
                Search!
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Home;
