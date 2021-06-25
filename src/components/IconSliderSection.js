import React from 'react';
import Slider from 'react-slick';
import { withTheme } from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;
function IconSliderSection() {
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
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
			<div className="icon-slider-section">
				<div className="site-container">
					<Slider {...settings}>
						<div className="icon-item">
							<img src={'../../public/images/icon-1.png'} alt="Awesome Logo" />
						</div>
						<div className="icon-item">
							<img src={'../../public/images/icon-1.png'} alt="Awesome Logo" />
						</div>
						<div className="icon-item">
							<img src={'../../public/images/icon-1.png'} alt="Awesome Logo" />
						</div>
						<div className="icon-item">
							<img src={'../../public/images/icon-1.png'} alt="Awesome Logo" />
						</div>
						<div className="icon-item">
							<img src={'../../public/images/icon-1.png'} alt="Awesome Logo" />
						</div>
						<div className="icon-item">
							<img src={'../../public/images/icon-1.png'} alt="Awesome Logo" />
						</div>
						<div className="icon-item">
							<img src={'../../public/images/icon-1.png'} alt="Awesome Logo" />
						</div>
					</Slider>
				</div>
			</div>
		</Content>
	);
}

export default withTheme(IconSliderSection);
