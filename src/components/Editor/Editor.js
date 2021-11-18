import React from 'react';
import UserElementCard from './UI/UserElementCard';
import styles from './style/editor.module.css';

const Editor = () => {
	return (
		<div className={styles.editor}>
			<UserElementCard>I will be editable</UserElementCard>
			<UserElementCard>I will be editable</UserElementCard>
			<UserElementCard>I will be editable</UserElementCard>
			<UserElementCard>I will be editable</UserElementCard>
			<UserElementCard>I will be editable</UserElementCard>
		</div>
	);
};

export default Editor;
