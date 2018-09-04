import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DrvNavbar.css';

import DrvNavbarDesktop from './DrvNavbarDesktop';
import DrvNavbarMobile from './DrvNavbarMobile';

import DrvMenu from '../../common-components/menu/DrvMenu.js';
import DrvFeed from '../../common-components/feed/DrvFeed.js';
import DrvSidebar from '../../common-components/sidebar/DrvSidebar.js';
import DrvSegment from '../../common-components/segment/DrvSegment.js';
import DrvGlobalMenu from '../../common-components/global-menu/DrvGlobalMenu.js';
import DrvResponsive from '../../common-components/responsive/DrvResponsive';

class DrvNavbar extends Component {
	state = {
		isGlobalMenuVisible: false
	}

	toggleGlobalMenuVisibility = () => {
		this.setState({ isGlobalMenuVisible: !this.state.isGlobalMenuVisible })
	}

	hideGlobalMenu = () => {
		this.setState({ isGlobalMenuVisible: false })
	}

	platformUpdatesFeed = () => {
		const cloudUpdateNotifications = this.props.cloudUpdateNotifications.slice(0, 5);

		if ( cloudUpdateNotifications.length > 0 ) {
			return cloudUpdateNotifications.map((notification) => {
				return (
					<DrvFeed.Event key={ notification.key }>
						<DrvFeed.Content>
							<DrvFeed.Summary>
								<DrvFeed.Label
									as='a'
									href={ notification.url }
									content={ notification.text }
									className='ellipsis'
								/>
								<DrvFeed.Date content={ notification.date } />
							</DrvFeed.Summary>
						</DrvFeed.Content>
					</DrvFeed.Event>
				);
			});
		} else {
			return (
				<DrvFeed.Event>
					<DrvFeed.Content>
						<DrvFeed.Summary>
							<DrvFeed.Date content='No Updates Available' />
						</DrvFeed.Summary>
					</DrvFeed.Content>
				</DrvFeed.Event>
			);
		}
	}

	getInitials = () => {
		return this.props.userName.charAt(0).toUpperCase();
	}

	render() {
		return (
			<React.Fragment>
				<DrvResponsive as={ DrvMenu.Menu } minWidth={769}>
					<DrvNavbarDesktop
						{ ...this.props }
						cloudUpdateNotifications={ this.props.cloudUpdateNotifications }
						platformUpdatesFeed={ this.platformUpdatesFeed }
						getInitials={ this.getInitials }
						toggleGlobalMenuVisibility={ this.toggleGlobalMenuVisibility }
					/>
				</DrvResponsive>

				<DrvResponsive as={ DrvMenu.Menu } maxWidth={768}>
					<DrvNavbarMobile
						{ ...this.props }
						cloudUpdateNotifications={ this.props.cloudUpdateNotifications }
						platformUpdatesFeed={ this.platformUpdatesFeed }
						getInitials={ this.getInitials }
						toggleGlobalMenuVisibility={ this.toggleGlobalMenuVisibility }
					/>
				</DrvResponsive>

				{/* Global flyout menu */}
				<DrvSidebar.Pushable as={ DrvSegment }>
					<DrvGlobalMenu
						isGlobalMenuVisible={ this.state.isGlobalMenuVisible }
						hideGlobalMenu={ this.hideGlobalMenu }
						homeUrl={ this.props.homeUrl }
						inSyncUrl={ this.props.inSyncUrl }
						phoenixUrl={ this.props.phoenixUrl }
						cloudRangerUrl={ this.props.cloudRangerUrl }
						manageAdministratorsUrl={ this.props.manageAdministratorsUrl }
						druvaCloudSettingsUrl={ this.props.druvaCloudSettingsUrl }
						accountDetailsUrl={ this.props.accountDetailsUrl }
					/>

					<DrvSidebar.Pusher dimmed={ this.state.isGlobalMenuVisible } />
				</DrvSidebar.Pushable>
			</React.Fragment>
		);
	}
}

DrvNavbar.propTypes = {
	productName: PropTypes.string.isRequired,
	productUrl: PropTypes.string.isRequired,
	productMenu: PropTypes.element,
	homeUrl: PropTypes.string.isRequired,
	inSyncUrl: PropTypes.string.isRequired,
	phoenixUrl: PropTypes.string.isRequired,
	cloudRangerUrl: PropTypes.string.isRequired,
	manageAdministratorsUrl: PropTypes.string.isRequired,
	druvaCloudSettingsUrl: PropTypes.string.isRequired,
	accountDetailsUrl: PropTypes.string.isRequired,
	cloudUpdateNotifications: PropTypes.PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired
		})
	).isRequired,
	userName: PropTypes.string.isRequired,
	userEmail: PropTypes.string.isRequired,
	profileUrl: PropTypes.string.isRequired,
	logoutUrl: PropTypes.string.isRequired
}

DrvNavbar.defaultProps = {
	documentationUrl: '/documentation',
	supportPortalUrl: '/support-portal',
	cloudStatusUrl: '/cloud-status',
	sendFeedbackUrl: '/send-feedback'
}

export default DrvNavbar;
