import React from "react";
import {Container,Row,Col,Form} from 'react-bootstrap';

function DashboardPlayerList() {
    return(
        <>
        <div className='dashboard-banner'></div>
        <div className='dashboard-page-wrapper'>
            <Container fluid>
                <Row>
                    <Col lg={2}>
                        <ul className='dashboard-sidebar'>
                            <li><a href="">Players List</a></li>
                            <li><a href="">Create Team</a></li>

                        </ul>   
                    </Col>
                    <Col lg={10}>
                        <div className="form-inner">
                            <form action="">
                                <Form.Control type="text" placeholder="Search"  className="Search"/>
                            </form>
                            <ul className="player-list">
                                <li>
                                    <div className="player-img">
                                        <img className="img-fluid cricket-img" src={"/assets/images/virat-kohli.jpg"} />
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Name:</span> Virat Kohli</h3>
                                        <p><span>Matches Played:</span> 30</p>   
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Selected Match:</span> Cricket</h3>
                                        <p><span>Age:</span> 20</p>  
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Team Name:</span> Karachi Kings</h3>
                                    </div>
                                    
                                </li>
                                <li>
                                    <div className="player-img">
                                        <img className="img-fluid cricket-img" src={"/assets/images/virat-kohli.jpg"} />
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Name:</span> Virat Kohli</h3>
                                        <p><span>Matches Played:</span> 30</p>   
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Selected Match:</span> Cricket</h3>
                                        <p><span>Age:</span> 20</p>  
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Team Name:</span> Karachi Kings</h3>
                                    </div>
                                    
                                </li>
                                <li>
                                    <div className="player-img">
                                        <img className="img-fluid cricket-img" src={"/assets/images/virat-kohli.jpg"} />
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Name:</span> Virat Kohli</h3>
                                        <p><span>Matches Played:</span> 30</p>   
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Selected Match:</span> Cricket</h3>
                                        <p><span>Age:</span> 20</p>  
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Team Name:</span> Karachi Kings</h3>
                                    </div>
                                    
                                </li>
                                <li>
                                    <div className="player-img">
                                        <img className="img-fluid cricket-img" src={"/assets/images/virat-kohli.jpg"} />
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Name:</span> Virat Kohli</h3>
                                        <p><span>Matches Played:</span> 30</p>   
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Selected Match:</span> Cricket</h3>
                                        <p><span>Age:</span> 20</p>  
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Team Name:</span> Karachi Kings</h3>
                                    </div>
                                    
                                </li>
                                <li>
                                    <div className="player-img">
                                        <img className="img-fluid cricket-img" src={"/assets/images/virat-kohli.jpg"} />
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Name:</span> Virat Kohli</h3>
                                        <p><span>Matches Played:</span> 30</p>   
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Selected Match:</span> Cricket</h3>
                                        <p><span>Age:</span> 20</p>  
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Team Name:</span> Karachi Kings</h3>
                                    </div>
                                    
                                </li>
                                <li>
                                    <div className="player-img">
                                        <img className="img-fluid cricket-img" src={"/assets/images/virat-kohli.jpg"} />
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Name:</span> Virat Kohli</h3>
                                        <p><span>Matches Played:</span> 30</p>   
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Selected Match:</span> Cricket</h3>
                                        <p><span>Age:</span> 20</p>  
                                    </div>
                                    <div className="players-detail">
                                        <h3><span>Team Name:</span> Karachi Kings</h3>
                                    </div>
                                    
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>            
        </>
    )
}

export default DashboardPlayerList;