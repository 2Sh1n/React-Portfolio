import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>
				<BsLinkedin />
			</a>
			<a
				href='https://github.com/Catevika'
				target='_blank'
				rel='noopener noreferrer'
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default HeaderSocials;
