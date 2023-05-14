import { Flex } from '@chakra-ui/react';
import CardFood from '@components/card-food/card-food.component';
import Category from '@components/category/category.component';
import Header from '@components/ui/header/header.component';
import HomeLayout from '@layout/home/home.module';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <HomeLayout>
      <Header title="FoodMarket" subtitle="Let's get some foods" sourcePhoto="/images/logo/user-dummy.png" />
      <Flex px={4} gap={4} overflow="auto">
        <CardFood image="/images/foods/food-1.png" name="Cherry Healthy" rate={4.5} />
        <CardFood image="/images/foods/food-2.png" name="Burger Tamayo" rate={4.5} />
        <CardFood image="/images/foods/food-1.png" name="Cherry Healthy" rate={4.5} />
      </Flex>
      <Category />
    </HomeLayout>
  );
};

export default HomePage;
