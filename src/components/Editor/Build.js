import React from 'react';
import FooterNav from './UI/FooterNav';
import NavBar from './UI/NavBar';
import Editor from './Editor';
import Frame from './Frame';
import styles from './style/build.module.css';

const Build = () => {
	return (
		<div>
			<NavBar />
			<div className={styles.builder_layout}>
				<Editor />
				<Frame />
			</div>
			<FooterNav />
		</div>
	);
};

export default Build;
