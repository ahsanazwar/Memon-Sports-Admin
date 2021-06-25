import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import SlideToggle from 'react-slide-toggle';
import Popup from 'reactjs-popup';
// get our fontawesome imports
import {
	faBuilding,
	faEnvelope,
	faPhoneAlt,
	faUser,
	faLock,
	faUserLock,
	faBars,
	faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Header } = Layout;

function TopBar(props) {
	let isLoggedIn = localStorage.getItem('userLogin');
	//.split(' ').slice(0, -1).join(' ')
	let userName = isLoggedIn
		? JSON.parse(localStorage.getItem('user')).fullName
		: '';
	// alert(JSON.stringify(props.getBalanceData));
	return (
		<Header className="">
			<div className="top-bar-area">
				<div className="site-container">
					<Row>
						<Col md={12}>
							<ul>
								<li>
									<FontAwesomeIcon icon={faBuilding} />
									Los Angeles, CA
								</li>
								<li>
									<FontAwesomeIcon icon={faEnvelope} />
									<Link to="mailto:info@masterhn.com">
										<span className="flaticon-new-email-outline envelop" />
										Support@SoPublic.com
									</Link>
								</li>
							</ul>
						</Col>
						<Col md={12}>
							<div className="contact-info-right">
								<div className="phnumber">
									<ul>
										<li>
											<Link to="tel:+96550222670">
												<FontAwesomeIcon icon={faPhoneAlt} />
												(747) 444-0067
											</Link>
										</li>

										{isLoggedIn == 'true' ? (
											<li>
												<Link
													onClick={() => {
														localStorage.clear();
														window.location.href = '/';
													}}
												>
													<FontAwesomeIcon icon={faLock} /> Logout
												</Link>
											</li>
										) : (
											<li>
												<Link to="login">
													<FontAwesomeIcon icon={faUser} /> Login
												</Link>
											</li>
										)}
										{isLoggedIn == 'true' ? (
											<li>
												<Link to="/dashboard">
													<FontAwesomeIcon icon={faUserLock} /> {userName}
													{/* <span className="topbar-username"></span> */}
												</Link>
											</li>
										) : (
											<li>
												<Link to="register">
													<FontAwesomeIcon icon={faUser} />
													Sign up
												</Link>
											</li>
										)}
										{isLoggedIn == 'true' ? (
											<li>
												<Popup
													trigger={
														<a className="button">
															<FontAwesomeIcon icon={faWallet} />
															Wallet
															{/* <span className="topbar-username"></span> */}
														</a>
													}
													modal
													nested
												>
													{(close) => (
														<div className="modal">
															<button className="close" onClick={close}>
																&times;
															</button>
															<div className="content">
																<p className="head-balance-text">
																	Your Curent Balance is $
																	{props.getBalanceData.available
																		? props.getBalanceData.available[0].amount
																		: ''}
																</p>
															</div>
														</div>
													)}
												</Popup>
											</li>
										) : (
											''
										)}
									</ul>
								</div>

								<div className="top-social-links">
									{/* <ul>
										<li>
											<a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
										</li>
										<li>
											<a href="#"></a>
										</li>
										<li>
											<a href="#"></a>
										</li>
									</ul> */}
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>

			<div className="main-menu">
				<div className="site-container">
					<Row align="center">
						<Col xl={4} lg={24} md={24} sm={24} xs={24}>
							<div className="logo">
								<Link to="/">
									<img
										src={'../../public/images/main-logo-white.png'}
										alt="Awesome Logo"
									/>
								</Link>
							</div>
						</Col>
						<Col xl={20} lg={24} md={24} sm={24} xs={24}>
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
												<ul className="navigation">
													<li className="current">
														<NavLink
															activeClassName="active"
															to="/"
															exact={true}
														>
															Home
														</NavLink>
													</li>
													<li>
														<NavLink activeClassName="active" to="/garden">
															Public
														</NavLink>
													</li>

													<li>
														<NavLink activeClassName="active" to="/about">
															About Us
														</NavLink>
													</li>
													<li>
														<NavLink activeClassName="active" to="/how-it-work">
															How it Work
														</NavLink>
													</li>
													<li>
														<NavLink activeClassName="active" to="/contact-us">
															Contact Us
														</NavLink>
													</li>
												</ul>
											</div>
										</div>
									</div>
								)}
							</SlideToggle>
						</Col>
					</Row>
				</div>
			</div>
		</Header>
	);
}

export default withTheme(TopBar);
