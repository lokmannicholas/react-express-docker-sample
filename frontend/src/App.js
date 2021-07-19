import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";


import { Route } from "react-router-dom";
// Import Routes
import { routes } from "./routes/";

function App() {
  return (
    <React.Fragment>
				<Router>
					<Switch>
						
						{routes.map((route, idx) => (
							<Route
								path={route.path}
								component={route.component}
								key={idx}
							/>
						))}
					</Switch>
				</Router>
			</React.Fragment>
  );
}

export default App;
