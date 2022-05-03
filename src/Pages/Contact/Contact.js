import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [value,setValue]=useState()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qn0ottj', 'template_arg3o6d', e.target, 'user_SFZDfF2yAjYTozgM9sh8M')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setValue('')
          
      };
    return (
        <div className="container bg-dark pt-3" style={{marginTop:"50px",
        width:"50%",
        backgroundImage:'url(`https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE=`)',
        backgroundPosition:'center',
        backgroundSize:'cover'
        }}>
            <h1 className="text-light mt-5">Contact Me</h1>
                 <form className=""    onSubmit={sendEmail}>
           <label className="text-light fs-4 rounded-1"><h5>Your Name</h5> </label> 
           <br />
           <input className='rounded-3' type="text" name="name"  />
           <br />
           <label className="text-light fs-4"><h5>Your Email</h5></label>
           <br />
           <input type="email" name="user_email" className='rounded-3'/>
           <br />
           <label  className="text-light fs-4"><h5>Message</h5></label>
           <br />
           <textarea style={{width:"190px"}} className='rounded-3' name="message" />
           <br />
           <input type="submit" value="Send" className="mt-3 mb-3 btn btn-primary me-3" />
           <input type="reset" className='btn btn-primary' value="reset" />
         </form>
             </div>
    );
};

export default Contact;