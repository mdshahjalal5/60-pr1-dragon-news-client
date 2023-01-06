import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { AuthContext } from './AuthProvider';

const Profile = () => {
    const name = 'name'; 
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h2>profile page</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control placeholder={name}></Form.Control>
                    
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control placeholder={'Email'}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control placeholder={name}></Form.Control>
                </Form.Group>
                
            </Form>
        </div>
    );
};

export default Profile;