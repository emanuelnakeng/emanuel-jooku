import React from 'react';
import styles from './style/frame.module.css';

const Frame = () => {
	return (
		<div className={styles.editor_frame}>
			<div className={styles.phone}>
				<div className={styles.notch_container}></div>
				<div className={styles.notch}></div>
				<img
					src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1543663/cp-iphonex-1125x2436.png'
					alt='Test'
				/>
			</div>
		</div>
	);
};

export default Frame;
