import React from "react";
import {
  createStyles,
  InputAdornment,
  makeStyles,
  TextField,
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
      lineHeight: 1.3,
      "& .MuiOutlinedInput-root": {
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
    },
  })
);
interface IProps {
  name: string;
  placeholder?: string;
  label: string;
  type?: string;
  required?: true;
  fullWidth?: boolean;
  maxLength?: number;
  defaultValue?: number;
  toFixed?: number;
  minValue?: number;
  round?: true;
  float?: true;
  hundredth?: true;
  disable?: boolean;
  isHeaderTable?: boolean;
  control: Control<any>;
  error?: boolean;
  helpText?: string;
  onBlurFunction?: (e: any) => void;
  thousandth?: true;
  decimals?: number;
}

const NumberInput: React.FC<IProps> = ({
  name,
  label,
  required,
  fullWidth = true,
  placeholder = "",
  type = "number",
  maxLength,
  defaultValue,
  minValue,
  round,
  float,
  disable,
  isHeaderTable = false,
  hundredth,
  control,
  error,
  helpText,
  toFixed,
  decimals,
  onBlurFunction,
  thousandth,
}) => {
  const classes = Styles();
  const [rtl, setRtl] = React.useState(true);

  return (
    <Controller
      render={({ field }) => (
        <>
          {!isHeaderTable && <label className={classes.label}>{label}</label>}
          <TextField
            {...field}
            // label={isHeaderTable ? label : null}
            className={!isHeaderTable ? classes.outlined : classes.standard}
            variant={!isHeaderTable ? "outlined" : "standard"}
            type={type}
            inputProps={{
              min: minValue,
              step: float ? 0.1 : hundredth ? 0.01 : thousandth ? 0.001 : 1,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{placeholder}</InputAdornment>
              ),
              onBlur: (e: any) => {
                if (onBlurFunction) {
                  onBlurFunction(e.target.value);
                }
                if (decimals) {
                  field.onChange(
                    String(
                      parseFloat(e.target.value)
                        .toFixed(decimals)
                        .slice(0, e.target.value.length + decimals)
                    )
                  );
                }
              },
            }}
            onChange={(event) => {
              const val = event.target.value as string;
              field.onChange(String(val));
            }}
            size="small"
            fullWidth={fullWidth}
            required={required}
            margin="dense"
            onInput={(e: any) => {
              if (round) {
                e.target.value = Math.max(0, parseFloat(e.target.value))
                  .toString()
                  .slice(0, maxLength);
              }
            }}
            defaultValue={defaultValue}
            disabled={disable}
            error={error}
            helperText={helpText}
            style={{ direction: rtl ? "rtl" : "ltr" }}
          />
        </>
      )}
      name={name}
      control={control}
    />
  );
};

export default NumberInput;
