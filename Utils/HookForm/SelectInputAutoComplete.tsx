import React,{useState} from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  AutocompleteChangeReason,
} from "@material-ui/lab/Autocomplete";
import { Controller, Control, RegisterOptions } from "react-hook-form";

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
  options: any[];
  disable?: boolean;
  isHeaderTable?: boolean;
  label: string;
  control: Control<any>;
  error?: boolean;
  helpText?: string;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  defaultValue?: any;
}

const SelectInputAutoComplete: React.FC<IProps> = ({
  options,
  label,
  disable,
  isHeaderTable = false,
  control,
  name,
  error,
  helpText,
  rules,
  defaultValue,
}) => {
  const classes = Styles();
  const [rtl, setRtl] = useState(true);

  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          getOptionLabel={(option) => option.text ?? option.name ?? " "}
          onChange={(_, value, reason: AutocompleteChangeReason) => {
            field.onChange(value?.id);
            if (reason === "clear") {
              field.onChange("");
            }
          }}
          value={options.find((item) => item.id === field.value) || null}
          disabled={disable}
          renderInput={(params) => (
            <>
              {!isHeaderTable ? (
                <label className={classes.label}>{label}</label>
              ) : null}
              <TextField
                {...params}
                className={!isHeaderTable ? classes.outlined : classes.standard}
                variant={!isHeaderTable ? "outlined" : "standard"}
                // label={isHeaderTable ? label : null}
                size="small"
                fullWidth
                margin="dense"
                error={error}
                helperText={helpText}
                style={{ direction: rtl ? "rtl" : "ltr" }}
              />
            </>
          )}
        />
      )}
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
    />
  );
};

export default SelectInputAutoComplete;
