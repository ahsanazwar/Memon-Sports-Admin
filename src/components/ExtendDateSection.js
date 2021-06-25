import React from 'react';
import { Row, Col, Layout, DatePicker } from 'antd';
import { withTheme } from 'styled-components';
import { Form } from 'react-final-form';

const { Content } = Layout;
const ExtendDateSection = (props) => {
	return (
		<Content>
			<div className="contact-form padding-form">
				<Row justify="center">
					<Col md={6}>
						<Form
							onSubmit={props.onSubmit}
							validate={props.validate}
							initialValues={props.initialValues}
							render={({ handleSubmit }) => (
								<form onSubmit={handleSubmit} id="extendDate-form">
									<h2>Extend Date</h2>
									<label>Circle Start Date</label>
									<DatePicker
										className="extend-date-picker"
										onChange={props.onDateChange}
										disabledDate={(d) => d.isBefore(new Date())}
									/>
									<span>{props.panRequered}</span>
									<p className="success-message">{props.successMessage}</p>
									<button className="thm-btn bg-cl-1" type="submit">
										{props.isLoading}
									</button>
								</form>
							)}
						/>
					</Col>
				</Row>
			</div>
		</Content>
	);
};

export default withTheme(ExtendDateSection);
