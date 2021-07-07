import React, { Suspense } from 'react';
import {
	Switch,
	Route,
	Link,
	Redirect
  } from "react-router-dom";
import { injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { withCookies } from 'react-cookie';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const BaseComponent = React.lazy(() => import('./views/'));

const moduleSelector = (importedModule) => {
	return injectIntl(withTheme(React.lazy(() => importedModule)));
};

const Home = moduleSelector(import('./views/Home'));
const Registration = moduleSelector(import('./views/Registration'));
const AdminLogin = moduleSelector(import('./views/AdminLogin'));
const Dashboard = moduleSelector(import('./views/Dashboard'));
const Schedule = moduleSelector(import('./views/Schedule'));
const PlayersList = moduleSelector(import('./views/PlayersList'));

const NoMatchPage = () => {
	return (
	  <h3>404 - Not found</h3>
	);
};


class Routes extends React.Component {
	// isLoggedIn = () =>{
	// 	this.props.actions.isLoggedIn();
	// }

	render() {
		return (
			<Suspense fallback={<div>loading...</div>}>
				<Route>
					
						
						<BaseComponent>
							{this.props.cookies.get('user') ? <>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/schedule" component={Schedule} />
									
									<Route exact path="/dashboard">
										<Dashboard>
											<PlayersList />
										</Dashboard>
									</Route>
									<Route exact path="/dashboard/players">
										<Dashboard>
											<PlayersList />
										</Dashboard>
									</Route>
									<Route path="*" component={NoMatchPage} />
								</Switch>
							</> :
							<>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route exact path="/schedule" component={Schedule} />
									<Route exact path="/adminlogin" component={AdminLogin} />
									<Route exact path="/registration" component={Registration} />
									<Route path="*" component={()=><>Not Found</>} />
								</Switch>
							</>}

								
								
							
						</BaseComponent>
						
						
					
				</Route>
			</Suspense>
		);
	}
}

// const mapStateToProps = (state) => {
// 	console.log({state});
// 	return {

// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		actions: bindActionCreators({}, dispatch),
// 	};
// };

export default withCookies(Routes);
