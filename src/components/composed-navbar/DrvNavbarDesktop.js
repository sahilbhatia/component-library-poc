import React from 'react';

import DrvMenu from '../../common-components/menu/DrvMenu.js';
import DrvLogo from '../../common-components/logo/DrvLogo.js';
import DrvIconWithBadge from '../../common-components/icon-with-badge/DrvIconWithBadge.js';
import DrvPopup from '../../common-components/popup/DrvPopup.js';
import DrvList from '../../common-components/list/DrvList.js';
import DrvFeed from '../../common-components/feed/DrvFeed.js';
import DrvButton from '../../common-components/button/DrvButton.js';
import DrvLabel from '../../common-components/label/DrvLabel';
import DrvDivider from '../../common-components/divider/DrvDivider';

const DrvNavbarDesktop = props => {
  return (
    <DrvMenu inverted borderless size='small'>
        {/* Logo */}
        <DrvMenu.Item onClick={ props.toggleGlobalMenuVisibility }>
          <DrvLogo />
        </DrvMenu.Item>

        {/* Product Name */}
        <DrvMenu.Item content={ props.productName } as='a' href={ props.productUrl } />

        {/* Product Menu - Desktop view and above */}
        { props.productMenu }

        {/* Admin Icons */}
        <DrvMenu.Menu position='right'>

          {/* Cloud update notifications popup */}
          <DrvPopup
            trigger={
              <DrvMenu.Item>
                <DrvIconWithBadge
                  icon='bullhorn'
                  labelColor='blue'
                  labelText={ props.cloudUpdateNotifications.length }
                />
              </DrvMenu.Item>
            }
            content={
              <DrvFeed>
                { props.platformUpdatesFeed() }
              </DrvFeed>
            }
            on='click'
            hideOnScroll
            position='bottom center'
            verticalOffset={-10}
            horizontalOffset={-4}
          />

          {/* Documentation menu popup */}
          <DrvPopup
            trigger={ <DrvMenu.Item icon='help circle' /> }
            content={
              <DrvList relaxed>
                <DrvList.Item as='a' href={ props.documentationUrl }>
                  Documentation
                </DrvList.Item>

                <DrvList.Item as='a' href={ props.supportPortalUrl }>
                  Support Portal
                </DrvList.Item>

                <DrvList.Item as='a' href={ props.cloudStatusUrl }>
                  Cloud Status
                </DrvList.Item>

                <DrvList.Item as='a' href={ props.sendFeedbackUrl }>
                  Send Feedback
                </DrvList.Item>
              </DrvList>
            }
            on='click'
            hideOnScroll
            position='bottom center'
            verticalOffset={-10}
          />

          {/* Profile menu popup */}
          <DrvPopup
            trigger={
              <DrvMenu.Item>
                <DrvLabel circular size='tiny'>
                  { props.getInitials() }
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
                      content={ props.getInitials() }
                    />
                  </DrvList.Icon>

                  <DrvList.Content verticalAlign='middle'>
                    <DrvList.Description as='a' href={ props.profileUrl } className='ellipsis'>
                      { props.userEmail }
                    </DrvList.Description>
                  </DrvList.Content>
                </DrvList.Item>

                <DrvDivider />

                <DrvButton primary floated='right' as='a' href={ props.logoutUrl }>
                  Log out
                </DrvButton>
              </DrvList>
            }
            on='click'
            hideOnScroll
            position='bottom center'
            verticalOffset={-10}
            horizontalOffset={-4}
          />
        </DrvMenu.Menu>
      </DrvMenu>
  );
}

export default DrvNavbarDesktop;
