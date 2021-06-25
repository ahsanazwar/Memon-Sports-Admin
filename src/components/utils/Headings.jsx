import React from 'react';



const Headings = (props) => {
    return (
       <div className="heading-component flex justify-space-between p-15 align-items-center">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="heading-right-content">
                {props.children}
            </div>
       </div>
    )
};


export default Headings;