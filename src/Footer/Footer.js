import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
	return (
		<div >

			<footer class="footer-distributed f">
				<div class="footer-left">
					<p class="footer-links">
						<Link className='me-2 fs-5' to="/">Home</Link>				
                        <Link className=" me-2 fs-5" to="/aboutme">About Me</Link>
						<Link className='me-2 fs-5' to="/project">Projects</Link>
						<Link className='fs-5' to="/contact">Contact</Link>
					</p>
					<p className='text-white'>" Any fool can write code that a computer can understand. Good programmers write code that humans can understand "</p>
				</div>
				<div class="footer-center">
					<div>
						<i class="fa fa-phone"></i>
						<a href="tel:+8801717918508">+8801717918508</a>
					</div>
					<div>
						<i class="fa fa-envelope"></i>
						<a href="ahmod.fateh@gmail.com">ahmod.fateh@gmail.com</a>
						<br />
					</div>
				</div>
				<div class="footer-right">

					<div class="footer-icons">
						<a href="https://web.facebook.com/profile.php?id=100004528784980"><i class="fa fa-facebook"></i></a>
						<a href="/"><i class="fa fa-instagram"></i></a>
						<a href="https://www.linkedin.com/in/fateh-ahmod-b38812218/"><i class="fa fa-linkedin"></i></a>
						<a href="https://www.youtube.com/channel/UCefdVnCCFRfyaqf5bMKWFMg"><i class="fa fa-youtube"></i></a>
					</div>
					<a href="https://drive.google.com/file/d/1Hwz3ggzb__2z2IwHbflult_DVPhT-qRp/view?usp=sharing"><button type="button" class="px-3 btn btn-accent resumeBtn  mt-3">My Resume</button></a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;