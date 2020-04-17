import React from "react";
import {
  Paper,
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles({
  loginSigninPaper: {
    display: "table",
    margin: "auto",
    marginTop: "10%",
    padding: "2% 5% 2% 5%",
  },
  loginSigninHeader: {
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: "10%",
  },
  loginSigninbtn: {
    marginTop: "15%",
    width: "70%",
  },
  loginSigninfooter: {
    textAlign: "center",
    marginTop: "30%",
  },
});
function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Paper elevation={0} className={classes.loginSigninPaper}>
      <Typography
        variant="h3"
        color="primary"
        className={classes.loginSigninHeader}
      >
        Welcome
      </Typography>
      <TextField id="standard-basic" label="Username" fullWidth />
      <br />
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Typography variant="h6">Don’t remember your password?</Typography>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          className={classes.loginSigninbtn}
        >
          Sign in
        </Button>
      </Box>
      <Typography variant="h5" className={classes.loginSigninfooter}>
        Don’t have an account yet?{" "}
        <Link color="primary">Join the community</Link>
      </Typography>
    </Paper>
  );
}
export default Login;
