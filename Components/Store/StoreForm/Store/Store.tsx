import React, { useState, useEffect, FC } from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../../../../Utils/HookForm/TextInput";
import SelectInput from "../../../../Utils/HookForm/SelectInput";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import StoreServices from "../../../../Services/Store/StoreServices";
import { Units } from "../../../../Models/Store/Store";
import { useSelector } from "react-redux";
import { selectCommonData } from "../../../../Store/Slices/CommonDataSlice";
import { toast } from "react-toastify";
import NumberInput from "../../../../Utils/HookForm/NumberInput";
interface IProps {
  issDisable: boolean;
}
const Store: FC<IProps> = ({ issDisable }) => {
  const history = useHistory();
  const commonData = useSelector(selectCommonData);
  const { t } = useTranslation("store");

  const schema = yup.object().shape({
    name: yup.string().nullable().required(t("common:required")),
    code: yup.string().nullable().required(t("common:required")),
    familyCode: yup.string().nullable().required(t("common:required")),
    address: yup.string().nullable().required(t("common:required")),
    cellNumber: yup
      .string()
      .nullable()
      .required(t("common:required"))
      .matches(/09([0-9]{9})/, t("common:incorrectData")),
    contractId: yup.string().nullable().required(t("common:required")),
    geoNameId: yup.string().nullable().required(t("common:required")),
    zipCode: yup
      .string()
      .nullable()
      .min(10, t("common:incorrectData"))
      .max(10, t("common:incorrectData"))
      .required(t("common:required")),
    parentId: yup.string().nullable().required(t("common:required")),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Units>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const addStore = (values: Units) => {
    let command = {
      unit: {
        name: values.name ?? "",
        code: values.code ?? "",
        familyCode: values.familyCode ?? "",
        economicCode: values.economicCode ?? "",
        registerationNumber: values.registerationNumber ?? "",
        cellNumber: values.cellNumber ?? "",
        telNumber: values.telNumber ?? "",
        zipCode: values.zipCode ?? "",
        address: values.address ?? "",
        fax: values.fax ?? "",
        website: values.website ?? "",
        contractId: values.contractId ? String(values.contractId) : "",
        geoNameId: values.geoNameId ? String(values.geoNameId) : "",
        parentId: values.parentId ? String(values.parentId) : "",
      },
    };
    StoreServices.AddStore(command, (res) => {
      if (res.status === 0) {
        toast.success(t("common:addedSuccessfully"));
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <Grid container className="p-2">
      <form
        style={{ opacity: `${issDisable ? "0.7" : "1"}` }}
        onSubmit={handleSubmit(addStore)}
        className="w-100"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} lg={3}>
            <button onClick={() => console.log(watch())}>fff</button>
            <TextInput
              name="name"
              label={t("name")}
              control={control}
              error={!!errors.name}
              helpText={errors?.name?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextInput
              name="code"
              label={t("code")}
              control={control}
              error={!!errors.code}
              helpText={errors?.code?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextInput
              name="familyCode"
              label={t("familyCode")}
              control={control}
              error={!!errors.familyCode}
              helpText={errors?.familyCode?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextInput
              name="economicCode"
              label={t("economicCode")}
              control={control}
              error={!!errors.economicCode}
              helpText={errors?.economicCode?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextInput
              name="registerationNumber"
              label={t("registerationNumber")}
              control={control}
              error={!!errors.registerationNumber}
              helpText={errors?.registerationNumber?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <NumberInput
              name="cellNumber"
              label={t("cellNumber")}
              control={control}
              error={!!errors.cellNumber}
              helpText={errors?.cellNumber?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <NumberInput
              name="telNumber"
              label={t("telNumber")}
              control={control}
              error={!!errors.telNumber}
              helpText={errors?.telNumber?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <NumberInput
              name="zipCode"
              label={t("zipCode")}
              control={control}
              error={!!errors.zipCode}
              helpText={errors?.zipCode?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <NumberInput
              name="fax"
              label={t("fax")}
              control={control}
              error={!!errors.fax}
              helpText={errors?.fax?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextInput
              name="address"
              label={t("address")}
              control={control}
              error={!!errors.address}
              helpText={errors?.address?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextInput
              name="website"
              label={t("website")}
              control={control}
              error={!!errors.website}
              helpText={errors?.website?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <SelectInput
              name="contractId"
              label={t("contractId")}
              options={commonData.contractList}
              control={control}
              error={!!errors.contractId}
              helpText={errors?.contractId?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <SelectInput
              name="geoNameId"
              label={t("geoNameId")}
              options={commonData.geoNameList}
              control={control}
              error={!!errors.geoNameId}
              helpText={errors?.geoNameId?.message}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <SelectInput
              name="parentId"
              label={t("parentId")}
              options={commonData.unitsList}
              control={control}
              error={!!errors.parentId}
              helpText={errors?.parentId?.message}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button variant="contained" type="submit" color="primary">
            {t("nextLevel")}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Store;
