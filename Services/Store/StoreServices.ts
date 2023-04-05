import { Post } from "../../Utils/AxiosHelper/AxiosHelper";
import { Data } from "../../Models/Common/Common";
import { StoreTable } from "../../Models/Store/Store";



const api = {
  getStores: "units/getUnits",
  addStore: "units/insertUnit"
};

const StoreServices = {
  GetStores: (command: any, then: Data<StoreTable>) => {
    Post(api.getStores, command, then);
  },
  AddStore: (command: any, then: Data<any>) => {
    Post(api.addStore, command, then);
  },
};
export default StoreServices;
