import React, { useState } from "react";
import { connect } from "react-redux";

// Material-UI Imports
import { Grid, TextField, Theme, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

import { registerUser } from "../../actions/action.auth";
import { RegisterUserDto } from "../../actions";

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

interface RegisterFormProps {
  registerUser: (formData: RegisterUserDto) => void;
}

const RegisterForm = ({ registerUser }: RegisterFormProps) => {
  const classes = useStyles();

  const [formData, setFormData] = useState<RegisterUserDto>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const { firstName, lastName, username, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = () => {
    registerUser(formData);
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
              id="first-name-input"
              name="firstName"
              value={firstName}
              onChange={onChange}
              label="First Name"
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              fullWidth
              id="last-name-input"
              name="lastName"
              value={lastName}
              onChange={onChange}
              label="Last Name"
            />
          </Grid>
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
              Register
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

export default connect(null, { registerUser })(RegisterForm);
