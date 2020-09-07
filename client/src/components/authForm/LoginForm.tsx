import React, { useState } from "react";
import { connect } from "react-redux";

// Material-UI Imports
import { Grid, TextField, Theme, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

import { loginUser } from "../../actions/action.auth";
import { LoginUserDto } from "../../actions";

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

interface LoginUserFormProps {
  loginUser: (formData: LoginUserDto) => void;
}

const LoginUserForm = ({ loginUser }: LoginUserFormProps) => {
  const classes = useStyles();

  const [formData, setFormData] = useState<LoginUserDto>({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = () => {
    loginUser(formData);
  };

  return (
    <Grid container className={classes.root}>
      {/* Left Gutter */}
      <Grid item sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        {/* Form Grid Start */}
        <Grid container spacing={2} className={classes.formEle}>
          <Grid xs={12} sm={6} item>
            <TextField
              fullWidth
              id="username-input"
              name="username"
              value={username}
              onChange={onChange}
              label="Username"
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              fullWidth
              id="password-input"
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} item>
            <Button
              onClick={onSubmit}
              fullWidth
              variant="contained"
              color="secondary"
            >
              Log In
            </Button>
          </Grid>
        </Grid>
        {/* Form Grid End */}
      </Grid>
      {/* Right Gutter */}
      <Grid item sm={3}></Grid>
    </Grid>
  );
};

export default connect(null, { loginUser })(LoginUserForm);
