import React from 'react';
import Skills from './components/Skills';
import Python from './assets/python.png';
import HTML from './assets/icons8-html-5-240.png';
import JS from './assets/icons8-javascript-240.png';
import SQL from './assets/database.png';
import Reacticon from './assets/structure.png';
import Java from './assets/icons8-java-144.png';
import MSSQL from './assets/sql-server.png';

const Props = () => {
  const skills = [
    { name: 'Python', img: Python },
    { name: 'HTML', img: HTML },
    { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', img: JS },
    { name: 'SQL', img: SQL },
    { name: 'React', img: Reacticon },
    { name: 'Vitejs', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
    { name: 'Java', img: Java },
    { name: 'Anaconda', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg' },
    { name: 'MSSQL', img: MSSQL },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'},
    { name: 'MongoDB', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" },
    {name: 'PowerBI', img:'https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000'},
    { name: 'Pandas', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: 'Numpy', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg" },
    { name: 'Scikit-learn', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: 'Flask', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: 'Jupyter', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
    { name: 'Git', img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
  ];

  return (
    <div className="Props">
      <Skills skills={skills} />
    </div>
  );
};

export default Props;