// import Carousel from "react-multi-carousel";
import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Python from "../assets/python.png";
import HTML from "../assets/icons8-html-5-240.png";
import JS from "../assets/icons8-javascript-240.png";
import SQL from "../assets/database.png";
import Reacticon from "../assets/structure.png";
import Java from "../assets/icons8-java-144.png";
import MSSQL from "../assets/sql-server.png";


export const Skills = ({skills = []}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

//       return (
//         <section className="skill" id="skills" >
//             <Container>
//                 <Row>
//                     <Col>
//                     <div className="skill-bx">
//                         <h1 align = "center">Skills</h1>
//                         {/* <Carousel responsive={responsive}>
//   <div className="item">Python</div>
//   <div className="item"> HTML</div>
//   <div className="item">CSS</div>
//   <div className="item"> JavaScript</div>
//   <div className="item">SQL</div>
// </Carousel> */}
//                 <div className="skill-grid" responsive = {responsive}>
//                   <div className="skill-item"><img src ={Python}/> Python</div>
//                   <div className="skill-item"><img src={HTML}/>HTML</div>
//                   <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
//           CSS</div>
//                   <div className="skill-item"><img src={JS}/>JavaScript</div>
//                   <div className="skill-item"><img src={SQL}/>SQL</div>
//                   <div className="skill-item"><img src={Reacticon}/>React</div>
//                   <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
//           Vitejs</div>
//                   <div className="skill-item"><img src={Java}/>Java</div>
//                   <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" />
//           Anaconda</div>
//                   <div className="skill-item"><img src={MSSQL}/>MSSQL</div>
//                   <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
//           MySQL</div>
//           <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" />
//           MongoDB</div>
//                   <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
//           Pandas</div>
//           <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg" />
//           NumPy</div>
//           <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" />
//           Scikit-Learn</div>
//           <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
//           Flask</div>
//           <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" />
//           Jupyter</div>
//           <div className="skill-item">
//             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
//           Git</div>
//                 </div>
//                     </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//       )
//     };

return (
  <section className="skill" id="skills">
    <Container>
      <Row>
        <Col>
          <div className="skill-bx">
            <h1 align="center">Skills</h1>
            <div className="skill-grid">
              {skills.map((skills, index) => (
                <div className="skill-item" key={index}>
                  <img src={skills.img} alt={skills.name} />
                  {skills.name}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
};


export default Skills;