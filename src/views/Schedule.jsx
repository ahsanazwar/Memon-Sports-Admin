import React from "react";
import {Container,Row,Col} from 'react-bootstrap';

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render(){
        return(
            <>
                <div className="inner-page-banner">
                    <Container>
                        <Row>
                            <Col lg={12}>
                            <h1>schedule</h1>
                            </Col>
                        </Row>
                    </Container>        
                </div> 

                <div className="schedule-banner">
                    <Container>
                        <Row>
                            <Col lg={12}>
                            <img className="img-fluid" src={"/assets/images/schedule3.jpg"} />
                            </Col>
                        </Row>
                    </Container>        
                </div>  
            </>
        )
    }
}

export default Registration;