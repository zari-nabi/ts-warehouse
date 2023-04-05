import {  makeStyles, Theme, createStyles } from "@material-ui/core";


export const Styles = makeStyles((theme: Theme) =>
    createStyles({

        heading: {
            fontSize: theme.typography.pxToRem(15),
        },

        details: {
            alignItems: 'center',
        },
        column: {
            flexBasis: '33.33%',
        },
    })
);