import React from 'react';
import styles from '../style/userElement.module.css';

const UserElementCard = ({ children }) => {
	return <div className={styles.user_element}>{children}</div>;
};

export default UserElementCard;
