import React from 'react';
import { Image } from 'semantic-ui-react';

const DrvLogo = props => {
  return (
    <Image src={ props.image } size='mini' circular />
  )
}

export default DrvLogo;
