import { Grid } from "@material-ui/core";
import React,{ useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Store from "./Store/Store";
import StoreRoom from "./StoreRoom/StoreRoom";
import { useHistory, useParams } from "react-router";
import Fieldset from "../../../Utils/Fieldset/Fieldset";
import Loading from "../../../Utils/Loading/Loading";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
const StoreForm = () => {
  const params: any = useParams();
  const { t } = useTranslation("store");
  const history = useHistory();
  const [storeSkip, setStoreSkip] = useState(true);
  const [storeRoomSkip, setStoreRoomSkip] = useState(true);
  const [value, setValue] = React.useState(0);

  const [stepper, setStepper] = useState({
    isModify: false,
    step: 1,
  });

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label={t("storeInfo")} />
            <Tab label={t("contract")} />
            <Tab label={t("productGroupe")} />
            <Tab label={t("storeRoomGroupe")} />
            <Tab label={t("paymentGroup")} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Store issDisable={false}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    </>
  );
};

export default StoreForm;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Grid container style={{backgroundColor:"#282C37"}}>{children}</Grid>}
    </div>
  );
}
