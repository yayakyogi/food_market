import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  image: string;
  title: string;
  description: string;
  rightContent: React.ReactNode;
  id: number;
}

const FoodItem: React.FC<Props> = ({ image, title, description, rightContent, id }) => {
  const navigate = useNavigate();

  return (
    <Flex alignItems="center" gap={3} onClick={() => navigate(`/food/${id}`)}>
      <Image src={image} rounded="md" w="60px" h="60px" objectFit="cover" />
      <Box flex={1}>
        <Text fontSize={16} fontWeight="medium">
          {title}
        </Text>
        <Text fontSize={12} color="GrayText">
          {description}
        </Text>
      </Box>
      <Box>{rightContent}</Box>
    </Flex>
  );
};

export default FoodItem;
