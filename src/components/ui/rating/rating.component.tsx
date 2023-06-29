import { Flex, Image, Text } from '@chakra-ui/react';
import { map } from 'lodash-es';
import React from 'react';

const Rating: React.FC<{ value: number }> = ({ value }) => {
  const rating = Math.floor(value);

  return (
    <Flex alignItems="center" gap={1}>
      {map(Array(rating), (_, index) => {
        return <Image key={index} src="/images/icons/star-active.svg" />;
      })}
      {map(Array(5 - rating), (_, index) => {
        return <Image key={index} src="/images/icons/star.svg" />;
      })}
      <Text>{value.toFixed(1)}</Text>
    </Flex>
  );
};

export default Rating;
