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
        <div className="bg-dark mt-5  container mx-auto">
            <h2 className="text-light mt-3">My Projects</h2>
            <div className="service mt-5  ">
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