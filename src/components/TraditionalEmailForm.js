import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
const { Content } = Layout;
function TraditionalForm(props) {
	return (
		<div className="traditional-email-form">
			<Content>
				<div className="">
					<div className="site-container">
						<Row justify="center">
							<Col md={12}>
								<h2>Traditional Public Circle</h2>
								<div className="circle-img">
									<img src={props.circleImg} alt="Awesome Logo" />
								</div>
								<div className="trad-email-fields">
									<p>
										<span>Circle Name:</span> {props.circleName}
										{/* <span>Name Of Circle Owner:</span> undefined */}
										{/* Dravid Chales */}
									</p>
									<p>
										<span>Plan:</span> {props.circlePlan} Month
									</p>
								</div>
								<div className="trad-email-fields">
									<p>
										<span>User Name:</span> {props.userName}
										{/* 6:00pm-9:00px */}
									</p>
									<p>
										<span>Amount:</span> ${props.circleAmount}
									</p>
								</div>
								{/* <div className="trad-email-fields">
									<p>
										<span>Select Time Slot:</span> undefined
										6:00pm-9:00px
									</p>
									<p>
										<span>Circle Name:</span> {props.circleName}
									</p>
								</div> */}

								<div className="trad-email-fields">
									<p>
										<span>Circle Start Date:</span>{' '}
										{props.circleStartDate.split('T').slice(0, -1).join(' ')}
									</p>
									<p>
										<span>Circle Type:</span> {props.circleType}
									</p>
								</div>
								<div className="trad-email-fields">
									<button onClick={props.sendPay}>Send</button>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
		</div>
	);
}

export default withTheme(TraditionalForm);
