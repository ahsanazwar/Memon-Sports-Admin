import React from "react";
import { Row, Col, Layout, Switch, notification  } from 'antd';
import LoginForm from '../components/LoginForm'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import { withCookies } from 'react-cookie';
import Header from '../components/Header';
class AdminLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'players',
            secret: null,
            loginType:true,
            apiLoading: false
        }; 
    }

    componentDidMount(){

        console.log(this.props.cookies); 
        const pathArray = window.location.pathname.split( '/' );
        if(pathArray[pathArray.length-1] == 'adminlogin') {
            this.setState({
                type: 'admin',
                secret: '002dd535-7762-4c72-b212-a28434531d77'
            });
        } 
    }

    openNotification = (type, title, description) => {
        notification[type]({
            placement: 'topRight',
            bottom: 50,
            message: title,
            description: description
        });
    }

    onSubmit = (value) => {
        this.setState({
            apiLoading: true
        });
        const params = {}
        if(this.state.loginType == true) {
            params.email = value.email;
        }else {
            params.phone = value.phone;
        }
        params.password = value.password;
        this.props.actions.loginAdmin(params, {secret: this.state.secret}).then((val)=>{
             console.log(val) 
            if(val.failed) {
                this.openNotification('error','Error', val.error.meta.message); 
            }else {
                this.props.cookies.set('user', {...val.data.data, type:this.state.type}); 
                this.openNotification('success','Success',undefined);
            }
 
            this.setState({
                apiLoading: false
            });
            
        });
    }

    loginTypeHandler = (value) => {
        this.setState({
            loginType:value
        }); 
    }


    validate = (values) => {
		const errors = {};

        if(this.state.loginType) {
            if (!values.email) {
                errors.email = 'Email is required.';
            }
        } else {
            if (!values.phone) {
                errors.phone = 'Phone Number is required.';
            } else if (values.phone.length != 13) {
                errors.phone =
                    'Valid phone number is required. It should be upto 13 digits and Phone Number Should look like this +92335XXXXXXX';
            } else {
                if(values.phone[0] == '0') {
                    errors.phone =
                        'Phone Number Should look like this +92335XXXXXXX';
                }
            }
        }
		
		
        
        
        

	 

		if (!values.password) {
			errors.password = 'Password is required.';
		}


		return errors;
	}; 

    render() {
        return(
            <>
                <Header />
                <div className="adminLogin">
                    <Row>
                        <Col md={24} xs={24} > 
                            <LoginForm apiLoading={this.state.apiLoading} onSubmit={this.onSubmit} validate={this.validate} title={
                            this.state.type == 'admin' ? 'Admin Login' : 'Player Login'} loginType={this.state.loginType} loginTypeHandler = {this.loginTypeHandler} />
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ ...userActions }, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withCookies(AdminLogin));
