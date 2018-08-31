import React from 'react';

import DrvNavbar from './components/composed-navbar/DrvNavbar.js';
import DrvMenu from './common-components/menu/DrvMenu.js';
import DrvDropdown from './common-components/dropdown/DrvDropdown.js';
import DrvIconWithBadge from './common-components/icon-with-badge/DrvIconWithBadge.js';

const App = props => {
	return (
		<DrvNavbar
			productName = 'Phoenix'
			productUrl = '/phoenix'
			productMenu = { productMenuItems }
			homeUrl='/home'
			inSyncUrl='/insync'
			phoenixUrl='/phoenix'
			cloudRangerUrl='/cloud-ranger'
			manageAdministratorsUrl='/manage-administrators'
			druvaCloudSettingsUrl='/druva-cloud-settings'
			accountDetailsUrl='/account-details'
			cloudUpdateNotifications={ cloudUpdateNotifications }
			userName='Krishna Shekhar'
			userEmail='krishna.shekhar@druva.com'
			profileUrl='/profile'
			logoutUrl='/logout'
		/>
	);
}

const orgSelected = (event, data) => {
	alert(`${data.text} clicked`);
}

const productMenuItems =
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
		<DrvMenu.Item icon='setting' />
		<DrvMenu.Item>
			<DrvIconWithBadge icon='clock outline' labelColor='green' labelText='3' />
		</DrvMenu.Item>
		<DrvMenu.Item>
			<DrvIconWithBadge icon='bell outline' labelColor='red' labelText='3' />
		</DrvMenu.Item>
	</React.Fragment>

const cloudUpdateNotifications = [
	{
		key: 'item-1',
		text: 'Phoenix Cloud Update',
		url: '/item-1',
		date: 'January 23, 2017'
	},
	{
		key: 'item-2',
		text: 'inSync Cloud Update Release',
		url: '/item-2',
		date: 'September 23, 2017'
	},
	{
		key: 'item-3',
		text: 'Apollo Cloud Update',
		url: '/item-3',
		date: 'January 23, 2017'
	},
	{
		key: 'item-4',
		text: 'Apollo Cloud Update',
		url: '/item-4',
		date: 'January 23, 2017'
	},
	{
		key: 'item-5',
		text: 'Apollo Cloud Update',
		url: '/item-5',
		date: 'January 23, 2017'
	},
	{
		key: 'item-6',
		text: 'Apollo Cloud Update',
		url: '/item-6',
		date: 'January 23, 2017'
	},
	{
		key: 'item-7',
		text: 'Apollo Cloud Update',
		url: '/item-7',
		date: 'January 23, 2017'
	},
	{
		key: 'item-8',
		text: 'Apollo Cloud Update',
		url: '/item-8',
		date: 'January 23, 2017'
	},
	{
		key: 'item-9',
		text: 'Apollo Cloud Update',
		url: '/item-9',
		date: 'January 23, 2017'
	}
];

export default App;
