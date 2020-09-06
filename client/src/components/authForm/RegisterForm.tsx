import React from "react";
import { Grid, TextField, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { marginTop: "2rem" },
    formEle: {
      textAlign: "center",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  })
);

const RegisterForm = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {/* Left Gutter */}
      <Grid item sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        {/* Form Grid Start */}
        <Grid container spacing={2} className={classes.formEle}>
          <Grid xs={12} sm={6} item>
            <TextField fullWidth id="first-name-input" label="First Name" />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField fullWidth id="last-name-input" label="Last Name" />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField fullWidth id="first-name-input" label="Username" />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              fullWidth
              id="last-name-input"
              type="password"
              label="Password"
            />
          </Grid>
        </Grid>
        {/* Form Grid End */}
      </Grid>
      {/* Right Gutter */}
      <Grid item sm={3}></Grid>
    </Grid>
  );
};

export default RegisterForm;
