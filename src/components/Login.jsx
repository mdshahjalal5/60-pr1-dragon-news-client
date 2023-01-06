import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const { login, user, setLoading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location, 'location')
    const from = location.state?.from?.pathname;
  
    const navigate = useNavigate();
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
                    if (user?.emailVerified){
                       navigate(from, { replace: true })
                   }
                   else{
                    // alert('verify email')
                    toast('pleaser verify your email', 
                    {
                        position:'top-center', 
                        autoClose:500, 
                    })
                   }

                }).catch((err) => {
                    console.log('error in login');
                })
                .finally(()=>{
                    console.log(setLoading, 'setloading');
                    setLoading(false)
                
                })          
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