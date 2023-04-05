import React from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { Controller, Control } from "react-hook-form";

const Styles = makeStyles(() =>
  createStyles({
    radio: {
      flexDirection: "row",
    },
  })
);
interface IProps {
  name: string;
  label: string;
  options: any[];
  colDirection?: true;
  disable: boolean;
  margin: "dense" | "normal";
  control: Control<any>;
}
const RadioInput: React.FC<IProps> = ({
  name,
  label,
  options,
  colDirection,
  disable,
  margin,
  control,
}) => {
  const classes = Styles();

  return (
    <Controller
      render={({ field }) => (
        <FormControl
          component="fieldset"
          margin={margin || "normal"}
          disabled={disable}
        >
          {label && <FormLabel component="legend">{label}</FormLabel>}
          <RadioGroup
            {...field}
            aria-label={label}
            onChange={(event) => {
              field.onChange(event.target.value);
            }}
            className={classes.radio}
            style={{
              flexDirection: colDirection ? "column" : "row",
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id}
                control={<Radio />}
                label={option.text}
                color="primary"
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
      name={name}
      control={control}
    />
  );
};

export default RadioInput;
