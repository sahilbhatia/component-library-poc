import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DrvNavbar.css';

import DrvMenu from '../../common-components/menu/DrvMenu.js';
import DrvLogo from '../../common-components/logo/DrvLogo.js';
import DrvIconWithBadge from '../../common-components/icon-with-badge/DrvIconWithBadge.js';
import DrvPopup from '../../common-components/popup/DrvPopup.js';
import DrvList from '../../common-components/list/DrvList.js';
import DrvFeed from '../../common-components/feed/DrvFeed.js';
import DrvButton from '../../common-components/button/DrvButton.js';
import DrvSidebar from '../../common-components/sidebar/DrvSidebar.js';
import DrvSegment from '../../common-components/segment/DrvSegment.js';
import DrvGlobalMenu from '../../common-components/global-menu/DrvGlobalMenu.js';
import DrvLabel from '../../common-components/label/DrvLabel';
import DrvDivider from '../../common-components/divider/DrvDivider';
import DrvDropdown from '../../common-components/dropdown/DrvDropdown';
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
		return this.props.cloudUpdateNotifications.map((notification) => {
			return (
				<DrvFeed.Event key={ notification.key }>
					<DrvFeed.Content>
						<DrvFeed.Summary
							date={ notification.date }
							content={ `${ notification.text },` }
						/>
					</DrvFeed.Content>
				</DrvFeed.Event>
			);
		});
	}

	getInitials = () => {
		return this.props.userName.charAt(0).toUpperCase();
	}

	render() {
		return (
			<React.Fragment>
				<DrvMenu inverted borderless size='small'>
					{/* Logo */}
					<DrvMenu.Item onClick={ this.toggleGlobalMenuVisibility }>
						<DrvLogo />
					</DrvMenu.Item>

					{/* Product Name */}
					<DrvMenu.Item content={ this.props.productName } as='a' href={ this.props.productUrl } />

					{/* Product Menu - Desktop view and above */}
					<DrvResponsive as={ DrvMenu.Menu } minWidth={769} className={ this.props.productMenu ? null : 'hide' }>
						{ this.props.productMenu }
					</DrvResponsive>

					{/* Product Menu - Tablet view and below */}
					<DrvResponsive as={ DrvMenu.Menu } maxWidth={768} className={ this.props.productMenu ? null : 'hide' }>
						<DrvDropdown item icon='bars'>
							<DrvDropdown.Menu>
								{ this.props.productMenu }
							</DrvDropdown.Menu>
						</DrvDropdown>
					</DrvResponsive>

					{/* Admin Icons */}
					<DrvMenu.Menu position='right'>

						{/* Cloud update notifications popup */}
						<DrvPopup
							trigger={
								<DrvMenu.Item>
									<DrvIconWithBadge
										icon='bullhorn'
										labelColor='blue'
										labelText={ this.props.cloudUpdateNotifications.length }
									/>
								</DrvMenu.Item>
							}
							content={
								<DrvFeed>
									{ this.platformUpdatesFeed() }
								</DrvFeed>
							}
							on='click'
							hideOnScroll
							position='bottom center'
							verticalOffset={-10}
							flowing
						/>

						{/* Documentation menu popup */}
						<DrvPopup
							trigger={ <DrvMenu.Item icon='help circle' /> }
							content={
								<DrvList relaxed>
									<DrvList.Item as='a' href={ this.props.documentationUrl }>
										Documentation
									</DrvList.Item>

									<DrvList.Item as='a' href={ this.props.supportPortalUrl }>
										Support Portal
									</DrvList.Item>

									<DrvList.Item as='a' href={ this.props.cloudStatusUrl }>
										Cloud Status
									</DrvList.Item>

									<DrvList.Item as='a' href={ this.props.sendFeedbackUrl }>
										Send Feedback
									</DrvList.Item>
								</DrvList>
							}
							on='click'
							hideOnScroll
							position='bottom center'
							verticalOffset={-10}
							flowing
						/>

						{/* Profile menu popup */}
						<DrvPopup
							trigger={
								<DrvMenu.Item>
									<DrvLabel circular size='tiny'>
										{ this.getInitials() }
									</DrvLabel>
								</DrvMenu.Item>
							}
							content={
								<DrvList relaxed>
									<DrvList.Item>
										<DrvList.Icon verticalAlign='middle'>
											<DrvLabel
												size='big'
												color='green'
												circular
												content={ this.getInitials() }
											/>
										</DrvList.Icon>

										<DrvList.Content verticalAlign='middle'>
											<DrvList.Description as='a' href={ this.props.profileUrl }>
												{ this.props.userEmail }
											</DrvList.Description>
										</DrvList.Content>
									</DrvList.Item>

									<DrvDivider />

									<DrvButton primary floated='right' as='a' href={ this.props.logoutUrl }>
										Log out
									</DrvButton>
								</DrvList>
							}
							on='click'
							hideOnScroll
							position='bottom center'
							verticalOffset={-10}
							flowing
						/>
					</DrvMenu.Menu>
				</DrvMenu>

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
