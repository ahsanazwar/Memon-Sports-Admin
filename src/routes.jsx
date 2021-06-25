import React, { Suspense } from 'react';
import {
	Switch,
	Route,
	Link
  } from "react-router-dom";
import { injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const BaseComponent = React.lazy(() => import('./views/'));

const moduleSelector = (importedModule) => {
	return injectIntl(withTheme(React.lazy(() => importedModule)));
};

const Home = moduleSelector(import('./views/Home'));
const Registration = moduleSelector(import('./views/Registration'));
const AdminLogin = moduleSelector(import('./views/AdminLogin'));
const DashboardPlayerList = moduleSelector(import('./views/DashboardPlayerList'));


class Routes extends React.Component {
	// isLoggedIn = () =>{
	// 	this.props.actions.isLoggedIn();
	// }

	render() {
		return (
			<Suspense fallback={<div>loading...</div>}>
				<header className="main-header">  
					<Container>
						<Row>
							<Col lg={12}>
								<nav>
									<div className="main-logo">
										<Link to="/"><img src={"/assets/images/site-logo.png"} /></Link>
									</div>
									<ul>
										<li>
											<Link to="/">Home</Link>
										</li>
										<li>
											<Link to="/">About us</Link>
										</li>
										<li>
											<Link to="/">Schedule</Link>
										</li>
										<li>
											<Link to="/registration">Registration</Link>
										</li>
										<li>
										<Link to="/">Contact Us</Link>
									</li>
									</ul>
								</nav>
							</Col>
						</Row>
					</Container>
				</header>
				<Route>
					
						<Switch>
							<BaseComponent>
								<Route exact path="/home" component={Home} />
								<Route exact path="/registration" component={Registration} />
								<Route exact path="/admin-login" component={AdminLogin} />
								<Route exact path="/dashboard-player-list" component={DashboardPlayerList} />
							</BaseComponent>
						</Switch>	
				</Route>
				<footer className="main-footer">
					<Container>
						<Row>
							<Col lg={12}>
								<div className="main-footer-wrap">
									<div className="footer-logo"><Link to="/"><img src={"/assets/images/site-logo.png"} /></Link></div>
									<div><p className="copy-text">Copy Rights © Memon Sports</p></div>
								</div>
							</Col>
						</Row>
					</Container>  
				</footer>	
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

export default Routes;
