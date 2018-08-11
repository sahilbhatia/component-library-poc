import React from 'react';

import DrvNavbar from './components/composed-navbar/DrvNavbar.js';
import druvaLogoImage from './images/druva_215.png';
import DrvMenu from './common-components/menu/DrvMenu.js';
import DrvDropdown from './common-components/dropdown/DrvDropdown.js';
import DrvIconWithBadge from './common-components/icon-with-badge/DrvIconWithBadge.js';

const App = props => {
	return (
		<DrvNavbar
			logo = { druvaLogoImage }
			productName = 'Phoenix'
			productUrl = '/phoenix'
			menuItems = { menuItems }
			notificationIcons = { notificationIcons }
			adminIcons = { adminIcons }
		/>
	);
}

const orgSelected = (event, data) => {
	alert(`${data.text} clicked`);
}

const menuItems =
	<React.Fragment>
		<DrvDropdown text='All Organizations' className='item'>
			<DrvDropdown.Menu>
				<DrvDropdown.Item text='Organization 1' as='a' href='/org-1' />
				<DrvDropdown.Item text='Organization 2' as='a' href='/org-2' />
				<DrvDropdown.Item text='Organization 3' as='a' href='/org-3' />
				<DrvDropdown.Item text='Organization 4' onClick={ orgSelected } />
				<DrvDropdown.Item text='Organization 5' onClick={ orgSelected } />
				<DrvDropdown.Item text='Organization 6' onClick={ orgSelected } />
			</DrvDropdown.Menu>
		</DrvDropdown>

		<DrvMenu.Item name='home' as='a' href='/home' />
		<DrvMenu.Item name='messages' as='a' href='/messages' />
		<DrvMenu.Item name='friends' as='a' href='/friends' />
	</React.Fragment>

const notificationIcons =
	<React.Fragment>
		<DrvMenu.Item icon='setting' />
		<DrvMenu.Item>
			<DrvIconWithBadge icon='clock outline' labelColor='green' labelText='3' />
		</DrvMenu.Item>
		<DrvMenu.Item>
			<DrvIconWithBadge icon='bell outline' labelColor='red' labelText='3' />
		</DrvMenu.Item>
	</React.Fragment>

const adminIcons =
	<React.Fragment>
		<DrvMenu.Item>
			<DrvIconWithBadge icon='bullhorn' labelColor='blue' labelText='3' />
		</DrvMenu.Item>
		<DrvMenu.Item icon='help circle' />
		<DrvMenu.Item icon='circle' />
	</React.Fragment>

export default App;
