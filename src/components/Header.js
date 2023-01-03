import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Nav style={{ width: '90%' }}>

                        </Nav>
                        
                      <Nav>
                        {
                            user?.uid ? <>
                               <div className='d-flex'>
                                    <h5>{user?.email} </h5>
                                    <Image src={user?.photoURL}></Image>
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