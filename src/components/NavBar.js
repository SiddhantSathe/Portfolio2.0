import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons';
import github from "../assets/github.png"


export const NavBar = () => {
  const [activeLink, setActive] = useState('home');
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
  const onScroll =() => {
    if(window.scrollY >= 20){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
  
}, [] )

const onUpdateActiveLink = (value) => {
  setActive(value);
}

  return (
    <Navbar expand="lg" className={ scrolled ? 'scrolled':'' }>
      <Container>
        <Navbar.Brand href="#home">
        <h1 className='leckerli-one-regular'>Siddhant Sathe</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className = {activeLink === 'contact' ? 'active-navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className='social-icons'>
              <a href="https://www.linkedin.com/in/siddhant-sathe-0709ab282/" target="_blank" rel="noreferrer">
                {/* <img src= {Linkedin} alt='Linkedin'/> */}
                <Linkedin className='booticons-l' size={35}/>

              </a>
              <a href='https://www.github.com/siddhantsathe' target="_blank" rel="noreferrer">
                {/* <img src= {github} size = {30} alt='Github'/> */}
                <Github className='booticons' size={35}/>
              </a>
              <a href='https://www.instagram.com/siddhant__sathe' target="_blank" rel="noreferrer">
                {/* <img src={Instagram} alt='Instagram' /> */}
                <Instagram className='booticons-i' size={35}/>
              </a>
            </div>
            <button className='connect-button' onClick={()=> {console.log('Lets connect')}}><span>Lets connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;