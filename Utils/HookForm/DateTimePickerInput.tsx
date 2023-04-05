import {
  KeyboardDateTimePicker,
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
      background: `linear-gradient(${theme.customColors.main}, ${theme.customColors.dark})`,
    },
    "& .Mui-disabled": {
      background: theme.customColors.inputDisable,
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
  placeholder?: string;
  disable?: true;
  isHeaderTable: true;
  control: Control<any>;
  error?: boolean;
  helpText?: string;
}

const DateTimePickerInput: React.FC<IProps> = ({
  name,
  label,
  placeholder,
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
          <KeyboardDateTimePicker
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            {...rest}
            label=""
            ampm={false}
            format="yyyy/MM/DD - HH:mm"
            variant="inline"
            inputVariant={!isHeaderTable ? "outlined" : "standard"}
            size="small"
            placeholder={placeholder}
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

export default DateTimePickerInput;
