import { makeStyles, Theme, createStyles } from "@material-ui/core";
import LoginBg from "../../Assets/images/loginBg.jpg";

export const LoginStyle = makeStyles((theme: Theme) =>
  createStyles({
    loginCard: {
      // background:`linear-gradient(${theme.palette.neutral?.main}, ${theme.palette.neutral?.dark})`,
      padding: "15px",
      borderRadius: "15px",
      backdropFilter:"blur(5px) brightness(0.4) contrast(0.8) invert(0)"
    },
    LoginContainer: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: `url(${LoginBg})`,
    },
  })
);
