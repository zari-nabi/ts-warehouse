import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Box, makeStyles } from '@material-ui/core';
import TextInput from "../../Utils/HookForm/TextInput";
import { Test } from '../../Models/test';
import SelectInputAutoComplete from "../../Utils/HookForm/SelectInputAutoComplete";
import SelectInput from "../../Utils/HookForm/SelectInput";
import NumberInput from "../../Utils/HookForm/NumberInput";
import MultipleSelectInput from "../../Utils/HookForm/MultipleSelectInput";
import SubmitButton from "../../Utils/HookForm/SubmitButton";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({

  card: {
    margin: theme.spacing(3),
  },


}));

function FirstFunction() {
  const { control, handleSubmit, watch, reset } = useForm<any>();
  const classes = useStyles();
  const { t, i18n } = useTranslation("login");

  const submit = (value: Test) => {
    console.log(value);
  };
  return (
    <div>
      <h1>Hook Form</h1>
      <Grid
        container
        spacing={3}
        className={classes.card}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <form onSubmit={handleSubmit(submit)}>
            <TextInput control={control} label={t("name")} name="firstName" />
            <TextInput control={control} label={t("disable")} name="disabled" disable={true} />
            <NumberInput control={control} label={t("number")} name="number"/>

            <SelectInputAutoComplete
              name="autoSelect"
              label={t("select")}
              options={[{name:"option1"}, {name:"option2"}]}
              control={control} />
            <SelectInput
              name="select"
              label={t("select")}
              options={[{name:"option1"}, {name:"option2"}]}
              control={control} 
              />
             
              <SubmitButton
              name="submit"
              label={t("submit")}
              type="submit"
              control={control}
              />

          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default FirstFunction;
