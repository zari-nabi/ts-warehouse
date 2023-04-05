import { Grid } from "@material-ui/core";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const Styles = makeStyles((theme: Theme) =>
  createStyles({
    titleContainer: {
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
      height: 40,

      [theme.breakpoints.up("lg")]: {
        paddingLeft: "1rem",
      },
      [theme.breakpoints.up("sm")]: {
        padding: "0 1rem !important",
      },
    },
    title: {
      display: "flex",
      alignItems: "center",

      "& *": {
        color: "#fff",
        fontWeight: 600,
      },
    },
    hr: {
      flexGrow: 1,
      paddingLeft: 20,

      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
      "& hr": {
        border: "1px solid #575B67",
      },
    },
  })
);
interface IProps {
  name: string;
}
const DashboardTitle: React.FC<IProps> = ({ name }) => {
  const { t } = useTranslation("sidebar");
  const classes = Styles();

  return (
    <Grid item xs={12} className={classes.titleContainer}>
      <div className={classes.title}>
        <KeyboardArrowLeftRoundedIcon color="secondary" />
        <span>{t(name)}</span>&nbsp;
      </div>
      <span className={classes.hr}>
        <hr />
      </span>
    </Grid>
  );
};

export default DashboardTitle;
