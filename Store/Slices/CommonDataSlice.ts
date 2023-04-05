import createGenericSlice from "../GenericSlice";
import { GenericState } from "../../Models/Common/Common";
import { PayloadAction } from "@reduxjs/toolkit";
import CommonServices from "../../Services/Common/CommonServices";

interface ICommonData {
  contractList: any[];
  geoNameList: any[];
  unitsList: any[];
  warehouseGroupsList: any[];
  costTypeGroupsList: any[];
}

const defaultValues: ICommonData = {
  contractList: [],
  geoNameList: [],
  unitsList: [],
  warehouseGroupsList: [],
  costTypeGroupsList: [],
};
export const slice = createGenericSlice({
  name: "commonData",
  initialState: {
    status: "loading",
    data: defaultValues,
  } as GenericState<ICommonData>,
  reducers: {
    setContractList: (state, action: PayloadAction<any>) => {
      state.status = "finished";
      const { newData, sliceState } = action.payload;
      state.data = {
        ...sliceState,
        contractList: newData,
      };
    },
    setGeoNameList: (state, action: PayloadAction<any>) => {
      state.status = "finished";
      const { newData, sliceState } = action.payload;
      state.data = {
        ...sliceState,
        geoNameList: newData,
      };
    },
    setUnitsList: (state, action: PayloadAction<any>) => {
      state.status = "finished";
      const { newData, sliceState } = action.payload;
      state.data = {
        ...sliceState,
        unitsList: newData,
      };
    },
    setWarehouseGroupsList: (state, action: PayloadAction<any>) => {
      state.status = "finished";
      const { newData, sliceState } = action.payload;
      state.data = {
        ...sliceState,
        warehouseGroupsList: newData,
      };
    },
    setCostTypeGroupsList: (state, action: PayloadAction<any>) => {
      state.status = "finished";
      const { newData, sliceState } = action.payload;
      state.data = {
        ...sliceState,
        costTypeGroupsList: newData,
      };
    },
  },
});

export const selectCommonData = (state: {
  commonData: { data: ICommonData };
}) => state?.commonData?.data;

export const {
  setContractList,
  setGeoNameList,
  setUnitsList,
  setWarehouseGroupsList,
  setCostTypeGroupsList,
} = slice.actions;

export default slice.reducer;

export const GetContractList = () => (dispatch: any, getState: any) => {
  CommonServices.GetContractList((e) => {
    e.contracts?.forEach((item: any) => {
      Object.assign(item, { text: item.contractNumber });
    });
    dispatch(
      setContractList({
        newData: e?.contracts,
        sliceState: getState()?.commonData?.data,
      })
    );
  });
};
export const GetGeoNameList = () => (dispatch: any, getState: any) => {
  CommonServices.GetGeoNameList((e) => {
    e.geoNames?.forEach((item: any) => {
      Object.assign(item, { text: item.description });
    });
    dispatch(
      setGeoNameList({
        newData: e?.geoNames,
        sliceState: getState()?.commonData?.data,
      })
    );
  });
};
export const GetUnitsList = () => (dispatch: any, getState: any) => {
  CommonServices.GetUnitsList((e) => {
    e.units?.forEach((item: any) => {
      Object.assign(item, { text: item.name });
    });
    dispatch(
      setUnitsList({
        newData: e?.units,
        sliceState: getState()?.commonData?.data,
      })
    );
  });
};
export const GetWarehouseGroupsList = () => (dispatch: any, getState: any) => {
  CommonServices.GettWarehouseGroupsList((e) => {
    e.warehouseGroups?.forEach((item: any) => {
      Object.assign(item, { text: item.name });
    });
    dispatch(
      setWarehouseGroupsList({
        newData: e?.warehouseGroups,
        sliceState: getState()?.commonData?.data,
      })
    );
  });
};
export const GetCostTypeGroupsList = () => (dispatch: any, getState: any) => {
  CommonServices.GetCostTypeGroupsList((e) => {
    e.costTypeGroups?.forEach((item: any) => {
      Object.assign(item, { text: item.name });
    });
    dispatch(
      setCostTypeGroupsList({
        newData: e?.costTypeGroups,
        sliceState: getState()?.commonData?.data,
      })
    );
  });
};
