import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Contact = () => {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (!name || !email || !message) {
    //         setError('All fields are required.');
    //         return;
    //     }
    //     setSuccess('');
    //     setError('');

    //     try{
    //         const response = await fetch('localhost:3000/contact', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ name, email, message })
    //         });
            
    //         if (response.ok) {
    //             setSuccess('Your message has been sent successfully!');
    //             setName('');
    //             setEmail('');
    //             setMessage('');
    //         } else {
    //             setError('Failed to send your message. Please try again later.');
    //         }
        
    //     } catch (error) {
    //         setError('An error occurred. Please try again later.');
    //     }
    // };

    // const [formDetails,setFormDetails] = useState({
    //     email:"",
    //     name:"",
    //     message:""
    //   })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        setTimeout(()=>{
        email = "";
        name = "";
        message = "";
        },3000)
      }

    return (
        <section className='contact' id='contact'>
            <Container>
                <Row>
                    <Col>
                        <h1 align='center'>Contact</h1>
                        <div className='contact-bx'>
                            <div className='contact-info'>
                                <h2>Get in touch</h2>
                                <p>If you have any questions or would like to work together, feel free to reach out to me. I am always looking for new opportunities to learn and grow.</p>
                                <p>Email: <a href='mailto: sathesiddhant21@gmail.com'>sathesiddhant21@gmail.com</a></p>
                            </div>
                            <div className='contact-form'>
                                <form onSubmit={handleSubmit}>
                                    {error && <p className='error'>{error}</p>}
                                    {success && <p className='success'>{success}</p>}
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <textarea
                                        placeholder='Message'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    ></textarea>
                                    <button type='submit'>Send Message </button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;