import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
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
      "& .Mui-disabled": {
        backgroundColor: theme.customColors.inputDisable,
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
  options: any[];
  disable?: boolean;
  isHeaderTable?: boolean;
  control: Control<any>;
  error?: boolean;
  helpText?: string;
}

const SelectInput: React.FC<IProps> = ({
  name,
  label,
  options,
  disable,
  isHeaderTable = false,
  control,
  error,
  helpText,
}) => {
  const classes = Styles();
  const [rtl, setRtl] = useState(true);

  return (
    <Controller
      render={({ field }) => (
        <>
          {!isHeaderTable ? (
            <label className={classes.label}>{label}</label>
          ) : null}
          <TextField
            {...field}
            // label={isHeaderTable ? label : null}
            className={!isHeaderTable ? classes.outlined : classes.standard}
            select
            variant={!isHeaderTable ? "outlined" : "standard"}
            onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
              if (event.target.value) {
                const val = event.target.value as string;
                if (isNumeric(val)) {
                  field.onChange(parseInt(val));
                } else field.onChange(val);
              } else field.onChange(undefined);
            }}
            size="small"
            fullWidth
            margin="dense"
            disabled={disable}
            error={error}
            helperText={helpText}
            style={{ direction: rtl ? "rtl" : "ltr" }}
          >
            {/* <MenuItem>
              <em>Select a {label}</em>
            </MenuItem> */}
            {options.map((option: any) => (
              <MenuItem key={option.id} value={option.id}>
                {option.text ?? option.name ?? " "}
              </MenuItem>
            ))}
          </TextField>
        </>
      )}
      name={name}
      control={control}
    />
  );
};
function isNumeric(value: any) {
  return /^-{0,1}\d+$/.test(value);
}
export default SelectInput;
