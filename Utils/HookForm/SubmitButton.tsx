import React, { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, makeStyles, Button, Theme } from "@material-ui/core";
import { Controller, Control } from "react-hook-form";

const Styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      background: `linear-gradient(${theme.palette.primary?.main}, ${theme.palette.primary?.dark})`,
      '&:hover': {
        // color: theme.palette.primary?.contrastText,
        background: theme.palette.primary?.dark,
      },
      "& .Mui-disabled": {
        // background: `${theme.palette.neutral?.dark} !important`,
        border: "none",
      },
    },
    label: {
      // display: "block",
      marginLeft: 5,
      color: theme.palette.text.primary,
      fontSize: 16,
    },
  })
);

interface IProps {
  name: string;
  label: string;
  type:string,
  disable?: true;
  color?: string;
  isHeaderTable?: boolean;
  noFullWidth?: boolean;
  control: Control<any>;
}

const SubmitButton: React.FC<IProps> = ({
  label,
  type="submit",
  disable,
  color,
  isHeaderTable = false,
  noFullWidth=false,
  control,
  name,
}) => {
  const classes = Styles();
  const [rtl, setRtl] = useState(true);

  return (
    <Controller
      render={({ field }) => (
        <>

          <Button
            {...field}
            variant={!isHeaderTable ? "contained" : "outlined"}
            size="small"
            color= "primary"
            disabled={disable}
            fullWidth={noFullWidth === false ? false : true}
            // onClick={onClick}
            // startIcon={startIcon}
            classes={{ root: classes.root, label: classes.label }}>
            {label}
          </Button>
        </>
      )}
      name={name}
      control={control}
    />
  );
};

export default SubmitButton;
