import React from 'react';
import PropTypes from 'prop-types';

import DrvMenu from '../../common-components/menu/DrvMenu.js';
import DrvLogo from '../../common-components/logo/DrvLogo.js';

const styles = {
	menu: {
		height: '7ex'
	}
};

const DrvNavbar = props => {
	return (
		<DrvMenu inverted style={ styles.menu }>
			{/* Logo */}
			<DrvMenu.Item>
				<DrvLogo image={ props.logo } />
			</DrvMenu.Item>

			{/* Product Name */}
			<DrvMenu.Item content={ props.productName } as='a' href={ props.productUrl } />

			{/* Menu Items */}
			<DrvMenu.Menu position='left'>
				{ props.menuItems }
			</DrvMenu.Menu>

			{/* Notification Icons */}
			<DrvMenu.Menu position='right'>
				{ props.notificationIcons }
			</DrvMenu.Menu>

			{/* Admin Icons */}
			<DrvMenu.Menu position='right'>
				{ props.adminIcons }
			</DrvMenu.Menu>
		</DrvMenu>
	);
}

DrvNavbar.propTypes = {
	logo: PropTypes.string.isRequired,
	productName: PropTypes.string.isRequired,
	productUrl: PropTypes.string.isRequired,
	menuItems: PropTypes.element,
	notificationIcons: PropTypes.element,
	adminIcons: PropTypes.element
}

export default DrvNavbar;
