import React from 'react';

import DrvNavbar from './components/configuration-driven-navbar/DrvNavbar.js';
import druvaLogoImage from './images/druva_215.png';

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

const menuItems = [
  {
    type: 'dropdown',
    text: 'All Organizations',
    classes: 'item',
    children: [
      { text: 'Organization 1', as: 'a', href: '/org-1' },
      { text: 'Organization 2', as: 'a', href: '/org-2' },
      { text: 'Organization 3', as: 'a', href: '/org-3' },
      { text: 'Organization 4', onClick: orgSelected },
      { text: 'Organization 5', onClick: orgSelected },
      { text: 'Organization 6', onClick: orgSelected }
    ]
  },
  {
    name: 'home', as: 'a', href: '/home'
  },
  {
    name: 'messages', as: 'a', href: '/messages'
  },
  {
    name: 'friends', as: 'a', href: '/friends'
  }
];

const notificationIcons = [
  { icon: 'setting' },
  {
    children: [
      {
        type: 'icon-with-badge',
        icon: 'clock outline',
        labelColor: 'green',
        labelText: '3'
      }
    ]
  },
  {
    children: [
      {
        type: 'icon-with-badge',
        icon: 'bell outline',
        labelColor: 'red',
        labelText: '3'
      }
    ]
  }
];

const adminIcons = [
  {
    children: [
      {
        type: 'icon-with-badge',
        icon: 'bullhorn',
        labelColor: 'blue',
        labelText: '3'
      }
    ]
  },
  { icon: 'help circle' },
  { icon: 'circle' }
];

export default App;
