import React, { useState,useEffect } from "react";

import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import { Controller, Control } from "react-hook-form";

const Styles = makeStyles((theme: Theme) =>
createStyles({
  label: {
    display: "block",
    marginLeft: 5,
    color: theme.palette.text.primary,
    fontSize: 16,
  },
  outlined: {
    marginBottom: 15,
    lineHeight: 1.3,
    "& .Mui-disabled": {
      background: `${theme.customColors.inputDisable} !important`,
      border: "none",
    },
    "& .MuiOutlinedInput-root": {
      background: `linear-gradient(${theme.customColors.main}, ${theme.customColors.dark})`,
    },
  },
  standard: {
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.text.primary,
    },
  },
})
);

interface IProps {
  name: string;
  label: string;
  type?: string;
  rows?: number;
  rowsMax?: number;
  noFullWidth?: false;
  required?: true;
  disable?: true;
  maxLength?: number;
  isHeaderTable?: boolean;
  control: Control<any>;
  error?: boolean;
  helpText?: string;
}

const TextInput: React.FC<IProps> = ({
  label,
  type = "text",
  rows,
  rowsMax,
  noFullWidth,
  required,
  disable,
  maxLength,
  isHeaderTable = false,
  control,
  name,
  error,
  helpText,
}) => {
  const classes = Styles();
  const [rtl, setRtl] = useState(true);

  useEffect(() => {
   console.log(error)
  }, [error])
  return (
    <Controller
      render={({ field }) => (
        <>
          {!isHeaderTable ? (
            <label className={classes.label}>{label}</label>
          ) : null}
          <TextField
            {...field}
            variant={!isHeaderTable ? "outlined" : "standard"}
            // variant={isHeaderTable ? disable ? "filled" : "outlined" : "standard"}
            // label={!isHeaderTable ? label : null}
            type={type}
            // placeholder={label}
            onChange={(event) => {
              field.onChange(event.target.value);
              // setRtl(hasPersian(event.target.value));
            }}
            size="small"
            fullWidth={noFullWidth === false ? false : true}
            margin="dense"
            multiline={rows ? true : false}
            rows={rows}
            rowsMax={rowsMax}
            required={required}
            disabled={disable}
            className={!isHeaderTable ? classes.outlined : classes.standard}
            inputProps={{ maxLength: maxLength }}
            // InputLabelProps={{ shrink:true }}
            error={error}
            helperText={helpText}
            // style={{ direction: rtl ? "rtl" : "ltr"}}
          />
        </>
      )}
      name={name}
      control={control}
    />
  );
};

export default TextInput;
