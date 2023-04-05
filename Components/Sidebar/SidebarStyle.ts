import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

const drawerWidth = 200;

export const sidebarStyle = makeStyles((theme: Theme) =>

  createStyles({
    root: {
      display: 'flex',
      direction: "ltr"
    },
    mainOpen: {
      marginLeft: "170px"
    },
    mainClose: {
      marginLeft: "20px"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      display: "-webkit-box"
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(8) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    menuChildCntainer: {
      paddingLeft: 20
    },
    menuLink: {
      textDecoration: "unset"
    },
    test: {
      display: "inline",
      position: "absolute",
      right: 15
    },
    content: {
      flexGrow: 1,
      padding: "10px 10px 5px 10px",
      width:"100%",
      overflow:"hidden"
    },
  }),
);