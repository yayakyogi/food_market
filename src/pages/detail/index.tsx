import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Rating from '@components/ui/rating/rating.component';
import { IconChevronLeft } from '@tabler/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style.module.scss';

const DetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex direction="column" w="full">
      <Button onClick={() => navigate(-1)} className={style.button}>
        <IconChevronLeft size={40} color="white" />
      </Button>
      <Image src="/images/foods/food-1.png" height="40%" objectFit="cover" />
      <Box className={style.information}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize={18} fontWeight="medium" mb={1}>
              Cheery Healthy
            </Text>
            <Rating value={4.5} />
          </Box>
          <Flex alignItems="center" gap={3}>
            <Button size="xs" fontSize={16} bgColor="transparent" border="1px" borderColor="black" p={3}>
              -
            </Button>
            <Text fontSize={16}>1</Text>
            <Button size="xs" fontSize={16} bgColor="transparent" border="1px" borderColor="black">
              +
            </Button>
          </Flex>
        </Flex>
        <Text className={style.description}>
          Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan pola makan yang cukup tinggi dengan
          mengutamakan diet yang sehat dan teratur.
        </Text>
        <Box className={style.ingredients}>
          <Text color="black">Ingredients</Text>
          <Text className={style.material}>Seledri, telur, blueberry, madu.</Text>
        </Box>
      </Box>
      <Flex justifyContent="space-between" alignItems="center" className={style.action}>
        <Box width="50%">
          <Text className={style.label}>Total Price</Text>
          <Text className={style.total}>IDR 12.289.000</Text>
        </Box>
        <Button borderRadius="xl">Order Now</Button>
      </Flex>
    </Flex>
  );
};

export default DetailPage;
