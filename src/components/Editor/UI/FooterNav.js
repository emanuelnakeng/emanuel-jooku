import React from 'react';
import styles from '../style/bottomNav.module.css';
import {
	AiOutlinePlus,
	AiOutlineMenu,
	AiOutlineLayout,
	AiOutlineExpand,
} from 'react-icons/ai';
import { IconButton, Typography } from '@material-ui/core';

const FooterNav = () => {
	return (
		<>
			<AddElement />
			<footer className={styles.footer_nav}>
				<IconButton aria-label='add element' color='primary'>
					<AiOutlineLayout />
					<Typography>Manage</Typography>
				</IconButton>
				<IconButton aria-label='add element' color='primary'>
					<AiOutlineExpand />
					<Typography>Preview</Typography>
				</IconButton>
				<IconButton aria-label='openmenu' color='primary'>
					<AiOutlineMenu />
					<Typography>Menu</Typography>
				</IconButton>
			</footer>
		</>
	);
};

export default FooterNav;

const AddElement = () => {
	return (
		<div className={styles.add_button}>
			<IconButton>
				<AiOutlinePlus color='#fff' />
			</IconButton>
		</div>
	);
};
