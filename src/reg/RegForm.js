import React, {Component} from 'react'
import {Form, Input, Label, FormGroup, FormFeedback, Button} from 'reactstrap'
import "./Form.css";


export class RegForm extends Component {
    
    
    render() {
                return (
            <Form className="form">
            <FormGroup>
                <Label className="firstname" for="firstName">First Name</Label>
                <Input id="firstName" name="firstName"/>
                <FormFeedback>First Name can not be blank</FormFeedback>
            </FormGroup>
 
            <FormGroup>
                <Label className="lastname" for="LastName">Last Name</Label>
                <Input id="LastName" name="LastName"/>
                <FormFeedback>Last Name Name can not be blank</FormFeedback>
            </FormGroup>
 
            <FormGroup>
                <Label className="email" for="email">Email</Label>
                <Input id="email" name="email"/>
                <FormFeedback>Email can not be blank</FormFeedback>
            </FormGroup>
 
            <FormGroup>
                <Label className="password" for="password">Password</Label>
                <Input id="password" type="password" name="password"/>
                <FormFeedback>Password can not be blank</FormFeedback>
            </FormGroup>
 
            <FormGroup>
                <Label className="confirmpass" for="confirmpassword">Confirm Password</Label>
                <Input id="confirmpassword" type="password" name="confirmpassword"/>
                <FormFeedback>Password must match</FormFeedback>
            </FormGroup>
            <Button color="primary">Register</Button>
        </Form>  
        )
    }
}

export default RegForm

