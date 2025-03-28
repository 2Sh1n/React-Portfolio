import React from 'react';
import './About.css';
import ME from '../../assets/me-about.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5>Get to know</h5>
			<h2>About me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='me' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>3+ years Working</small>
						</article>
						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</article>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
						dolor qui corporis quibusdam blanditiis, magni, quisquam dignissimos
						vero dolorum consectetur amet quae aperiam culpa accusamus id
						officiis! Error, libero minus!
					</p>
					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
