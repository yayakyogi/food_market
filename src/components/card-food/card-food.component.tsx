import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import style from './card.module.scss';

interface Props {
  image: string;
  name: string;
  rate: number;
}

const CardFood: React.FC<Props> = ({ image, name, rate }) => {
  return (
    <Box className={style.container}>
      <Box className={style.boxImage}>
        <Image src={image} />
      </Box>
      <Box p={3} className={style.information}>
        <Text className={style.name}>{name}</Text>
        <Flex alignItems="center" gap={1}>
          <Image src="/images/icons/star-active.svg" />
          <Image src="/images/icons/star-active.svg" />
          <Image src="/images/icons/star-active.svg" />
          <Image src="/images/icons/star-active.svg" />
          <Image src="/images/icons/star.svg" />
          <Text className={style.rate}>{rate}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardFood;
