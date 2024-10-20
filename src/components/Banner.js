import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/headerImg.png";
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["Software Developer", "Data Science Enthusiast", "ML Engineer", "Web Developer"];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const navigate = useNavigate();
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        } ,delta )
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(400);
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md= {6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>{'Hi, I am Siddhant Sathe '}<span className='wrap'> {text} </span></h1>
                        <p>I am a software developer with a passion for data science. I love to work on projects that involve data analysis and machine learning. I am always eager to learn new technologies and work on projects that challenge me.</p>
                        <button onClick={scrollToContact}>Let's connect <ArrowRightCircle size= {25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src = {headerImg} alt='headerImg'/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;