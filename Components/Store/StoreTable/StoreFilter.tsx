import { FC } from "react";
import { Grid, Button, Divider } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextInput from "../../../Utils/HookForm/TextInput";
import { useTranslation } from "react-i18next";
import { Units } from "../../../Models/Store/Store";
import { Styles } from "../storeStyles";

interface IProps {
  applyFilter(values: any): void;
}

const StoreFilter: FC<IProps> = ({ applyFilter }) => {
  const { t } = useTranslation("store");
  const classes = Styles();
  const schema = yup.object().shape({});

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Units>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const addFilter = (values: Units) => {
    console.log(values);
    Object.assign(values, { pl: "10", pn: 1 });
    applyFilter({ unit: values });
  };

  return (
    <Grid>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{t("search")}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Grid
            container
            spacing={2}
            onSubmit={handleSubmit(addFilter)}
            component="form"
            id="filterForm"
          >
            <Grid container xs={12}>
              <Divider className="w-100 mb-2" />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="name"
                label={t("name")}
                control={control}
                error={!!errors.name}
                helpText={errors?.name?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="code"
                label={t("code")}
                control={control}
                error={!!errors.code}
                helpText={errors?.code?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="familyCode"
                label={t("familyCode")}
                control={control}
                error={!!errors.familyCode}
                helpText={errors?.familyCode?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="economicCode"
                label={t("economicCode")}
                control={control}
                error={!!errors.economicCode}
                helpText={errors?.economicCode?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="registerationNumber"
                label={t("registerationNumber")}
                control={control}
                error={!!errors.registerationNumber}
                helpText={errors?.registerationNumber?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="cellNumber"
                label={t("cellNumber")}
                control={control}
                error={!!errors.cellNumber}
                helpText={errors?.cellNumber?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="telNumber"
                label={t("telNumber")}
                control={control}
                error={!!errors.telNumber}
                helpText={errors?.telNumber?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="zipCode"
                label={t("zipCode")}
                control={control}
                error={!!errors.zipCode}
                helpText={errors?.zipCode?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="fax"
                label={t("fax")}
                control={control}
                error={!!errors.fax}
                helpText={errors?.fax?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="address"
                label={t("address")}
                control={control}
                error={!!errors.address}
                helpText={errors?.address?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="website"
                label={t("website")}
                control={control}
                error={!!errors.website}
                helpText={errors?.website?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="contractId"
                label={t("contractId")}
                control={control}
                error={!!errors.contractId}
                helpText={errors?.contractId?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="geoNameId"
                label={t("geoNameId")}
                control={control}
                error={!!errors.geoNameId}
                helpText={errors?.geoNameId?.message}
              />
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <TextInput
                name="parentId"
                label={t("parentId")}
                control={control}
                error={!!errors.parentId}
                helpText={errors?.parentId?.message}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
        <AccordionActions>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            form="filterForm"
          >
            {t("filter")}
          </Button>
        </AccordionActions>
      </Accordion>
    </Grid>
  );
};

export default StoreFilter;
