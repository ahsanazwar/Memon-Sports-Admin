import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
const { Content } = Layout;
// import { Rect } from "@svgdotjs/svg.js";
import { SVG } from '@svgdotjs/svg.js';
import * as userActions from '../actions/userActions';

// var draw = SVG().addTo('#drawing');
// // draw pink square
// draw.rect(100, 100).move(100, 50).fill('#f06');
class DashboardInner2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopup: false,
			getUserData: [''],
			getUserName: '',
			getUserImg: '',
			getUserEmail: '',
			getUserDob: '',
			getUserOccupation: '',
			getUserId: '',
		};
	}

	componentDidMount() {
		let radius = 1,
			numNodes = 1,
			width = radius * 2 + 50,
			angle,
			x,
			y,
			i,
			centerPos = 250 - 37,
			image1,
			circle1,
			clip1,
			image2,
			circle2,
			clip2,
			image3,
			circle3,
			clip3;

		const urlParams = new URLSearchParams(window.location.search);
		const tradId = urlParams.get('id');

		let getToken = JSON.parse(localStorage.getItem('user'));

		let getUserData = (userId) => {
			this.props.actions.userGet(userId, getToken.token).then((todos) => {
				if (todos.data) {
					this.setState({
						getUserName: todos.data.fullName,
						getUserOccupation: todos.data.occupation,
						getUserImg: todos.data.image,
						getUserEmail: todos.data.email,
						showPopup: true,
					});
					// alert(JSON.stringify(todos.data));
				}
			});
		};

		const payload = { id: tradId };
		// api call
		let draw = SVG().addTo('#draw').viewbox(0, 0, 450, 450);

		this.props.actions.getTraditonById(payload).then((todos) => {
			if (todos.data) {
				console.log(JSON.stringify(todos.data));
				this.setState({ getUserData: todos.data });
				// canvas code
				// var count = 0;
				// this.state.getUserData.map((item,index) => {

				for (i = 0; i < this.state.getUserData.length; i++) {
					if (i == 0) {
						if (radius == 1) {
							numNodes = 1;
							angle = (i / (numNodes / 2)) * Math.PI; // Calculate the angle at which the element will be placed.
							// For a semicircle, we would use (i / numNodes) * Math.PI.
							x = radius * Math.cos(angle) + width / 2; // Calculate the x position of the element.
							y = radius * Math.sin(angle) + width / 2; // Calculate the y position of the element.
							image1 = draw
								.image(this.state.getUserData[i].user.image)
								.size(70, 70)
								.move(x + 214 - 35, y + 220 - 35);

							circle1 = draw
								.circle(70)
								.stroke({ color: '#2b3ca0', width: 2 })
								.center(x + 214, y + 220);

							clip1 = draw.clip().add(circle1);
							image1.clipWith(clip1);
							draw.use(circle1).fill('rgba(255,255,255,0)');
							circle1.addClass(this.state.getUserData[i].user.id);

							let path = draw.path('M 147 206 A 42 42 2 1 1 160 232');
							path.fill('none').move(x + 172, y + 220 - 42);
							path.stroke({
								color: '#d8d700',
								width: 4,
								linecap: 'round',
								linejoin: 'round',
							});

							circle1.on('click', function () {
								let userId = this.classes();

								getUserData(userId);
							});
						}
					}
					if (i >= 1 && i <= 5) {
						radius = 90;
						if (radius == 90) {
							numNodes = 5;
							angle = (i / (numNodes / 2)) * Math.PI + 20 * 5; // Calculate the angle at which the element will be placed.
							// For a semicircle, we would use (i / numNodes) * Math.PI.
							x = radius * Math.cos(angle) + width / 2; // Calculate the x position of the element.
							y = radius * Math.sin(angle) + width / 2; // Calculate the y position of the element.
							image2 = draw
								.image(this.state.getUserData[i].user.image)
								.size(30, 30)
								.move(x - 15 + centerPos, y - 15 + centerPos);
							circle2 = draw
								.circle(30)
								.stroke({ color: '#2b3ca0', width: 2 })
								.center(x + centerPos, y + centerPos)
								.attr('userId', this.state.getUserData[i].user.id);

							clip2 = draw.clip().add(circle2);
							image2.clipWith(clip2);
							draw.use(circle2).fill('rgba(255,255,255,0)');
							circle2.addClass(this.state.getUserData[i].user.id);

							let path1 = draw.path(' M 154 171 A 21 20 0 1 1 169 193');
							path1.fill('none').move(x - 21 + centerPos, y - 20 + centerPos);
							path1.stroke({
								color: '#2b3ca0',
								width: 3,
								linecap: 'round',
								linejoin: 'round',
							});

							circle2.on('click', function () {
								let userId = this.classes();
								getUserData(userId);
							});
						}
					}

					if (i >= 6 && i <= 17) {
						radius = 160;
						if (radius == 160) {
							numNodes = this.state.getUserData.length - 6;
							angle = (i / (numNodes / 2)) * Math.PI + 20; // Calculate the angle at which the element will be placed.
							// For a semicircle, we would use (i / numNodes) * Math.PI.
							x = radius * Math.cos(angle) + width / 2; // Calculate the x position of the element.
							y = radius * Math.sin(angle) + width / 2; // Calculate the y position of the element.
							image3 = draw
								.image(this.state.getUserData[i].user.image)
								.size(40, 40)
								.move(x - 20 + centerPos, y - 20 + centerPos);
							circle3 = draw
								.circle(40)
								.stroke({ color: '#2b3ca0', width: 2 })
								.center(x + centerPos, y + centerPos);

							clip3 = draw.clip().add(circle3);
							image3.clipWith(clip3);
							draw.use(circle3).fill('rgba(255,255,255,0)');
							circle3.addClass(this.state.getUserData[i].user.id);

							let path2 = draw.path(' M 159 175 A 25 24 0 1 1 173 197');
							path2.fill('none').move(x - 25 + centerPos, y - 24 + centerPos);
							path2.stroke({
								color: '#2b3ca0',
								width: 4,
								linecap: 'round',
								linejoin: 'round',
							});

							circle3.on('click', function () {
								let userId = this.classes();
								getUserData(userId);
							});
						}
					}
				}
				// });
			}
		});
	}

	render() {
		// alert(JSON.stringify());
		return (
			<div className="dashboard-inner-section">
				<Content>
					{this.state.showPopup ? (
						<div className="canvas-popup-wrapper">
							<div className="canvas-popup">
								<button
									className="close-popup"
									onClick={() => this.setState({ showPopup: false })}
								>
									x
								</button>
								<img
									src={this.state.getUserImg}
									alt="Awesome Footer Logo"
									className=""
								/>
								<p>User Name: {this.state.getUserName}</p>
								<p>Occupation: {this.state.getUserOccupation}</p>
								{/* <p>Date of birth: {this.state.getUserDob}</p> */}
								{/* <p>Email: {this.state.getUserEmail}</p>
								<p>User Name: {this.state.getUserName}</p> */}
								<p>Circle Name: XYZ Circle</p>
								<Link to="/chat-view" className="chat-btn">
									Chat
								</Link>
							</div>
						</div>
					) : null}
					<div className="contact-form">
						<div className="site-container">
							<Row justify="center" align="center">
								<h2 className="money-text">My Flower</h2>
								<Col md={24} xs={24}>
									<Row
										className="garden-wrap"
										justify="space-around"
										align="middle"
									>
										<Col md={8} xs={24}>
											{
												// this.state.getUserData.map((item,index) =>{
												<div className="canvas-trad-info-wrap">
													<div className="canvas-trad-info-view">
														<h2>
															{this.state.getUserData[0].trad
																? // item.trad.name
																  this.state.getUserData[0].trad.name
																: ''}
														</h2>
														<img
															src={
																this.state.getUserData[0].trad
																	? // item.trad.name
																	  this.state.getUserData[0].trad.image
																	: ''
															}
															alt="Awesome Footer Logo"
														/>
														<div className="flex-field">
															<p>
																Amount : $
																{this.state.getUserData[0].trad
																	? // item.trad.name
																	  this.state.getUserData[0].trad.amount
																	: ''}
															</p>
															<p>
																Plan :{' '}
																{this.state.getUserData[0].trad
																	? // item.trad.name
																	  this.state.getUserData[0].trad.package
																	: ''}{' '}
																Months
															</p>
														</div>
														<div className="flex-field">
															<p>
																Type :{' '}
																{this.state.getUserData[0].trad
																	? // item.trad.name
																	  this.state.getUserData[0].trad.visibility
																	: ''}
															</p>
															<p>
																Start Date :{' '}
																{this.state.getUserData[0].trad
																	? // item.trad.name
																	  this.state.getUserData[0].trad.start_date
																			.split('T')
																			.slice(0, -1)
																			.join(' ')
																	: ''}{' '}
															</p>
														</div>
													</div>
												</div>
												// })
											}
											<div className="trad-links">
												<Link to="/chat-view" className>
													Group Chat with Flower
												</Link>
												<div className="total-earning-wrap">
													<div className="total-earning-head">
														total earning amount
													</div>
													{this.state.getUserData[0].trad ? (
														// item.trad.name
														<p>
															$
															{this.state.getUserData[0].trad.amount *
																this.state.getUserData[0].trad.package}
														</p>
													) : (
														''
													)}
												</div>
											</div>
										</Col>
										<Col md={12} xs={24}>
											<div className="canvas-group">
												<div id="draw" className="canvas-flower" />
											</div>
											{/* <div className="canvas-group">
												<img
													src="../../public/images/flower.jpg"
													alt="Awesome Footer Logo"
													className="canvas-image"
												/>
											</div> */}
										</Col>
										{/* <Col md={8} xs={24}>
											<div className="my-garder-btn-wrap">
												<h2>Panel</h2>
												<Link to="/chat-view" className>
													Group Chat
												</Link>
												<img
													src={'../../public/images/bg-flower.png'}
													alt="Awesome Footer Logo"
													className="flower-logo"
												/>
											</div>
										</Col>
											 */}
									</Row>
								</Col>
							</Row>
						</div>
					</div>
				</Content>
			</div>
		);
	}
}

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ ...userActions }, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withTheme(DashboardInner2));
