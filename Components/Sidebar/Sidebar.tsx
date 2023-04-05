import { FC, Fragment, ReactNode, useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { sidebarStyle } from "./SidebarStyle";
import SidebarItemsList from "../../Constants/sidebarItems";
import { SidebarItems } from "../../Models/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useTranslation } from "react-i18next";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
interface IProps {
  children?: ReactNode;
}
const Sidebar: FC<IProps> = ({ children }) => {
  const theme = useTheme();
  const classes = sidebarStyle(theme);
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const { t } = useTranslation("sidebar");
  const sidebarSwitch = () => {
    setOpen(!open);
  };

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const themeHandler = () => {
    const theme = localStorage.getItem("themeType");

    if (theme === "light") {
      localStorage.setItem("themeType", "dark");
    } else {
      localStorage.setItem("themeType", "light");
    }
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Grid container>
          <Grid item xs={3}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={sidebarSwitch}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Grid>
          <Grid container xs={8} justifyContent="flex-end" alignItems="center">
            <p>نام کاربری</p>
            <IconButton onClick={handleMenu} color="inherit">
              <AccountCircle fontSize="large" />
            </IconButton>
            <IconButton onClick={themeHandler} color="inherit">
              <SettingsBrightnessIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{t("profile")}</MenuItem>
              <MenuItem onClick={handleClose}>{t("exit")}</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {SidebarItemsList?.map((item: SidebarItems, index: number) => {
          if (item.menu.type === 1) {
            return (
              <>
                <Link
                  to={item.menu.url}
                  key={index}
                  className={classes.menuLink}
                >
                  <List>
                    <ListItem button key={item.menu.menuTitle}>
                      <ListItemIcon>{item.menu.menuIcon()}</ListItemIcon>
                      <ListItemText
                        primary={t(item.menu.menuTitle)}
                        style={{ display: `${open ? "block" : "none"}` }}
                      />
                    </ListItem>
                  </List>
                </Link>
                <Divider />
              </>
            );
          } else if (item.menu.type === 2) {
            return (
              <Fragment key={index}>
                <List
                  onClick={() => {
                    item.menu.open = !item.menu.open;
                    setRender(!render);
                  }}
                >
                  <ListItem button key={item.menu.menuTitle}>
                    <ListItemIcon>{item.menu.menuIcon()}</ListItemIcon>
                    <ListItemText
                      primary={t(item.menu.menuTitle)}
                      style={{ display: `${open ? "block" : "none"}` }}
                    />
                    {open && (
                      <Grid container justifyContent="flex-end">
                        {!item.menu.open ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )}
                      </Grid>
                    )}
                  </ListItem>
                </List>
                <div className={open ? classes.menuChildCntainer : ""}>
                  {item.menu.open &&
                    item.childs.map((child, index) => (
                      <Fragment key={index}>
                        <Link to={child.menu.url} className={classes.menuLink}>
                          <List>
                            <ListItem button key={child.menu.menuTitle}>
                              <ListItemIcon>
                                {child.menu.menuIcon()}
                              </ListItemIcon>
                              <ListItemText
                                primary={t(child.menu.menuTitle)}
                                style={{
                                  display: `${open ? "block" : "none"}`,
                                }}
                              />
                            </ListItem>
                          </List>
                        </Link>
                      </Fragment>
                    ))}
                </div>
                <Divider />
              </Fragment>
            );
          }
        })}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid xs>{children}</Grid>
      </main>
    </div>
  );
};
export default Sidebar;
