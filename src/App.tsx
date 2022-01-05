import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Preloader from "./common/Preloader/Preloader";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

import UsersContainer from "./components/Users/UsersContainer";
import { withSuspense } from "./hoc/withSuspense";
import { initializeApp } from "./redux/app-reducer";
import { AppStateType } from "./redux/redux-store";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer")
);

type MapStateToPropsType = {
  initialized: boolean;
};
type MapDispatchToPropsType = {
  initializeApp: () => void;
};

type AppComponentPropsType = MapStateToPropsType & MapDispatchToPropsType;

class App extends React.Component<AppComponentPropsType> {
  catchAllUnhandledErrors = (reason: any, promise: any) => {
    //вместо алерта сделать в апп-редьюсере globalError добавить в стейт и в редьюсер
    alert("some error occured");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route path={"/"} render={() => <Redirect to={"/profile"} />} />
            <Route
              path={"/profile/:userId?"}
              render={withSuspense(ProfileContainer)}
            />
            <Route path={"/dialogs"} render={withSuspense(DialogsContainer)} />
            <Route path={"/users"} render={withSuspense(UsersContainer)} />
            <Route path={"/login"} render={() => <Login />} />
            <Route path={"*"} render={() => <div>404 NOT FOUND</div>} />
            {/*<Route path ={'/news'} component={News}/>
                    <Route path ={'/music'} component={Music}/>
                    <Route path ={'/settings'} component={Settings}/>*/}
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  initialized: state.app.initialized,
});

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
