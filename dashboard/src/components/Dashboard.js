import React from "react";
import { Route, Switch } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Switch>
          <Route exact path="/" component={Summary} />
          <Route path="/orders" component={Orders} />
          <Route path="/holdings" component={Holdings} />
          <Route path="/positions" component={Positions} />
          <Route path="/funds" component={Funds} />
          <Route path="/apps" component={Apps} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
