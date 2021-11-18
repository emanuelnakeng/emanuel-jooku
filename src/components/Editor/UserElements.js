import React from 'react';
import {
	Typography,
	Button as MUIButton,
	Divider as MUIDivider,
	Avatar as MUIAvatar,
} from '@material-ui/core';

export const Text = ({ children, size }) => {
	return <Typography size={size}>{children || 'hello'}</Typography>;
};

export const Button = ({ variant, children }) => {
	return <MUIButton variant={variant}>{children}</MUIButton>;
};

export const Divider = ({ align, children }) => {
	return <MUIDivider textAlign={align}>children</MUIDivider>;
};

export const Avatar = ({ alt, src, width, height }) => {
	return (
		<MUIAvatar
			alt={alt}
			src={src}
			sx={{ width: width, height: height }}
		></MUIAvatar>
	);
};
