import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InlineShareButtons } from 'sharethis-reactjs';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const { Content } = Layout;

const GardenInner = (props) => {
	return (
		<div className="dashboard-inner-section">
			<Content>
				<div className="contact-form">
					<div className="site-container garden-sec">
						<Row justify="center">
							<Col md={24} xs={24}>
								<h2>Public Pool</h2>
								<Form
									onSubmit={props.onSubmit}
									validate={props.validate}
									initialValues={props.initialValues}
									render={({ handleSubmit }) => (
										<form onSubmit={handleSubmit} id="dashboard-form">
											<Row justify="center" align="bottom" gutter={30}>
												<Col className="gutter-row" md={14}>
													<div className="search-bar-wrap">
														<div className="search-btn-group">
															<Link to="/trational">Create Traditional</Link>
															<Popup
																trigger={
																	<a className="button">
																		{' '}
																		Create Non Traditional{' '}
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
																			Your members are less than 30 please add
																			more members to continue
																			<InlineShareButtons
																				config={{
																					alignment: 'center', // alignment of buttons (left, center, right)
																					color: 'social', // set the color of buttons (social, white)
																					enabled: true, // show/hide buttons (true, false)
																					font_size: 16, // font size for the buttons
																					labels: 'cta', // button labels (cta, counts, null)
																					language: 'en', // which language to use (see LANGUAGES)
																					networks: [
																						// which networks to include (see SHARING NETWORKS)
																						'facebook',
																						'linkedin',
																						'whatsapp',
																						'twitter',
																					],
																					padding: 12, // padding within buttons (INTEGER)
																					radius: 4, // the corner radius on each button (INTEGER)
																					show_total: false,
																					size: 40, // the size of each button (INTEGER)

																					// OPTIONAL PARAMETERS
																					url: 'https://www.youtube.com/', // (defaults to current url)
																					image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
																				}}
																			/>
																		</div>
																	</div>
																)}
															</Popup>
														</div>
														<Field
															name="searchbar"
															component="input"
															placeholder="Search By panel name*"
														>
															{({ input, meta }) => (
																<div>
																	<input
																		type="text"
																		placeholder="Search By panel name"
																		{...input}
																	/>
																	{meta.touched && meta.error && (
																		<span>{meta.error}</span>
																	)}
																</div>
															)}
														</Field>
													</div>
												</Col>
												<Col className="gutter-row filter-res" md={3}>
													<div className="dropdown-selector dropdown-bottom">
														<span className="filter-span">Filter</span>
														<FontAwesomeIcon
															className="dropdown-icon"
															icon={faArrowDown}
														/>
														<ul className="dropdown-selector">
															<div className="dropdown-caret" />
															<li>
																<Link>Traditional</Link>
															</li>
															<li>
																<Link>Non Traditional</Link>
															</li>
														</ul>
													</div>
												</Col>
											</Row>
										</form>
									)}
								/>

								<Row className="garden-wrap" justify="space-around">
									<Col md={6} xs={6} />
									<Col md={8} xs={6}>
										<div className="canvas-group" />
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
		</div>
	);
};

export default withTheme(GardenInner);
