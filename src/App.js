import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Usermang from "./Component/UserManagment/Usermang";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Component/Adduser/User";
import Userform from "./Component/UserForm/Userform";
import Addrole from "./Component/Role/Addrole";
import Editrole from "./Component/Role/Editrole";
import Viewitems from "./Component/Viewitems/Viewitems";
import Createitem from "./Component/Viewitems/Createitem";
import Edititem from "./Component/Viewitems/Edititem";
import CheckOut from "./Component/Viewitems/CheckOut";
import Checkedoutitems from "./Component/CheckedOutItems/Checkedoutitems";
import CheckIn from "./Component/CheckedOutItems/CheckIn";
import SubComp from "./Component/UserManagment/SubComp";
import SideBar from "./Component/UserManagment/SideBar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Usermang} exact />
          <Route path="/Usermangment" component={Usermang} />

          <Route path="/Userform" component={Userform} exact />
          <Route path="/Editrole" component={Editrole} exact />
          <Route path="/Createitem" component={Createitem} exact />
          <Route path="/Edititem" component={Edititem} exact />
          <Route path="/CheckOut" component={CheckOut} exact />
          <Route path="/Checkedoutitems" component={Checkedoutitems} exact />
          <Route path="/CheckIn" component={CheckIn} exact />
          <Route path="/SubComp" component={SubComp} exact />
          <Route path="/SideBar" component={SideBar} exact />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
