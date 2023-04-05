import { Post } from "../../Utils/AxiosHelper/AxiosHelper";
import { Data } from "../../Models/Common/Common";

const api = {
  getContracts: "contracts/getContracts",
  getGeoNames: "geoNames/getGeoNames",
  getUnits: "units/getUnits",
  getWarehouseGroups: "warehouseGroups/getWarehouseGroups",
  getCostTypeGroups: "costTypeGroups/getCostTypeGroups",
};

let command = {};
const CommonServices = {
  GetContractList: (then: Data<any>) => {
    Post(api.getContracts, command, then);
  },
  GetGeoNameList: (then: Data<any>) => {
    Post(api.getGeoNames, command, then);
  },
  GetUnitsList: (then: Data<any>) => {
    Post(api.getUnits, command, then);
  },
  GettWarehouseGroupsList: (then: Data<any>) => {
    Post(api.getWarehouseGroups, command, then);
  },
  GetCostTypeGroupsList: (then: Data<any>) => {
    Post(api.getCostTypeGroups, command, then);
  },
};

export default CommonServices;
