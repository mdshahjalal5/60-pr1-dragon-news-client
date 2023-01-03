import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaWhatsapp, FaTwitch } from "react-icons/fa";
import { auth } from '../firebase/firebaseConfig';
import { AuthContext } from './AuthProvider';
import BrandCarousel from './Carousel';
const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const handleGoogleSignIn = ()=>{
        providerLogin(new GoogleAuthProvider())
        .then((userCredential) => {
            console.log('successfully google sign in ');
        }).catch((err) => {
            console.log('an error in google sign in', err);
        });
    }
    const handleGithubSignIn = function () {
        providerLogin(new GithubAuthProvider())
            .then((result) => {
                console.log('successfully github sign in');
            }).catch((err) => {
                console.log('an error occured in github sign in');
            });
    }
    return (
        <div>
            <p>Right side nav </p>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-secondary"><FaGoogle></FaGoogle> sign in with Google</Button>{' '}
                <Button onClick={handleGithubSignIn} variant="outline-secondary"><FaGithub></FaGithub> sign in with Github</Button>{' '}
                <Button className={'mt-2'} onClick={()=>signInWithPopup(auth, new FacebookAuthProvider())} variant="outline-secondary"><FaFacebook></FaFacebook> sign with Facebook</Button>{' '}
            </ButtonGroup>            
            
            <div>
                <h2>Find us on </h2>     
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaTwitch>.
                        
                        </FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>

            </div>

            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;