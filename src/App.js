import React from 'react';

import DrvNavbar from './components/composed-navbar/DrvNavbar.js';
import DrvMenu from './common-components/menu/DrvMenu.js';
import DrvDropdown from './common-components/dropdown/DrvDropdown.js';
import DrvIconWithBadge from './common-components/icon-with-badge/DrvIconWithBadge.js';

const App = props => {
	return (
		<React.Fragment>
			asdasd
			<div class="ui grid">
				<div class="four wide column"></div>
				<div class="four wide column"></div>
				<div class="four wide column"></div>
				<div class="four wide column"></div>
				<div class="four wide column"></div>
				<div class="four wide column"></div>
				<div class="four wide column"></div>
				<div class="four wide column"></div>
			</div>
		</React.Fragment>
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
		date: 'January 23, 2017'
	},
	{
		key: 'item-2',
		text: 'inSync Cloud Update Release',
		date: 'January 23, 2017'
	},
	{
		key: 'item-3',
		text: 'Apollo Cloud Update',
		date: 'January 23, 2017'
	}
];

export default App;
