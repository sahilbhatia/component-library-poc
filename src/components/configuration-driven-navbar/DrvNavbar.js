import React from 'react';
import PropTypes from 'prop-types';

import DrvMenu from '../../common-components/menu/DrvMenu.js';
import DrvLogo from '../../common-components/logo/DrvLogo.js';
import DrvDropdown from '../../common-components/dropdown/DrvDropdown.js';
import DrvIconWithBadge from '../../common-components/icon-with-badge/DrvIconWithBadge.js';

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
				{ props.menuItems && buildMenuItems(props.menuItems) }
			</DrvMenu.Menu>

			{/* Notification Icons */}
			<DrvMenu.Menu position='right'>
				{ props.notificationIcons && buildNotificationIcons(props.notificationIcons) }
			</DrvMenu.Menu>

			{/* Admin Icons */}
			<DrvMenu.Menu position='right'>
				{ props.adminIcons && buildAdminIcons(props.adminIcons) }
			</DrvMenu.Menu>
		</DrvMenu>
	);
}

DrvNavbar.propTypes = {
	logo: PropTypes.string.isRequired,
	productName: PropTypes.string.isRequired,
	productUrl: PropTypes.string.isRequired,
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf(['dropdown']),
			text: PropTypes.string,
			classes: PropTypes.string,
			name: PropTypes.string,
			as: PropTypes.oneOf(['a']),
			href: PropTypes.string,
			children: PropTypes.arrayOf(
				PropTypes.shape({
					text: PropTypes.string,
					as: PropTypes.oneOf(['a']),
					href: PropTypes.string,
					onClick: PropTypes.func
				})
			)
		})
	),
	notificationIcons: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string,
			children: PropTypes.arrayOf(
				PropTypes.shape({
					type: PropTypes.oneOf(['icon-with-badge']),
					icon: PropTypes.string,
					labelColor: PropTypes.string,
					labelText: PropTypes.string
				})
			)
		})
	),
	adminIcons: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.string,
			children: PropTypes.arrayOf(
				PropTypes.shape({
					type: PropTypes.oneOf(['icon-with-badge']),
					icon: PropTypes.string,
					labelColor: PropTypes.string,
					labelText: PropTypes.string
				})
			)
		})
	)
}

const buildMenuItems = menuItems => {
	return menuItems.map((hsh, index) => {
		if ( hsh.type === 'dropdown' ) {
			let { text, classes, children } = hsh;
			let dropdownItems = children.map((submenu, indx) => {
				return (
					<DrvDropdown.Item key={ indx } { ...submenu } />
				);
			});

			return (
				<DrvDropdown key={ index} text={ text } className={ classes }>
					<DrvDropdown.Menu>
						{ dropdownItems }
					</DrvDropdown.Menu>
				</DrvDropdown>
			);
		} else {
			return (
				<DrvMenu.Item key={ index} { ...hsh } />
			);
		}
	});
};

const buildNotificationIcons = notificationIcons => {
	return notificationIcons.map((hsh, index) => {
		if ( hsh.children == null ) {
			return <DrvMenu.Item key={ index } { ...hsh } />
		} else {
			let children = hsh.children.map((obj, indx) => {
				if ( obj.type === 'icon-with-badge' ) {
					delete obj.type;

					return <DrvIconWithBadge key={ indx } { ...obj } />
				} else {
					return null;
				}
			});

			return (
				<DrvMenu.Item key={ index }>
					{ children }
				</DrvMenu.Item>
			);
		}
	});
};

const buildAdminIcons = adminIcons => {
	return adminIcons.map((hsh, index) => {
		if ( hsh.children == null ) {
			return <DrvMenu.Item key={ index } { ...hsh } />
		} else {
			let children = hsh.children.map((obj, indx) => {
				if ( obj.type === 'icon-with-badge' ) {
					delete obj.type;

					return <DrvIconWithBadge key={ indx } { ...obj } />
				} else {
					return null;
				}
			});

			return (
				<DrvMenu.Item key={ index }>
					{ children }
				</DrvMenu.Item>
			);
		}
	});
};

export default DrvNavbar;
