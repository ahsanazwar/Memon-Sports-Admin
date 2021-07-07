
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import SlideToggle from 'react-slide-toggle';
import {
	faBars,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {
	Link
  } from "react-router-dom";


const Headers = () => {
	return(
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
																		<Link to="/schedule">Schedule</Link>
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
	);
};



export default (Headers);