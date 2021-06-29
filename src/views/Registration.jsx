import React from "react";
import {Container,Row,Col,Form} from 'react-bootstrap';
import {
	faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import ImageUploader from 'react-images-upload';
// import fs from 'fs';

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
            <form className="registration-form" onSubmit={this.submit}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} className="registration-form-wrapper">
                                <Row>
                                <Col lg={6}>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Col>
                                
                                <Col lg={6}>
                                    <Form.Control type="text" placeholder="Father Name" />
                                </Col>
                                
                                <Col lg={6}>
                                    <Form.Control type="text" placeholder="Surname Name" />
                                </Col>
                                
                                <Col lg={6}>
                                    <Form.Control type="text" placeholder="Nic Number" />
                                </Col>
                                
                                <Col lg={6}>
                                    <Form.Control type="text" placeholder="Date of Birth" />
                                </Col>
                                
                                <Col lg={6}>
                                <Form.Control as="select">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Control>
                                </Col>
                                
                                <Col lg={6}>
                                    <ImageUploader
                                        withIcon={true}
                                        buttonText='Choose Profile Image'
                                        onChange={this.onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                        singleImage={true}
                                    />
                                </Col>
                                
                                <Col lg={6}>
                                    <Form.Control type="text" placeholder="Shirt Size" />
                                </Col>

                                <Col lg={6}>
                                    <div className="profile-image">
                                        <span>Upload Player Image</span>
                                        <Form.Control type="file" accept=".jpg,.gif,.png" placeholder="Upload Profile Pic" />
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <Form.Control type="number" placeholder="Enter Phone Number" />
                                </Col>
                                
                                <Col lg={6}>
                                <Form.Control as="select">
                                        <option>Memon</option>
                                        <option>Sindhi</option>
                                        <option>Behari</option>
                                    </Form.Control>
                                </Col>
                                
                                <Col lg={6}>
                                    <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
                                        <option disabled>Select Team</option>
                                        {
                                            this.state.games.map(gam=>{
                                                return(
                                                    <option key={gam.id} value={gam.id}>{gam.type}</option>
                                                )
                                            })
                                        }
                                    </Form.Control>
                                </Col>
                                <Col lg={12}>
                                    <div className="mb-3">
                                        <div style={{display: this.state.showSpeciality.length ? 'block' : 'none'}}>
                                            <h2>Speciality:</h2>  
                                            {
                                                this.state.showSpeciality.map((opt)=>{
                                                    return(
                                                        <Form.Check key={opt.rule_option_id} inline label={opt.option_name} name="group1" 
                                                        value={opt.rule_option_id} type='radio' onChange={(e)=>{
                                                            console.log(e.target.value)
                                                            this.setState({
                                                                selectedSpeciality: e.target.value
                                                            });
                                                        }} />
                                                    );
                                                })
                                            }  
                                            
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="password-wrap">
                                        <Form.Control type={this.state.passwordShown} placeholder="Password" />
                                        <span onClick={() => this.setState({passwordShown: this.state.passwordShown === 'text' ? 'password' : 'text'}) }><FontAwesomeIcon icon={faEyeSlash} /></span>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="password-wrap">
                                        <Form.Control type={this.state.confirmPasswordShown} placeholder="Confirm Password" />
                                        <span onClick={() => this.setState({confirmPasswordShown: this.state.confirmPasswordShown === 'text' ? 'password' : 'text'}) }><FontAwesomeIcon icon={faEyeSlash} /></span>
                                    </div>
                                </Col>

                               
                                <Col lg={12}>
                                    <button type="submit">Registration</button>
                                </Col>
                            </Row>
                            </Col>
                    </Row>
                </Container>    
            </form>
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

