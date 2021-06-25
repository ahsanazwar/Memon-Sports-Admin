import React from 'react';
import Slider from 'react-slick';
import { withTheme } from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;
function HomeBannerSlider() {
	let settings = {
		dots: false,
		infinite: true,
		speed: 2500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		cssEase: 'ease',
	};
	return (
		<Content>
			<div className="home-banner-section">
				<Slider {...settings}>
					<div className="slider-item">
						<div
							className="slider-wrapper"
							style={{
								backgroundImage: 'url(../../public/images/sl-img1.jpeg)',
							}}
						>
							<div className="site-container" />
						</div>
					</div>
					<div className="slider-item">
						<div
							className="slider-wrapper"
							style={{
								backgroundImage: 'url(../../public/images/home-img2.png)',
							}}
						>
							<div className="site-container" />
						</div>
					</div>
					<div className="slider-item">
						<div
							className="slider-wrapper"
							style={{
								backgroundImage: 'url(../../public/images/home-img4.png)',
							}}
						>
							<div className="site-container" />
						</div>
					</div>
					<div className="slider-item">
						<div
							className="slider-wrapper"
							style={{
								backgroundImage: 'url(../../public/images/sl-img2.jpeg)',
							}}
						>
							<div className="site-container" />
						</div>
					</div>
				</Slider>
				<div className="bottom-line" />
			</div>
		</Content>
	);
}

export default withTheme(HomeBannerSlider);
