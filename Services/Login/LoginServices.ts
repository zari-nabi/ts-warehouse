import { Post } from "../../Utils/AxiosHelper/AxiosHelper";
import { IUserData } from "../../Models/Login/Login";

const api = {
  login: "token",
};

const CreateCustomerService = {
  Login: (command: IUserData, then: any) => {
    Post(api.login, command, then, false);
  },
};
export default CreateCustomerService;
