import React from 'react';
import Slider from 'react-slick';
import { Row, Col, Layout } from 'antd';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const { Content } = Layout;
function TeamSlider() {
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 524,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Content>
			<div className="team-section">
				<div className="site-container">
					<Row>
						<Col md={24}>
							<div className="sec-title">
								<h2>
									Meet The <span>Team</span>
								</h2>
								<span className="decor" />
							</div>
						</Col>
					</Row>
					<Slider {...settings}>
						<div className="icon-item">
							<img src={'../../public/images/team-2.jpg'} alt="Awesome Logo" />
							<h3>Mark</h3>
							<p>lorem lepsum lorem lepsum lorem lepsum lorem lepsum</p>
							<ul className="social-icons">
								<li>
									<Link>
										<FontAwesomeIcon icon={faFacebook} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faInstagram} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faTwitter} />
									</Link>
								</li>
							</ul>
						</div>
						<div className="icon-item">
							<img src={'../../public/images/team-2.jpg'} alt="Awesome Logo" />
							<h3>Mark</h3>
							<p>lorem lepsum lorem lepsum lorem lepsum lorem lepsum</p>
							<ul className="social-icons">
								<li>
									<Link>
										<FontAwesomeIcon icon={faFacebook} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faInstagram} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faTwitter} />
									</Link>
								</li>
							</ul>
						</div>
						<div className="icon-item">
							<img src={'../../public/images/team-2.jpg'} alt="Awesome Logo" />
							<h3>Mark</h3>
							<p>lorem lepsum lorem lepsum lorem lepsum lorem lepsum</p>
							<ul className="social-icons">
								<li>
									<Link>
										<FontAwesomeIcon icon={faFacebook} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faInstagram} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faTwitter} />
									</Link>
								</li>
							</ul>
						</div>
						<div className="icon-item">
							<img src={'../../public/images/team-2.jpg'} alt="Awesome Logo" />
							<h3>Mark</h3>
							<p>lorem lepsum lorem lepsum lorem lepsum lorem lepsum</p>
							<ul className="social-icons">
								<li>
									<Link>
										<FontAwesomeIcon icon={faFacebook} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faInstagram} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faTwitter} />
									</Link>
								</li>
							</ul>
						</div>
						<div className="icon-item">
							<img src={'../../public/images/team-2.jpg'} alt="Awesome Logo" />
							<h3>Mark</h3>
							<p>lorem lepsum lorem lepsum lorem lepsum lorem lepsum</p>
							<ul className="social-icons">
								<li>
									<Link>
										<FontAwesomeIcon icon={faFacebook} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faInstagram} />
									</Link>
								</li>
								<li>
									<Link>
										<FontAwesomeIcon icon={faTwitter} />
									</Link>
								</li>
							</ul>
						</div>
					</Slider>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(TeamSlider);
