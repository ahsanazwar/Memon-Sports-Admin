import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { InlineShareButtons } from 'sharethis-reactjs';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const { Content } = Layout;
function TraditionalCycleForm(props) {
	return (
		<div className="edit-profile-section">
			<Content>
				<div className="money-cycle-info">
					<div className="site-container">
						<Row justify="center">
							<Col md={12} xs={24}>
								<div className="money-cycle-wrapper">
									{/* {props.visibility === 'private' ? ( */}
									<Popup defaultOpen modal nested>
										{(close) => (
											<div className="modal">
												<button className="close" onClick={close}>
													&times;
												</button>
												<div className="content">
													Your circle link is
													https://sopublic.com/traditional-cycle/
													{props.linkId}. You can share your link on following:
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
															url: '', // (defaults to current url)
															image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
														}}
													/>
												</div>
											</div>
										)}
									</Popup>
									{/* ) : (
									 	''
									 )} */}

									<h2>Money Circle</h2>
									<div className="money-cycle-content">
										<img src={props.circleImg} alt="Awesome Footer Logo" />
										<p>
											Name Of Circle: <span>{props.circleName}</span>
										</p>
										<p>
											Circle Start Date:{' '}
											<span>
												{props.circleStartDate
													.split('T')
													.slice(0, -1)
													.join(' ')}
											</span>
										</p>
										<p>
											Public/Private: <span>{props.circleType}</span>
										</p>
										<p>
											Cycle Amount: <span>${props.circleAmount}</span>
										</p>
										<p>
											Months: <span>{props.circlePlan} months</span>
										</p>
										<p>
											Plan: <span>{props.circlePlan} months</span>
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
		</div>
	);
}

export default withTheme(TraditionalCycleForm);
