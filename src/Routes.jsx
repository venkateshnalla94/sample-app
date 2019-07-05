import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome_View from "./Component/Login_page/Welcome_View";
import Vendor from "./Component/Vendor/Vendor";
import sidenav from "./Component/Side_Nav/sidenav";
import sample from "./Component/Working Example/sample";
import Usermang from "./Component/UserManagment/Usermang";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import User from "./Component/Adduser/User";
import Userform from "./Component/UserForm/Userform";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/vendor" component={Vendor} exact />
          <Route path="/" component={Usermang} exact />
          <Route path="/sidenav" component={sidenav} exact />
          <Route path="/sample" component={sample} exact />
          <Route path="/Usermangment" component={Usermang} exact />

          <Route path="/Userform" component={Userform} exact />
        </div>
      </BrowserRouter>
    );
  }
}
export default Routes;
