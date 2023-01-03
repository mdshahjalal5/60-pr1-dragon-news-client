import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { AuthContext } from './AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext)
    return (
        <div>
            <h2>Please Login Now!</h2>
            <Form onSubmit={function(e){
                e.preventDefault();
                let form, email, password;
                form = e.target;
                email = form.email.value;
                password = form.password.value;
                login(email, password)
                .then((result) => {
                    console.log('user successfully  login'); 
                }).catch((err) => {
                    console.log('error in login');
                });                
                console.log(email, password);
            }} className=''>
              
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name={'email'} placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name={'password'} placeholder="Password" />
                </Form.Group>
                <Button  size='lg'   variant="outline-success" type="submit">
                    Login
                </Button>

            </Form>               
            </div>
    );
};

export default Login;