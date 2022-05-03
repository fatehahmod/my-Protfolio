import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skils = () => {
    return (
        <div >
            <h2 className=''>Programimg Skils :-</h2>
            <div>
                <p className="d-flex align-items-center ms-2">JavaScript</p>
                <ProgressBar className=" w-25 ms-2" striped variant="success" now={79} />
                <br />
                <p className="d-flex align-items-center ms-2">React</p>
                <ProgressBar className="ms-2" striped variant="danger" now={80} />
                <br />
                <p className="d-flex align-items-center ms-2">Node JS</p>
                <ProgressBar className="ms-2" striped variant="warning" now={85} />
                <br />
                <p className="d-flex align-items-center ms-2">MongoDB</p>
                <ProgressBar className="ms-2" striped variant="danger" now={90} />
                <br />
                <p className="d-flex align-items-center ms-2">HTML</p>
                <ProgressBar className="ms-2" striped variant="info" now={89} />
                <br />
                <p className="d-flex align-items-center ms-2">CSS</p>
                <ProgressBar className="ms-2" striped variant="warning" now={80} />

            </div>
        </div>
    );
};

export default Skils;