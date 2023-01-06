import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar,  } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebaseConfig';
import { AuthContext } from './AuthProvider';
import LeftSideNav from './LeftSideNav';

const Header = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    
    return (
 
        
        <Navbar sticky='top' collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Dragon News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                       <Nav className='me-auto'>

                       </Nav>
                        
                      <Nav>
                        {
                            user?.uid ? <>
                               <div className='d-flex'>
                                    <Button onClick={()=>signOut(auth)
                                    .then(()=>{
                                        return <Navigate to={'/'}></Navigate>;
                                    })
                                    } className='me-3'>log out</Button>
                                    <h5>{user?.email} </h5>
                                    <Image roundedCircle width={'30px'} src={user?.photoURL}></Image>
                               </div>
                            </> : <>
                                <Link to="/login">Login</Link>
                                <Link to="/registration">Register</Link>
                            </>
                        }
                      
                    
                      </Nav>
                      
                   <div className='d-lg-none'>
                        <LeftSideNav/>
                   </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );}

export default Header;