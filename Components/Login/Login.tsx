import React, { useState, useEffect } from "react";
import {
  Grid,
  OutlinedInput,
  FormControl,
  Button,
  IconButton,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../../Utils/HookForm/TextInput";
import { LoginStyle } from "./LoginStyle";
import Logo from "../../logo.svg";
import Img from "../../Assets/images/log1.png";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import LoginServices from "../../Services/Login/LoginServices";
import { IUserData, ILoginData } from "../../Models/Login/Login";
import { SetToken } from "../../Utils/AxiosHelper/AxiosHelper";
import { toast } from "react-toastify";
import SubmitButton from "../../Utils/HookForm/SubmitButton";
import LoginLogo from '../../Assets/images/log1.png'


const Login = () => {
  const history = useHistory();
  const classes = LoginStyle();
  const { t } = useTranslation("login");

  const schema = yup.object().shape({
    username: yup.string().nullable().required(t("common:required")),
    password: yup.string().nullable().required(t("common:required")),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<IUserData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const loginHandler = (values: IUserData) => {
    debugger
    // LoginServices.Login(values, (res: ILoginData) => {
      // if (res.success) {
      //   localStorage.setItem("token", res.token);
      //   SetToken(res.token);
        history.push("/main");
      // } else {
      //   toast.error(res.success);
      // }
    // });
  };
  

  return (
    <Grid
      container
      style={{ height: "100vh" }}
      justifyContent="center"
      alignContent="center"
      className={classes.LoginContainer}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        justifyContent="center"
        alignContent="center"
        className={classes.loginCard}
      >
        <Grid className="center">
          <img src={LoginLogo} width="200px" alt="logo" />
        </Grid>

        <Grid xs={12}>
          <form onSubmit={handleSubmit(loginHandler)}>
            <Grid item>
              <TextInput
                name="username"
                label={t("userName")}
                control={control}
                error={!!errors.username}
                helpText={errors?.username?.message}
              />
            </Grid>
            <Grid item>
              <TextInput
                name="password"
                label={t("password")}
                control={control}
                error={!!errors.password}
                helpText={errors?.password?.message}
              />
            </Grid>
            <Grid item>
              {/* <SubmitButton
                name="submit"
                label={t("login")}
                type="submit"
                control={control}
              /> */}
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button variant="contained" type="submit" color="primary">
                {t("login")}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
