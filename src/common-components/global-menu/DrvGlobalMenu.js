import React from 'react';
import PropTypes from 'prop-types';

import './DrvGlobalMenu.css';

import DrvSidebar from '../../common-components/sidebar/DrvSidebar.js';
import DrvMenu from '../../common-components/menu/DrvMenu.js';
import DrvIcon from '../../common-components/icon/DrvIcon.js';
import DrvHeader from '../../common-components/header/DrvHeader.js';
import DrvDivider from '../../common-components/divider/DrvDivider.js';

const DrvGlobalMenu = props => {
  return (
    <DrvSidebar
      as={ DrvMenu }
      animation='overlay'
      vertical
      borderless
      size='small'
      width='wide'
      visible={ props.isGlobalMenuVisible }
      onHide={ props.hideGlobalMenu }
    >
      <DrvMenu.Item as='a' href={ props.homeUrl }>
        <DrvIcon className='drv-icon' name='home' />
        Home
      </DrvMenu.Item>
      <DrvMenu.Item as='a' href={ props.inSyncUrl }>
        <DrvIcon className='drv-icon' name='cloud' />
        inSync
      </DrvMenu.Item>
      <DrvMenu.Item as='a' href={ props.phoenixUrl }>
        <DrvIcon className='drv-icon' name='cloud' />
        Phoenix
      </DrvMenu.Item>
      <DrvMenu.Item as='a' href={ props.cloudRangerUrl } target='_blank'>
        <DrvIcon className='drv-icon' name='cloud' />
        CloudRanger
        <DrvIcon className='drv-icon new-window' name='external alternate' />
      </DrvMenu.Item>

      <DrvDivider />

      <DrvMenu.Item>
        <DrvHeader as='h5' content='Administration' />
      </DrvMenu.Item>

      <DrvMenu.Item as='a' href={ props.manageAdministratorsUrl }>
        <DrvIcon className='drv-icon' name='user' />
        Manage Administrators
      </DrvMenu.Item>
      <DrvMenu.Item as='a' href={ props.druvaCloudSettingsUrl }>
        <DrvIcon className='drv-icon' name='cog' />
        Druva Cloud Settings
      </DrvMenu.Item>
      <DrvMenu.Item as='a' href={ props.accountDetailsUrl }>
        <DrvIcon className='drv-icon' name='info circle' />
        Account Details
      </DrvMenu.Item>
    </DrvSidebar>
  )
}

DrvGlobalMenu.propTypes = {
	homeUrl: PropTypes.string.isRequired,
	inSyncUrl: PropTypes.string.isRequired,
	phoenixUrl: PropTypes.string.isRequired,
	cloudRangerUrl: PropTypes.string.isRequired,
	manageAdministratorsUrl: PropTypes.string.isRequired,
	druvaCloudSettingsUrl: PropTypes.string.isRequired,
	accountDetailsUrl: PropTypes.string.isRequired
}

export default DrvGlobalMenu;
