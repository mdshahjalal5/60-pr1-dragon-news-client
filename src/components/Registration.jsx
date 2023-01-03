import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { AuthContext } from './AuthProvider';
const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegistration =e =>{
        e.preventDefault();
        console.log(e.target.name)
        let form, name, email, password; 
        form = e.target;
        name = form.name.value; 
        email = form.email.value;
        password = form.password.value;
        console.log(form, name, email, password, 'name, email, password');
        createUser(email, password)
        .then((result) => {
            console.log('user successfully register');
        }).catch((err) => {
            console.log('an error occured', err);
        });
    }
    return (
        <div>
            <h2>Please Register Now!</h2>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name={'name'} placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name={'email'} placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name={'password'} placeholder="Password" />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    Register
                </Button>
                
            </Form>            
        </div>
    );
};

export default Registration;