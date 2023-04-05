import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { Controller, Control } from "react-hook-form";
interface IProps {
  label: string;
  control: Control;
  name: string;
}

const CheckboxInput: React.FC<IProps> = ({ control, label, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              color="default"
              onChange={(e) => {
                console.log(e.target.checked);
                field.onChange(e.target.checked);
              }}
              checked={field.value === true}
            />
          }
          label={label}
          style={{
            paddingLeft: 5,
            marginBottom: 10,
          }}
        />
      )}
    />
  );
};

export default CheckboxInput;
