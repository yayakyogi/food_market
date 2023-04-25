import { Box, Flex, Text } from '@chakra-ui/react';
import { IconChevronLeft } from '@tabler/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './header.module.scss';

interface Props {
  title: string;
  subtitle: string;
  backUrl?: string;
  forceBack?: boolean;
}

const Header: React.FC<Props> = ({ title, subtitle, backUrl, forceBack }) => {
  const navigate = useNavigate();

  const goBack = () => {
    if (forceBack) {
      navigate(backUrl || '/');
    } else {
      navigate(-1 || backUrl);
    }
  };

  return (
    <Flex alignItems="center" gap={5} py={30} px={forceBack ? 5 : 30} className={style.header}>
      {forceBack && <IconChevronLeft size={30} onClick={goBack} />}
      <Box>
        <Text fontSize="22px" fontWeight="medium">
          {title}
        </Text>
        <Text fontWeight="light" color="secondary">
          {subtitle}
        </Text>
      </Box>
    </Flex>
  );
};

Header.defaultProps = {
  backUrl: undefined,
  forceBack: false,
};

export default Header;
