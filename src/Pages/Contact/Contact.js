import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row, Toast } from 'react-bootstrap';
import { Alert } from 'bootstrap';
import './Contact.css'


const Contact = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const inputStyle = {
        width: "370px",
        marginBottom: "20px",
        height: '50px',
        borderRadius: "8px",
        border: '1px solid gainsboro',
    }
    const buttonStyle = {
        border: "1px solid gainsboro",
        padding: "8px 20px",
        backgroundColor: "white",
        width: '150px',
        borderRadius: '25px'
    }

    const handaleEmailSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_qn0ottj', 'template_arg3o6d', e.target, 'user_SFZDfF2yAjYTozgM9sh8M')
            .then(() => {
                setShow(true)
                console.log('object');
            }).catch(error => setError(error.message))

    }
    return (

        <div className='mt-5 mb-5' >
            <h3>Contact Me </h3>
            <Row className="mx-auto mr-3">

                <Col lg={6} className="pt-5 " style={{ backgroundColor: "#F8F9FA" }}>
                    <form onSubmit={handaleEmailSubmit} >
                        <input name="name" placeholder="Enter your name..." style={inputStyle} type="text" />
                        <input name="user_email" placeholder="Enter your email..." style={inputStyle} type="email" />
                        <textarea placeholder="Your message..." required name="message" rows="5" cols="48" />
                        <br />
                        <div className='pb-5 pt-3 '>
                            <input type="submit" className='me-5' value=" Send" style={buttonStyle}
                            />
                            <input type="reset" value="Reset" style={buttonStyle} />
                        </div>
                    </form>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Fateh Ahmod</strong>
                        </Toast.Header>
                        <Toast.Body>Thanks for your message. </Toast.Body>
                    </Toast>
                    {
                        error && <Alert variant="danger">
                            {error}
                        </Alert>
                    }
                </Col>
                <Col className="p-0" lg={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231895.93139248763!2d91.41940869402687!3d24.74836530939623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37511854af0e933b%3A0xfd6852de07af108a!2sJagannathpur%20Upazila!5e0!3m2!1sen!2sbd!4v1651866330305!5m2!1sen!2sbd" width="600" height="415" style={{ border: "0" }} allowfullscreen="" loading="lazy" title="hello world"></iframe>
                </Col>

            </Row>

        </div>
    );
};

export default Contact;