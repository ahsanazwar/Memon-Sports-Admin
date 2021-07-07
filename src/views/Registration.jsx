import React from "react";
import {Row,Col} from 'react-bootstrap';
import {notification, Modal, Input, Button} from 'antd'; 
import Header from '../components/Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
// import fs from 'fs';
import RegisterForm from '../components/RegisterForm';


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeValidationModel: false, 
            passwordShown : 'password',
            games : [],
            btnLoading:false, 
            profilePic: null,
            passVal: "password",
            verifyBtnLoading: false,
            code: '', 
            customError : {
                dob: {
                    error: null,
                    value: null
                },

                game: {
                    error: null,
                    value: null
                },

                jamaatName : {
                    error: null,
                    value: null
                },

                gender: {
                    error: null,
                    value: 'male'
                },

                kitSize: {
                    error: null,
                    value: 'S'
                }
            }
        };
    }

    


    componentDidMount(){
        // this.openNotification("success", "Success", "Player is Created");
        this.props.actions.getAllGames().then(response=>{
            this.setState({
                games: response.data || []
            });
        });   
    }

    

    openNotification = (type, title, description) => {
        notification[type]({
            placement: 'topRight',
            bottom: 50,
            message: title,
            description: description
        });
    }
    
    selectedSpecialityOnSelect = (e)=>{
        const customError = {...this.state.customError};
        const game = customError.game.value;  
        if(game){
            game.ruleOptionId = e.target.value; 
        }
        this.selectObject(game, 'game');
        // console.log(e.target.value, game);
        
    }

    handleChange = (value) => {    
        // console.log(value); 
        // const customError = {...this.state.customError};
        const getSelectedGame = this.state.games.find(gam => gam.id == value); 

        if(getSelectedGame) {
            const game = {
                id: getSelectedGame.id,
                ruleOptionId: null,
                ruleId: getSelectedGame.ruleId,
                type: getSelectedGame.type,
                options: getSelectedGame.options.length ? getSelectedGame.options : undefined  
            };
    
            this.selectObject(game, 'game');
            // console.log(this.state.customError); 
        }
       
        
    }



    onDrop = (e)=>{
        // console.log(e);
        // fs.writeFile('/assets/upload/'+e.File[0].name, buffer, (err) => {
        //     // console.log(err); 
        // })
        this.getBase64(e[0]).then(image => {
            this.setState({
                profilePic: image
            });
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
    
    selectObject = (value, name) => {
        const customError = {...this.state.customError};
        if(customError[name]) {
           customError[name].value = value; 
           customError[name].error = null; 
        }

        this.setState({customError});
    }

    selectObjectErr = (err, name) => {
        const customError = {...this.state.customError};
        if(customError[name]) {
           customError[name].error = err; 
        }

        this.setState({customError});
    }

    cancelImage = (e) =>{
        this.setState({
            profilePic:null
        });
    }

    
    
    verifyCode = (e) => {
        this.setState({
            verifyBtnLoading:true
        });
        const code = this.state.code; 
        if(code.length == 4) {
            const params = {
                phone: this.state.postValue.phone,
                code 
            }
           this.props.actions.codeVerification(params).then(res=>{
                if(res.data.meta) {
                    this.openNotification("success", "Success", "Player is Created");
                } else {
                    this.openNotification("error", "Error", "Player is Created but phone verification failed");
                }
                this.setState({
                    codeValidationModel: false,
                    verifyBtnLoading: false
                });
           }); 
        }

      
    }

    submit = (value) => {
        
        this.setState({
            btnLoading: true
        });
        // alert(); 
       let check = false;
       const customError = {...this.state.customError};
       // console.log(value, {customError}); 

       Object.keys(customError).map((key)=>{
            if(customError[key].value == null) {
                 this.selectObjectErr('Field is Required', key);
                 check = true; 
            }
            if(key == 'game') {
                // console.log("GAME"); 
                if(customError[key].value && customError[key].value.options && customError[key].value.ruleOptionId == null) {
                    this.selectObjectErr('Select Game speciality is Required', key);
                    check = true; 
                }
            }
        });

       
       if(check) {
            this.setState({
                btnLoading: false
            });
            return true; 
        }
        // console.log({value}, this.state.customError); 

        Object.keys(this.state.customError).map((key)=>{
            value[key] = this.state.customError[key].value;
        }); 

        value.name = value.name.trim();
        value.surName = value.surName.trim();
        value.fatherName = value.fatherName.trim();
        delete value.game.options
        value.games = [value.game]; 
        delete value.game;
        value.profileImage = this.state.profilePic || undefined; 
        
        // console.log({value});

        this.setState({
            postValue: value
        });

        this.props.actions.registerPlayer({...value, "roleId": "02ab1cb3-bcff-4c8a-9e80-418f7085ffc1"}).then((res)=>{
            // console.log(res);
            if(res.data.meta) {
                this.setState({
                    codeValidationModel: true
                }); 
            }

            this.setState({
                btnLoading: false
            });
        });         
    }
  

    
      
      validate = (values) => {
		const errors = {};

		if (!values.name) {
			errors.name = 'Name is required. ';
		} else if (!values.name.match(/^[a-zA-Z\s]*$/)) {
			errors.name = 'Numbers and Symbols are not allowed';
		}


		if (!values.fatherName) {
			errors.fatherName = 'Father Name is required. ';
		} else if (!values.fatherName.match(/^[a-zA-Z\s]*$/)) {
			errors.lastName = 'Numbers and Symbols are not allowed';
		}

        if (!values.surName) {
			errors.surName = 'Sur Name is required. ';
		} else if (!values.surName.match(/^[a-zA-Z\s]*$/)) {
			errors.surName = 'Numbers and Symbols are not allowed';
		}

		if (!values.regNumber) {
			errors.nicNumber = 'NIC Number is required.';
		}
        else {
            if (values.regNumber.length != 13) {
                errors.regNumber = 'NIC Number Should contain 13 digits only';
            }
        }

		 

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

			
		}

		if (!values.email) {
			errors.email = 'Email is required.';
		}

		return errors;
	  };  
    render(){
        return(
            <>
            <Header />
            <div className="inner-page-banner">
                <div className="width">
                    <Row className=" flex">
                        <Col lg={5} className="inner-page-banner-heading">
                            <h1>Player Registration Process.</h1>
                            <p>Form Related Details.</p>
                        </Col>
                        <Col lg={7} >
                            <RegisterForm
                                validate={this.validate}
                                onSubmit={this.submit}
                                isLoading={this.state.isLoading}
                                games={this.state.games}
                                handleChange = {this.handleChange}
                                passwordShown = {this.state.passwordShown}
                                onDrop = {this.onDrop}
                                selectedSpeciality = {this.selectedSpecialityOnSelect}
                                selectObject = {this.selectObject}
                                profilePic = {this.state.profilePic}
                                cancelImage = {this.cancelImage}
                                eye={ (e) => this.setState({passVal: this.state.passVal === 'text' ? 'password' : 'text'}) }
                                passVal= {this.state.passVal}
                                customError = {this.state.customError}
                                btnLoading = {this.state.btnLoading}
                            />
                        </Col>
                    </Row>
                </div> 

                <Modal title="Code Validation" visible={this.state.codeValidationModel} footer={null} closable={false} >
                    <div className="codeVerification"> 
                        <p>Please Check Your Phone for the Code. </p>   
                        <Input onChange={(e)=>{
                            if(e.target.value.length > 4){
                                return false;
                            }
                            this.setState({
                                code: e.target.value
                            });
                           
                        }} value={this.state.code} placeholder="Verfication Code" />
                        <div className="codeVerificationBtns flex justify-content-end align-items-center m-t-15">
                            <Button className="m-r-15" type="secondary" onClick={(e)=>{
                                console.log("Resend API");
                            }}>Re-Send</Button>
                            <Button  onClick={this.verifyCode} disabled={!(this.state.code.length==4)} loading={this.state.verifyBtnLoading} type="primary">Verify</Button>
                        </div>
                    </div>

                </Modal>
                    
            </div>  
            
            
            
            </>
        );
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
)(Registration);

