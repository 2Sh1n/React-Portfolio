import React from 'react';
import IMG from '../../assets/Remix-support-desk app.jpeg';
import './Portfolio.css';

const data = [
	{
		id: '1',
		image: IMG,
		title: 'Enrollment System',
		github: '#',
		demo: '#'
	},
	{
		id: '2',
		image: IMG,
		title: 'Website Templates',
		github: '#',
		demo: '#'
	},
	{
		id: '3',
		image: IMG,
		title: 'Food Order System',
		github: '#',
		demo: '#'
	}
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={image} alt='portfolio' />
							</div>
							<h3>{title}</h3>
							<div className='portfolio__item-cta'>
								<a
									href={github}
									target='_blank'
									rel='noopener noreferrer'
									className='btn'
								>
									Github
								</a>
								<a
									href={demo}
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-primary'
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
