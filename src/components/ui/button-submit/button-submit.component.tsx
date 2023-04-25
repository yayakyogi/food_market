import { Button } from '@chakra-ui/react';
import classNames from 'classnames';
import React from 'react';

import style from './button-submit.module.scss';

interface Props {
  title: string;
  onClick: () => void;
  isButtonSecondary?: boolean;
  mt?: number;
  mb?: number;
}

const ButtonSubmit: React.FC<Props> = ({ title, onClick, isButtonSecondary, mt, mb }) => {
  return (
    <Button
      mb={mb}
      mt={mt}
      colorScheme="black"
      onClick={onClick}
      className={classNames(style.button, [{ [style.buttonSecondary]: isButtonSecondary }])}
    >
      {title}
    </Button>
  );
};

ButtonSubmit.defaultProps = {
  isButtonSecondary: false,
  mt: 0,
  mb: 3,
};

export default ButtonSubmit;
