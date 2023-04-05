import {
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import Fieldset from "../../../Utils/Fieldset/Fieldset";
import StoreServices from "../../../Services/Store/StoreServices";
import { StoreTable, Units } from "../../../Models/Store/Store";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import StoreFilter from "./StoreFilter";

interface IProps {}

const StoresTable: React.FC<IProps> = ({}) => {
  const { t } = useTranslation("store");
  const [data, setData] = useState<Units[]>([]);
  const [page, setPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [allRows, setAllRows] = useState(0);
  const history = useHistory();
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageLimit(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  let defaultVariables = {
    pl: "10",
    pn: String(page === 0 ? 1 : page),
  };

  useEffect(() => {
    getStoreData(defaultVariables);
  }, []);

  const getStoreData = (command: any) => {
    StoreServices.GetStores(command, (res: StoreTable) => {
      setData(res.units);
      setAllRows(+res.count);
    });
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justify="space-between"
          alignContent="center"
        >
          <Grid item className="title" xs={11} lg={11}>
            <Fieldset name={"storeList"} />
          </Grid>
          <Grid item className="actions" xs={1} lg={1}>
            <Button
              color="secondary"
              size="small"
              variant="contained"
              onClick={() => {
                history.push("/main/store-operation");
              }}
            >
              {t("common:addNew")}
            </Button>
          </Grid>
        </Grid>

        <StoreFilter applyFilter={(values: any) => getStoreData(values)} />
        <TableContainer component={Paper} square elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t("common:row")}</TableCell>
                <TableCell>{t("name")}</TableCell>
                <TableCell>{t("code")}</TableCell>
                <TableCell>{t("familyCode")}</TableCell>
                <TableCell>{t("economicCode")}</TableCell>
                <TableCell>{t("registerationNumber")}</TableCell>
                <TableCell>{t("cellNumber")}</TableCell>
                <TableCell>{t("telNumber")}</TableCell>
                <TableCell>{t("zipCode")}</TableCell>
                <TableCell>{t("address")}</TableCell>
                <TableCell>{t("fax")}</TableCell>
                <TableCell>{t("website")}</TableCell>
                <TableCell>{t("contractId")}</TableCell>
                <TableCell>{t("isActive")}</TableCell>
                <TableCell>{t("isAlive")}</TableCell>
                <TableCell>{t("common:actions")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item: Units, index: number) => (
                <TableRow hover key={1}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.familyCode}</TableCell>
                  <TableCell>{item.economicCode}</TableCell>
                  <TableCell>{item.registerationNumber}</TableCell>
                  <TableCell>{item.cellNumber}</TableCell>
                  <TableCell>{item.telNumber}</TableCell>
                  <TableCell>{item.zipCode}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.fax}</TableCell>
                  <TableCell>{item.website}</TableCell>
                  <TableCell>{item.contractId}</TableCell>
                  <TableCell>{item.isActive}</TableCell>
                  <TableCell>{item.isAlive}</TableCell>

                  <TableCell width="140px" className="">
                    <Grid container justifyContent="center">
                      <IconButton onClick={() => {}}>
                        <EditRoundedIcon style={{ color: "#d1d1d1" }} />
                      </IconButton>
                      <IconButton onClick={() => {}}>
                        <DeleteForeverIcon color="error" />
                      </IconButton>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={allRows}
            page={page}
            rowsPerPage={pageLimit}
            rowsPerPageOptions={[10, 15, 25]}
            onPageChange={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage={t("common:rows")}
          />
        </TableContainer>
      </Grid>
    </>
  );
};

export default StoresTable;
