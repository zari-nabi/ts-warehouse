import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";
import MomentUtils from "@date-io/moment";
import { createStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import { Controller, Control } from "react-hook-form";

const Styles = makeStyles((theme) =>
  createStyles({
    label: {
      display: "block",
      marginLeft: 5,
       color: theme.palette.text.primary,
      fontSize: 16,
    },
    outlined: {
      margin: "7px 0 16px",
      "& .MuiInputBase-root": {
        background: `linear-gradient(#888, #888)`,
      },
      "& .Mui-disabled": {
        //  background: theme.palette.customColors?.inputDisable,
        border: "none",
      },
    },
    standard: {
      "& .MuiFormLabel-root.Mui-focused": {
        color: theme.palette.text.primary,
      },
      "& .MuiFormLabel-root": {
        width: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  })
);

interface IProps {
  name: string;
  label?: string;
  disable?: true;
  isHeaderTable?: true;
  control: Control<any>;
  error?: boolean;
  helpText?: string;
}

const DatePickerInput: React.FC<IProps> = ({
  name,
  label,
  disable,
  isHeaderTable,
  control,
  error,
  helpText,
}) => {
  const classes = Styles();
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      {!isHeaderTable && <label className={classes.label}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            {...rest}
            disableToolbar
            format="yyyy/MM/DD"
            inputVariant={!isHeaderTable ? "outlined" : "standard"}
            variant="inline"
            size="small"
            className={!isHeaderTable ? classes.outlined : classes.standard}
            disabled={disable}
            fullWidth
            autoOk
            error={error}
            helperText={helpText}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerInput;
