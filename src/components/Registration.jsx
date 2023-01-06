import { sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebaseConfig';
import { AuthContext } from './AuthProvider';
const Registration = () => {
    const { createUser, updateUser   } = useContext(AuthContext)
    const [accept, setAccept] = useState(false);
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
            emailVerfy();
            updateUser()
            .then((result) => {
                console.log('user info updated');
            }).catch((err) => {
                console.log('error while updating user info ');
            });

            
        }).catch((err) => {
            console.log('an error occured', err);
        });
    }
const emailVerfy= () =>{
    sendEmailVerification(auth.currentUser)
    .then((result) => {
        alert('verify email')
        toast('Verify email', {
            autoClose:500,
            position:'top-right'
        })
    }).catch((err) => {
        console.log('an error while verify email');
    });
}
    return (
        <div>
            <h2>Please Register Now!</h2>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicName">
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
              
                <Form.Group> 
                    <Form.Check
                        type="checkbox" 
                        className="mb-3"
                        onClick={function(e){
                            return  setAccept(e.target.checked)
                        }}
                        label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                </Form.Group>
                <Button variant="success" type="submit" disabled={!accept}>
                    Register
                </Button>
                
            </Form>            
        </div>
    );
};

export default Registration;