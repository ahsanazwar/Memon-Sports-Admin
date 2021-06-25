import React from 'react';
import ServiceView from './ServiceView';


const Notification = (props) => {
    return (
    <div className="notification-component width">
        {
            props.list && props.list.map((val)=>{
                if(val.type=='services') {
                    return (
                        <ServiceView key={val.key} {...val.service} />
                    );
                }
            })
        }
    </div>
    );
};


export default Notification;