import React from "react";
import {Container,Row,Col} from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import { Layout } from 'antd';
// import fs from 'fs';
import RegisterForm from '../components/RegisterForm';


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSpeciality : [],
            passwordShown : 'password',
            confirmPasswordShown : 'password',
            games : [],
            selectedGames : {},
            selectedSpeciality: null,
        };
    }
    componentDidMount(){
      this.props.actions.getAllGames().then(response=>{
          this.setState({
              games: response.data || []
          });
      });   
    }

    handleChange = (e) => {    
        console.log(e.target.value); 
        const getSelectedGame = this.state.games.find(gam => gam.id == e.target.value); 

        this.setState({
            selectedGames: getSelectedGame,
            selectedSpeciality: null
        });

        if(getSelectedGame){
            this.setState({showSpeciality: getSelectedGame.options || []});
        }
    }

    onDrop = (e)=>{
        console.log(e);
        // fs.writeFile('/assets/upload/'+e.File[0].name, buffer, (err) => {
        //     console.log(err); 
        // })
        this.getBase64(e[0]).then(image => {
            console.log({image}); 
        }); 
        
    }

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
    
    submit = (e) =>{
        e.preventDefault();

        if(!Object.keys(this.state.selectedGames).length) {
            console.log("No Games Selected"); 
            return false;   
        }

        if(this.state.selectedGames.options.length && !(this.state.selectedSpeciality)) {
            console.log("Please select you speciality"); 
            return false;
        }

        const selectedGames = [{
            id: this.state.selectedGames.id,
            ruleOptionId: this.state.selectedSpeciality,
            ruleId: this.state.selectedGames.ruleId,
            type: this.state.selectedGames.type
        }];


        // final object
        /*{
    "name":"hello",
    "dob": "19/06/1994",
    "regNumber":"asdasd-2577",
    "roleId": "02ab1cb3-bcff-4c8a-9e80-418f7085ffc1",
    "gender": "male",
    "fatherName": "Attq ur rehman",
    "email": "daniyal@gmail.com",
    "phone": "+923117767859",
    "surName": "Rehman",
    "jamaatName": "Batwa waly",
    "games":[{
        "id":"379dbac0-1bbf-4a60-8dee-39afff48e672",
        "ruleOptionId": "618c07db-54c4-47e2-84ae-c8b1c94cbdab",
        "ruleId": "9377e192-1d8a-48bf-b016-a53b18896869",
        "type": "Cricket"
    }],
    "kitSize": "S",
    "password": "Charlieboy350"
}*/ 
        
    }
  

    
      onSubmit = (values) => {
		// date of birth validation here stop from here
		this.setState({ isLoading: 'Loading...' });
    }
      validate = (values) => {
		const errors = {};
		// if(!this.state.dob){
		// 	this.setState({dobRequered: 'Date of Birth is required'})
		// }
		if (!values.firstName) {
			errors.firstName = 'First name is required. ';
		} else if (!values.firstName.match(/^[a-zA-Z]+$/)) {
			errors.firstName = 'Numbers are not allowed';
		}

		if (!values.fatherName) {
			errors.fatherName = 'Last Name is required. ';
		} else if (!values.lastName.match(/^[a-zA-Z]+$/)) {
			errors.lastName = 'Numbers are not allowed';
		}

        if (!values.surName) {
			errors.surName = 'Last Name is required. ';
		} else if (!values.surName.match(/^[a-zA-Z]+$/)) {
			errors.surName = 'Numbers are not allowed';
		}

		if (!values.nicNumber) {
			errors.nicNumber = 'NIC Number is required.';
		}

		if (!values.phNumLabel) {
			errors.ssn = 'Phone Numver is required.';
		} else if (values.ssn.length !== 9) {
			errors.ssn = 'SSN length should only be 9 digits';
		}

		if (!values.phoneNumber) {
			errors.phoneNumber = 'Phone Number is required.';
		} else if (values.phoneNumber.length !== 10) {
			errors.phoneNumber =
				'Valid phone number is required. It should be upto 10 digits';
		}

		if (!values.shirtsize) {
			errors.shirtsize = 'Shirt Size is required.';
		} 

		if (!values.license) {
			errors.license = 'License is required.';
		} else if (values.license.length !== 8) {
			errors.license = 'License should only be 8 characters long';
		} else if (!values.license.match(/^[a-zA-Z0-9]*$/)) {
			errors.license = 'Special cherecter are not allowed';
		}

		if (!values.password) {
			errors.password = 'Password is required.';
		}

		if (values.password) {
			if (
				!values.password.match(
					/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
				)
			) {
				errors.password =
					'Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and special character is required:';
			}

			if (values.password.localeCompare(values.retype_password) !== 0) {
				errors.retype_password = 'Password is not matched.';
			}
		}

		if (values.ssn) {
			if (values.ssn.localeCompare(values.reTypeSsn) !== 0) {
				errors.reTypeSsn = 'SSN is not matched.';
			}
		}

		if (values.email) {
			if (values.email.localeCompare(values.reTypeEmail) !== 0) {
				errors.reTypeEmail = 'Email is not matched.';
			}
		}

		return errors;
	};  
    render(){
        return(
            <>
            <div className="inner-page-banner">
                <Container>
                    <Row>
                        <Col lg={12}>
                        <h1>Registration</h1>
                        </Col>
                    </Row>
                </Container>        
            </div>  
            
            
            <RegisterForm
                initialValues={this.state.payload}
                validate={this.validate}
                onSubmit={this.onSubmit}
                onDateChange={this.onDateChange}
                onFileUpload={this.onFileUpload}
                isLoading={this.state.isLoading}
                dobRequered={this.state.dobRequered}
                userAge={this.state.calculateAge}
                emailTaken={this.state.errorMessage}
                games={this.state.games}
                value={this.state.value}
                handleChange = {this.handleChange}
                passwordShown = {this.state.passwordShown}
                confirmPasswordShown = {this.state.confirmPasswordShown}
                onDrop = {this.onDrop}
            />
            </>
        );
    }
}



const mapStateToProps = () => {
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
)(Registration);

