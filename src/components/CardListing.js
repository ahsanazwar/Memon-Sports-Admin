import React from 'react';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';

const { Content } = Layout;
function CardListing(props) {
	// alert(JSON.stringify(props.getCardList))
	return (
		<Content>
			{props.getCardList !== '' ? (
				<div className="card-listing">
					<div className="site-container">
						<Row justify="center">
							<Col md={12} xs={24}>
								<h2>
									Your Cards Listing{' '}
									<a className="add-new-card-btn">Add New Card</a>
								</h2>
								<ul>
									{props.getCardList.map((item, i) => {
										return (
											<li key={i.id}>
												<div className="card-detail">
													<p>
														<span>Card No</span>: ...
														{item.card ? item.card.last4 : ''}
													</p>
													<p>
														<span>Expiry Month</span>:{' '}
														{item.card ? item.card.exp_month : ''}
														<span className="year-text">Expiry Year</span>:{' '}
														{item.card ? item.card.exp_year : ''}
													</p>
												</div>
												<div>
													{/* <button className="edit-btn">Edit</button> */}
													<button className="del-btn">Delete</button>
												</div>
											</li>
										);
									})}
									{/* {
									props.getCardList.map((data)=>{
										<li>
											<div className="card-detail">
												<p>
													<span>Card Holder Name</span>: David Johnson
												</p>
												<p>
													<span>Card No</span>: {data.card.last4}
												</p>
											</div>
											<div>
												<button className="edit-btn">Edit</button>
												<button className="del-btn">Delete</button>
											</div>
										</li>								
									})
								} */}
								</ul>
							</Col>
						</Row>
					</div>
				</div>
			) : (
				''
			)}
		</Content>
	);
}

export default withTheme(CardListing);
