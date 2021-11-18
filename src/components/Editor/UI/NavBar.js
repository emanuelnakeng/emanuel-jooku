import React from 'react';
import styles from '../style/navBar.module.css';
import { AiOutlineUser } from 'react-icons/ai';
import { Button, IconButton } from '@material-ui/core';

const NavBar = () => {
	return (
		<nav className={styles.navigation_bar}>
			<IconButton aria-label='user profile' color='primary'>
				<AiOutlineUser />
			</IconButton>
			<div className={styles.nav_actions}>
				<Button variant='contained' color='primary'>
					Publish
				</Button>
				<Button>Save</Button>
			</div>
		</nav>
	);
};

export default NavBar;
