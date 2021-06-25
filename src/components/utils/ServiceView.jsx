import React from 'react';
import {Link} from 'react-router-dom';
// import GeneralStyles from '../../styles/styledComponents/input';
import {Col, Row} from 'antd'; 



const Service = (props) => {
    if(props.type=='small') { 
            return (
                <div className="service-component small theme-boxShadow-static m-b-15 p-15" >
                        <Row type="flex"
                        gutter= {15} >
                            <Col xs={8} sm={8} md={8} lg={8} className="service-img align-center ">
                                <img src={props.img || 'https://placehold.it/100x100'}/>
                            </Col>
                            <Col xs={16} sm={16} md={16} lg={16} className="service-details">
                                    <h4 className="condensed">
                                        {props.title}
                                    </h4>
                                    <p>
                                        {props.details}
                                    </p>
                                    <div className="actions flex justify-flex-end m-t-10">
                                        <Link to={props.viewLink || '/'} className="m-r-10">
                                            {/* <GeneralStyles.StyledButton
                                                type="secondary"
                                                size="verysmall"
                                                round={true}
                                                shadow={false}
                                            > */}
                                                {/* View
                                            </GeneralStyles.StyledButton> */}
                                        </Link>
                                        
                                        <Link to={props.viewLink || '/'}>
                                            {/* <GeneralStyles.StyledButton
                                                type="primary"
                                                size="verysmall"
                                                round={true}
                                                shadow={false}
                                            >
                                                Accept
                                            </GeneralStyles.StyledButton> */}
                                        </Link>
                                    </div>
                            </Col>
                        </Row>
                </div>
        );
    }
};


export default Service;