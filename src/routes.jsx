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
import SlideToggle from 'react-slide-toggle';
import {
	faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
				<Route>
					<Switch>
						
						<BaseComponent>
							<header className="main-header">  
							<Container>
								<Row>
									<Col lg={12}>
										<nav>
											<div className="main-logo">
												<Link to="/"><img src={"/assets/images/site-logo.png"} /></Link>
											</div>
											<SlideToggle collapsed>
												{({ toggle, setCollapsibleElement }) => (
													<div className="my-collapsible">
														<button
															className="my-collapsible__toggle nav-menu-btn"
															onClick={toggle}
														>
															<FontAwesomeIcon icon={faBars} />
														</button>
														<div
															className="my-collapsible__content"
															ref={setCollapsibleElement}
														>
															<div className="my-collapsible__content-inner">
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
															</div>
														</div>
													</div>
												)}
											</SlideToggle>
											
										</nav>
									</Col>
								</Row>
							</Container>
						</header>
								<Route exact path="/" component={Home} />
								<Route exact path="/registration" component={Registration} />
								<Route exact path="/admin-login" component={AdminLogin} />
								<Route exact path="/dashboard-player-list" component={DashboardPlayerList} />
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
						</BaseComponent>
					</Switch>	
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

export default Routes;
