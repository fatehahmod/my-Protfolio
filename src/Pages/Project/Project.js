import React, { useEffect, useState } from 'react';
import Projects from './Projects/Projects';
import './Project.css'

const Project = () => {
    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch('/project.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div className="service mt-5 container bg-dark ">
            {
               projects.map(projectt => <Projects
               projectt={projectt}></Projects>
                )
           }
        </div>
    );
};

export default Project;