import React from "react";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import { Controller, Control } from "react-hook-form";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  formControl: {
    minWidth: 120,
    maxWidth: "auto",
    marginTop: 2,
    "& svg": {
      color: theme.palette.secondary.main,
    },
    "& .Mui-disabled": {
      background: theme.customColors.inputDisable,
    },
  },
  label: {
    display: "block",
    marginLeft: 5,
    color: theme.palette.text.primary,
    fontSize: 16,
  },
  input: {
    marginBottom: 10,
    marginTop: `5px !important`,
    "& input": {
      borderBottom: "none",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      paddingLeft: 5,
    },
    "& .MuiOutlinedInput-root": {
      background: `linear-gradient(${theme.customColors.main}, ${theme.customColors.dark})`,
    },
  },
  selected: {
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
})
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
interface IProps {
  name: string;
  options: any[];
  disable?: boolean;
  label: string;
  margin?: "dense" | "normal";
  control: Control<any>;
  error?: boolean;
  helpText?: string;
  isHeaderTable?: boolean;
}
const MultipleSelectInput: React.FC<IProps> = ({
  name,
  options,
  label,
  margin = "dense",
  disable,
  control,
  error,
  helpText,
  isHeaderTable=false
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [rtl, setRtl] = React.useState(true);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          margin={margin}
          fullWidth
          className={classes.formControl}
          error={error}
          variant={!isHeaderTable ? "outlined" : "standard"}
        >
         {!isHeaderTable ? (
            <label className={classes.label}>{label}</label>
          ) : null}
         
          <Select
            {...field}
            className={classes.input}            
            labelId={label}
            multiple
            // label={!isHeaderTable ? label : null}
            // input={<Input/>}
            MenuProps={MenuProps}
            // className={classes.input}
            disabled={disable}
            value={field.value || []}
            style={{ direction: rtl ? "rtl" : "ltr" }}
          >
            {options.map((item) => (
              <MenuItem
                className={classes.selected}
                key={item.id}
                value={item.id}
                style={getStyles(
                  item.text ?? "",
                  options.map((i) => i.text),
                  theme
                )}
              >
                {item.text ?? ""}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{helpText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
export default MultipleSelectInput;
