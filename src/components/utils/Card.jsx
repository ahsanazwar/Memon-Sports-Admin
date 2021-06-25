import React from 'react';
import {Link} from 'react-router-dom';
// import GeneralStyles from '../../styles/styledComponents/input';



const Card = (props) => {
    return (
    <div className="card-component height theme-boxShadow-static">
        <div className="card-header-container flex justify-space-between p-t-15 p-r-15 p-l-15 p-b-5 m-b-5 ">
            <div className="card-header flex align-items-center">
                    {
                        props.icon && <div className="card-icon m-r-8">
                        {props.icon}
                        </div>
                    }

                    <div className="card-heading condensed">
                        {props.title}
                    </div>
            </div>

            {props.link && <div className="card-link">
                    <Link to="/">
                    {/* <GeneralStyles.StyledButton
                        type="primary"
                        size="small"
                        round={true}
                        shadow={true}
                    >
                        {props.linkText}
                    </GeneralStyles.StyledButton> */}
                </Link>
            </div>}
        </div>

        {props.children && <div style={{'height':props.contentHeight || 0}} className="card-content-container m-b-5">
            {props.children}
        </div>}
    </div>
    )
};


export default Card;