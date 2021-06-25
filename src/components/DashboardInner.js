import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
const { Content } = Layout;
// import { Rect } from "@svgdotjs/svg.js";
import { SVG } from '@svgdotjs/svg.js';

// var draw = SVG().addTo('#drawing');
// // draw pink square
// draw.rect(100, 100).move(100, 50).fill('#f06');
class DashboardInner extends React.Component {
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
			clip3,
			image4,
			circle4,
			clip4;

		let draw = SVG().addTo('#draw').viewbox(0, 0, 550, 550);

		for (i = 0; i < numNodes; i++) {
			if (i == 0) {
				if (radius == 1) {
					numNodes = 1;
					angle = (i / (numNodes / 2)) * Math.PI; // Calculate the angle at which the element will be placed.
					// For a semicircle, we would use (i / numNodes) * Math.PI.
					x = radius * Math.cos(angle) + width / 2; // Calculate the x position of the element.
					y = radius * Math.sin(angle) + width / 2; // Calculate the y position of the element.
					image1 = draw
						.image('../../public/images/dp-pic.jpg')
						.size(70, 70)
						.move(x + 215 - 35, y + 215 - 35);
					// image1 = draw.image('../../images/dp-pic.jpg').size(60,60).move(30,30).attr('preserveAspectRatio',"none");
					circle1 = draw
						.circle(70)
						.stroke({ color: '#2b3ca0', width: 2 })
						.center(x + 215, y + 215);

					let path = draw.path('M 147 206 A 42 42 2 1 1 160 232');
					path.fill('none').move(x + 173, y + 215 - 42);
					path.stroke({
						color: '#2b3ca0',
						width: 4,
						linecap: 'round',
						linejoin: 'round',
					});
				}
			}

			if (i > 1 || i < 2) {
				radius = 100;
				if (radius == 100) {
					numNodes = 2;
					angle = (i / (numNodes / 2)) * Math.PI; // Calculate the angle at which the element will be placed.
					// For a semicircle, we would use (i / numNodes) * Math.PI.
					x = radius * Math.cos(angle) + width / 2; // Calculate the x position of the element.
					y = radius * Math.sin(angle) + width / 2; // Calculate the y position of the element.
					image2 = draw
						.image('../../public/images/dp-pic.jpg')
						.size(60, 60)
						.move(x - 30 + centerPos, y - 30 + centerPos);
					circle2 = draw
						.circle(60)
						.stroke({ color: '#2b3ca0', width: 2 })
						.center(x + centerPos, y + centerPos);

					let path1 = draw.path('M 162 200 A 38 36 0 1 1 188 234');
					path1.fill('none').move(x - 38 + centerPos, y - 36 + centerPos);
					path1.stroke({
						color: '#1bdc1b',
						width: 4,
						linecap: 'round',
						linejoin: 'round',
					});
				}
			}

			if (i > 3 || i < 5) {
				radius = 135;
				if (radius == 135) {
					numNodes = 4;
					angle = (i / (numNodes / 2)) * Math.PI; // Calculate the angle at which the element will be placed.
					// For a semicircle, we would use (i / numNodes) * Math.PI.
					x = radius * Math.cos(angle + 15) + width / 2; // Calculate the x position of the element.
					y = radius * Math.sin(angle + 15) + width / 2; // Calculate the y position of the element.
					image3 = draw
						.image('../../public/images/dp-pic.jpg')
						.size(60, 60)
						.move(x - 30 + centerPos, y - 30 + centerPos);
					circle3 = draw
						.circle(60)
						.stroke({ color: '#2b3ca0', width: 3 })
						.center(x + centerPos, y + centerPos);
					let path2 = draw.path('M 162 200 A 38 36 0 1 1 188 234');
					path2.fill('none').move(x - 38 + centerPos, y - 36 + centerPos);
					path2.stroke({
						color: '#fff',
						width: 4,
						linecap: 'round',
						linejoin: 'round',
					});
				}
			}

			if (i > 5 || i < 8) {
				radius = 215;
				if (radius == 215) {
					numNodes = 8;
					angle = (i / (numNodes / 2)) * Math.PI - 180 - 100; // Calculate the angle at which the element will be placed.
					// For a semicircle, we would use (i / numNodes) * Math.PI.
					x = radius * Math.cos(angle) + width / 2; // Calculate the x position of the element.
					y = radius * Math.sin(angle) + width / 2; // Calculate the y position of the element.
					image4 = draw
						.image('../../public/images/dp-pic.jpg')
						.size(60, 60)
						.move(x - 30 + centerPos, y - 30 + centerPos);
					circle4 = draw
						.circle(60)
						.stroke({ color: '#2b3ca0', width: 3 })
						.center(x + centerPos, y + centerPos);
					let path3 = draw.path('M 162 200 A 38 36 0 1 1 188 234');
					path3.fill('none').move(x - 38 + centerPos, y - 36 + centerPos);
					path3.stroke({
						color: '#e8140f',
						width: 4,
						linecap: 'round',
						linejoin: 'round',
					});
				}
			}

			clip1 = draw.clip().add(circle1);
			image1.clipWith(clip1);
			draw.use(circle1).fill('rgba(255,255,255,0)');

			clip2 = draw.clip().add(circle2);
			image2.clipWith(clip2);
			draw.use(circle2).fill('rgba(255,255,255,0)');

			clip3 = draw.clip().add(circle3);
			image3.clipWith(clip3);
			draw.use(circle3).fill('rgba(255,255,255,0)');

			clip4 = draw.clip().add(circle4);
			image4.clipWith(clip4);
			draw.use(circle4).fill('rgba(255,255,255,0)');
		}
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
										<Col md={6} xs={24}>
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
										<Col md={14} xs={24}>
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

export default withTheme(DashboardInner);
