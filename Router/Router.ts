import Login from '../Components/Login/Login';
import Users from '../Components/test/Test';
import StoreTable from '../Components/Store/StoreTable/StoreTable';
import StoreForm from '../Components/Store/StoreForm/StoreForm'



const routes = [

    {path : "/login" , component : Login},
    {path : "/main/store-list" , component : StoreTable},
    {path : "/main/store-operation" , component : StoreForm},
    {path : "/main/store-operation/:id" , component : StoreForm},
    {path : "/main/configurationManagement" , component : Users},

];

export default routes;