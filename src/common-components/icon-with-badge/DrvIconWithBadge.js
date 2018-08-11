import React from 'react';

import DrvIcon from '../icon/DrvIcon.js';
import DrvLabel from '../label/DrvLabel.js';

const styles = {
  label: {
    top: '1.2em',
    left: '75%'
  }
};

const DrvIconWithBadge = props => {
  return (
    <React.Fragment>
      <DrvIcon name={ props.icon } />
      <DrvLabel floating color={props.labelColor} size='mini' style={ styles.label }>
        { props.labelText }
      </DrvLabel>
    </React.Fragment>
  );
}

export default DrvIconWithBadge;
