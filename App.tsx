import { useEffect, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import { SetToken } from "./Utils/AxiosHelper/AxiosHelper";
import Loading from "./Utils/Loading/Loading";
import "./index.css";

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      SetToken(localStorage.getItem("token"));
    }
    if (window.location.pathname === "/" || !localStorage.getItem("token")) {
      if (window.location.pathname !== "/login") {
        window.location.pathname = "/login";
      }
    } else {
      SetToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        theme="colored"
      />

      <Suspense fallback={<Loading />}>
        <Grid container>
          <Grid item xs={12} justifyContent="center">
            <BrowserRouter>
              <Switch>
                <Route path={"/login"} key={1} component={Login} />
                <Route path={"/main"} key={1} component={Main} />
              </Switch>
            </BrowserRouter>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};

export default App;
