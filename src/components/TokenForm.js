import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { Form, Field } from 'react-final-form';

const { Content } = Layout;
const TokenForm = (props) => {
	return (
		<Content>
			<div className="contact-form register-form padding-form">
				<Row justify="">
					<Col md={12}>
						<Form
							onSubmit={props.onSubmit}
							validate={props.validate}
							initialValues={props.initialValues}
							render={({ handleSubmit }) => (
								<form onSubmit={handleSubmit} id="register-form">
									<h2>Verify Account</h2>
									<p>Enter a token to reset your password</p>
									<Field name="token" component="input" placeholder="token*">
										{({ input, meta }) => (
											<div>
												<label>Token</label>
												<input type="text" {...input} />
												{meta.touched && meta.error && (
													<span>{meta.error}</span>
												)}
											</div>
										)}
									</Field>
									<button className="thm-btn bg-cl-1" type="submit">
										Submit
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

export default withTheme(TokenForm);
