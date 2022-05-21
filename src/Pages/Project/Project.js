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
        <div className="mt-5  secondd">
            <h2 className="mb-5 ">My Projects</h2>
            <div className="service ">
            {
               projects.map(projectt => <Projects
               projectt={projectt}></Projects>
                )
           }
        </div>
        </div>
    );
};

export default Project;