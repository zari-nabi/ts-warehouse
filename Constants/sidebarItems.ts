import SettingsIcon from "@material-ui/icons/Settings";
import StorefrontIcon from "@material-ui/icons/Storefront";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
// import WarehouseIcon from '@material-ui/icons/Warehouse';
import React from "react";
import { SidebarItems } from "../Models/Sidebar/Sidebar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";

const SidebarItemsList: SidebarItems[] = [
  {
    menu: {
      name: "store",
      menuTitle: "store",
      type: 2,
      menuIcon: function () {
        return React.createElement(StorefrontIcon);
      },
      componentName: "Test",
      url: "/main",
      open: false,
    },
    childs: [
      {
        menu: {
          name: "addStore",
          menuTitle: "addStore",
          type: 1,
          menuIcon: function () {
            return React.createElement(AddCircleIcon);
          },
          componentName: "Test",
          url: "/main/store-operation",
        },
        childs: [],
      },
      {
        menu: {
          name: "stores",
          menuTitle: "storeList",
          type: 2,
          menuIcon: function () {
            return React.createElement(FormatListNumberedRtlIcon);
          },
          componentName: "Test",
          url: "/main/store-list",
        },
        childs: [],
      },
     
    ],
  },

  {
    menu: {
      name: "contract",
      menuTitle: "contract",
      type: 2,
      menuIcon: function () {
        return React.createElement(DescriptionOutlinedIcon);
      },
      componentName: "Test",
      url: "/main/contract",
    },
    childs: [
      {
        menu: {
          name: "addContract",
          menuTitle: "addContract",
          type: 1,
          menuIcon: function () {
            return React.createElement(AddCircleIcon);
          },
          componentName: "Test",
          url: "/main/contract-operation",
        },
        childs: [],
      },
      {
        menu: {
          name: "contructs",
          menuTitle: "contractList",
          type: 2,
          menuIcon: function () {
            return React.createElement(FormatListNumberedRtlIcon);
          },
          componentName: "Test",
          url: "/main/contract-list",
        },
        childs: [],
      },
      
    ],
  },

  {
    menu: {
      name: "productGroup",
      menuTitle: "productGroup",
      type: 2,
      menuIcon: function () {
        return React.createElement(ShoppingBasketOutlinedIcon);
      },
      componentName: "Test",
      url: "/main/product",
    },
    childs: [
      {
        menu: {
          name: "addProductGroup",
          menuTitle: "addProductGroup",
          type: 1,
          menuIcon: function () {
            return React.createElement(AddCircleIcon);
          },
          componentName: "Test",
          url: "/main/product-operation",
        },
        childs: [],
      },
      {
        menu: {
          name: "contructs",
          menuTitle: "productGroupList",
          type: 2,
          menuIcon: function () {
            return React.createElement(FormatListNumberedRtlIcon);
          },
          componentName: "Test",
          url: "/main/product-list",
        },
        childs: [],
      },
      
    ],
  },

  {
    menu: {
      name: "warehouseGroup",
      menuTitle: "warehouseGroup",
      type: 2,
      menuIcon: function () {
        return React.createElement(HomeWorkOutlinedIcon);
      },
      componentName: "Test",
      url: "/main/warehouse",
    },
    childs: [
      {
        menu: {
          name: "addWarehouseGroup",
          menuTitle: "addWarehouseGroup",
          type: 1,
          menuIcon: function () {
            return React.createElement(AddCircleIcon);
          },
          componentName: "Test",
          url: "/main/warehouse-operation",
        },
        childs: [],
      },
      {
        menu: {
          name: "contructs",
          menuTitle: "warehouseGroupList",
          type: 2,
          menuIcon: function () {
            return React.createElement(FormatListNumberedRtlIcon);
          },
          componentName: "Test",
          url: "/main/warehouse-list",
        },
        childs: [],
      },
      
    ],
  },

  {
    menu: {
      name: "costGroup",
      menuTitle: "costGroup",
      type: 2,
      menuIcon: function () {
        return React.createElement(MonetizationOnOutlinedIcon);
      },
      componentName: "Test",
      url: "/main/cost",
    },
    childs: [
      {
        menu: {
          name: "addCostGroup",
          menuTitle: "addCostGroup",
          type: 1,
          menuIcon: function () {
            return React.createElement(AddCircleIcon);
          },
          componentName: "Test",
          url: "/main/cost-operation",
        },
        childs: [],
      },
      {
        menu: {
          name: "contructs",
          menuTitle: "costGroupList",
          type: 2,
          menuIcon: function () {
            return React.createElement(FormatListNumberedRtlIcon);
          },
          componentName: "Test",
          url: "/main/cost-list",
        },
        childs: [],
      },
      
    ],
  },

  {
    menu: {
      name: "configurationManagement",
      menuTitle: "مدیریت پیکربندی",
      type: 1,
      menuIcon: function () {
        return React.createElement(SettingsIcon);
      },
      componentName: "Test",
      url: "/main",
    },
    childs: [],
  },
];
export default SidebarItemsList;
