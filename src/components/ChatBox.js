import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { Content } = Layout;
function ChangePasswordForm(props) {
	return (
		<div className="edit-profile-section chat-box-section">
			<Content>
				<div className="chat-box">
					<div className="">
						<Row justify="center">
							<Col md={24}>
								<div className="chat-header">
									<div className="chat-head-dp">
										<img src={props.image} alt="Awesome Footer Logo" />
									</div>
									<div className="chat-head-title">
										<p>Group Name</p>
									</div>
								</div>
								<div className="chat-box-wrap">
									<div className="chat-text-box chat-wrap-in">
										<div className="chat-text chat-in">
											<p className="sender-name">Ahmed</p>
											<p>
												kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk
												kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk
												kcnsjncjnk kcnsjncjnk
											</p>
										</div>
									</div>

									<div className="chat-text-box chat-wrap-out">
										<div className="chat-text chat-out">
											<p className="sender-name">Ahsan</p>
											<p>lallala lallala lallala lallala lallala</p>
										</div>
									</div>
									<div className="chat-text-box chat-wrap-in">
										<div className="chat-text chat-in">
											<p className="sender-name">Ahmed</p>
											<p>
												kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk
												kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk
												kcnsjncjnk kcnsjncjnk
											</p>
										</div>
									</div>
									<div className="chat-text-box chat-wrap-in">
										<div className="chat-text chat-in">
											<p className="sender-name">Ahmed</p>
											<p>
												kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk
												kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk kcnsjncjnk
												kcnsjncjnk kcnsjncjnk
											</p>
										</div>
									</div>
									<div className="chat-text-box chat-wrap-out">
										<div className="chat-text chat-out">
											<p className="sender-name">Ahsan</p>
											<p>lallala lallala lallala lallala lallala</p>
										</div>
									</div>
									{
										// props.message
										props.message.map((data) => (
											<div className="chat-text-box chat-wrap-out">
												<div className="chat-text chat-out">
													<p className="sender-name">Ahsan</p>
													<p>{data}</p>
												</div>
											</div>
										))
									}
								</div>

								<div className="type-message-wrap">
									<form>
										<div className="chat-button-wrap">
											<input
												className="message-type-input"
												type="text"
												name="message"
												placeholder="Type Message ..."
												onChange={props.handleChange}
											/>
											<a
												className="message-send-btn"
												onClick={props.messegeSend}
											>
												<FontAwesomeIcon icon={faPaperPlane} />
											</a>
										</div>
									</form>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
		</div>
	);
}

export default withTheme(ChangePasswordForm);
