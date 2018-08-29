import React from 'react';
import { Image } from 'semantic-ui-react';

import druvaLogoImage from '../assets/images/druva_logo.png';

const DrvLogo = props => {
  return (
    <Image src={ props.image || druvaLogoImage } size='mini' circular />
  )
}

export default DrvLogo;
