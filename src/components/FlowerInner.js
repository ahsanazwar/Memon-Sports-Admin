import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
const { Content } = Layout;
// import { Rect } from "@svgdotjs/svg.js";
import * as userActions from '../actions/userActions';

// var draw = SVG().addTo('#drawing');
// // draw pink square
// draw.rect(100, 100).move(100, 50).fill('#f06');
class FlowerInner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopup: false,
			getTradData: [''],
		};
	}
	componentDidMount() {
		let getToken2 = JSON.parse(localStorage.getItem('user'));

		let payload = {
			user_id: getToken2.id,
		};
		this.props.actions
			.getTradByUserId(payload, getToken2.token)
			.then((todos) => {
				if (todos.data) {
					this.setState({ getTradData: todos.data });
				}
			});
	}

	render() {
		return (
			<div className="dashboard-inner-section">
				<Content>
					<div className="contact-form">
						<div className="site-container">
							<Row justify="center" align="center">
								<Col md={24} xs={24}>
									<Row
										className="garden-wrap"
										justify="space-around"
										align="middle"
									>
										<Col md={10} xs={24}>
											<div className="my-garder-btn-wrap">
												{/* <h2>Panel</h2> */}
												{/* <Link to="/chat-view" className>
													Group Chat
												</Link> */}
												{/* <img
													src={'../../images/bg-flower.png'}
													alt="Awesome Footer Logo"
													className="flower-logo"
												/> */}
												<h2>Joined Panels</h2>
												<ul className="groups-list">
													{this.state.getTradData.map((v, i) => {
														return (
															<li key={i}>
																<Link
																	to={
																		v.trad ? `/canvas-view?id=${v.trad.id}` : ''
																	}
																	className
																>
																	{v.trad ? v.trad.name : ''}
																</Link>
															</li>
														);
													})}
												</ul>
											</div>
										</Col>
									</Row>
									<Row
										className="garden-wrap"
										justify="space-around"
										align="middle"
									>
										<Col md={7} xs={24} />
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
)(withTheme(FlowerInner));
