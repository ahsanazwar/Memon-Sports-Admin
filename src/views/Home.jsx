import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const settings = {
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <>
            {/* <div className="schedule-section">
                <img className="img-fluid cricket-img" src={"/assets/images/schedule.jpg"} />
            </div> */}
            <div className="latest-news">
                <div className="news-label"><span>Latest News</span></div>
                <marquee behavior="infinite" direction="left">Cricket 2021 Cricket 2021 Cricket 2021 Cricket 2021 Cricket 2021 Cricket 2021 Cricket 2021 Cricket 2021</marquee>
            </div>
            <div className="home-slider">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Slider {...settings}>
                                <div className="slides">
                                    <img src={"/assets/images/schedule3.jpg"} fluid/>
                                </div>
                                <div className="slides">
                                    <img src={"/assets/images/slide-2.jpg"} fluid/>
                                    <div className="slide-content">
                                        <h2>Registration Open</h2>
                                        <p>HB Cricket Tournament Season 3 2021</p>
                                        <a src='/'>CLICK HERE TO REGISTER</a>
                                    </div>
                                </div>
                             </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            
            <div className="about-section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2>FIRST EVER PLAYER AND TEAM <br/> REGISTRATION PROGRESS IN PAKISTAN</h2>
                            <p className="about-sub-head">With 1 click you can now register any Team and player any time</p>
                        </Col>
                        <Col lg={4}>
                            <div className="about-card">
                            <img className="img-fluid" src={"/assets/images/multisp.png"}/>
                                <h3>multiple sports</h3>
                                <p>Players and team can be register in different sports</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="about-card">
                                <img className="img-fluid" src={"/assets/images/who-we.png"}/>
                                <h3>who we are</h3>
                                <p>providing virtual platform for players and team</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="about-card">
                                <img className="img-fluid" src={"/assets/images/setting.png"}/>
                                <h3>what we do</h3>
                                <p>Enabling youth to engage in sports/ physical activity</p>
                            </div>
                        </Col>
                    </Row>
                </Container>        
            </div>
            <div className="home-page-banner">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h2>FIRST TIME IN PAKISTAN</h2>
                            <h1>VIRTUAL TEAM REGISTRATION</h1>
                            <a src='/'>CLICK HERE TO REGISTER</a>
                        </Col>
                        <Col lg={6}>
                        <img className="img-fluid cricket-img" src={"/assets/images/bannner-img1.png"} />
                        </Col>
                    </Row>
                </Container>        
            </div>
        </>
    )
}

export default Home;