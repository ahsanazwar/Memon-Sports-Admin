import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
// import { Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InlineShareButtons } from 'sharethis-reactjs';
import Popup from 'reactjs-popup';
import { PaginatedList } from 'react-paginated-list';

const { Content } = Layout;
function TraditionalCycleForm2(props) {
	const filteredPanel = props.getCardList.filter((item) => {
		return item.name
			? item.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
			: '';
	});

	const finalArr = filteredPanel.filter(
		({ id }) =>
			!props.getUserTradData.some((exclude) =>
				exclude.trad ? exclude.trad.id === id : ''
			)
	);
	console.log(finalArr);

	return (
		<>
			<div className="dashboard-inner-section">
				<Content>
					<div className="contact-form trad-search">
						<div className="site-container garden-sec">
							<Row justify="center">
								<Col md={24} xs={24}>
									<h2>Public Pool</h2>
									<form
										id="dashboard-form"
										onSubmit={(e) => e.preventDefault()}
									>
										<Row justify="center" align="bottom" gutter={30}>
											<Col className="gutter-row" md={14}>
												<div className="search-bar-wrap">
													<div className="search-btn-group">
														<Link to="/traditional">Create Traditional</Link>
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
																		The circle is full. You can join other
																		circles.
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
													<input
														type="text"
														placeholder="Search by circle name"
														onChange={props.getSearch}
														onSubmit={(e) => e.preventDefault()}
													/>
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

			<div className="edit-profile-section">
				<Content>
					<div className="money-cycle-info">
						<div className="site-container">
							<Row justify="center">
								<Col md={17} xs={24}>
									<h2 className="money-text">Money Circles</h2>
									<p className="money-text">
										lorem lepsum lorem lepsum lorem lepsum lorem lepsum lorem
										lepsum lorem lepsum lorem lepsum lorem lepsum lorem lepsum
										lorem lepsum lorem lepsum lorem lepsum lorem lepsum lorem
										lepsum lorem lepsum lorem lepsum lorem lepsum lorem lepsum
									</p>
								</Col>
								<Col md={8} xs={24}>
									{finalArr != '' ? (
										<div className="money-cycle-wrapper">
											<PaginatedList
												list={filteredPanel}
												itemsPerPage={3}
												renderList={(list) => (
													<>
														{list.map((item) => {
															return (
																<div className="money-cycle-content">
																	<img
																		src={item.image}
																		alt="Awesome Footer Logo"
																	/>
																	<p>
																		Name Of Circle Owner:{' '}
																		<span>{item.name}</span>
																	</p>
																	<p>
																		Circle Start Date:{' '}
																		<span>
																			{item.startDate
																				? item.startDate
																						.split('T')
																						.slice(0, -1)
																						.join(' ')
																				: ''}
																		</span>
																	</p>
																	<p>
																		Name Of Circle: <span>{item.name}</span>
																	</p>
																	<p>
																		Public/Private:{' '}
																		<span>{item.visibility}</span>
																	</p>
																	<p>
																		Cycle Amount: <span>${item.amount}</span>
																	</p>
																	{/* <p>
																		Months: <span>{item.package} Months</span>
																	</p> */}
																	<p>
																		Plan: <span>{item.package} Months</span>
																	</p>
																	<button
																		onClick={() => props.joinCircle(item.id)}
																	>
																		Join
																	</button>
																	{
																		// 	props.getUserTradData ?
																		// 	props.getUserTradData.filter( (list) => list.trad ? list.trad.id.indexOf(item.id) !== -1 ? <button>
																		// 	Already Joined
																		// </button> : '' : '') : 'hi'
																		// props.getUserTradData.filter( (i) =>{
																		// 	i.trad ? i.trad.id == item.id ?  : <button onClick={() => props.joinCircle(item.id)}>
																		// 				Join
																		// 			</button>
																		// 		: ''
																		// })
																	}
																</div>
															);
														})}
													</>
												)}
											/>
										</div>
									) : props.getCardList == 'loading' ? (
										<img
											className="data-loader"
											src={'../../images/loader.gif'}
											alt="Awesome Footer Logo"
										/>
									) : (
										<h2>Result Not found</h2>
									)}
								</Col>
							</Row>
						</div>
					</div>
				</Content>
			</div>
		</>
	);
}

export default withTheme(TraditionalCycleForm2);
