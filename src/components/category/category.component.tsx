import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import FoodItem from '@components/ui/food-item/food-item.component';
import Rating from '@components/ui/rating/rating.component';
import { map } from 'lodash-es';
import React from 'react';

import style from './category.module.scss';

const Category: React.FC = () => {
  const tabs = [{ label: 'New Taste' }, { label: 'Popular' }, { label: 'Recommended' }];

  const foodItems = [
    {
      id: 12,
      image: '/images/foods/food-1.png',
      title: 'Sop Buah',
      description: 'IDR 209.000',
      rightContent: <Rating value={4.5} />,
    },
    {
      id: 14,
      image: '/images/foods/food-2.png',
      title: 'Chicken',
      description: 'IDR 100.000',
      rightContent: <Rating value={5} />,
    },
    {
      id: 16,
      image: '/images/foods/food-1.png',
      title: 'Shrimp',
      description: 'IDR 999.000',
      rightContent: <Rating value={3.9} />,
    },
  ];

  return (
    <Box className={style.container}>
      <Tabs>
        <TabList>
          {map(tabs, (tab, index) => {
            return (
              <Tab key={index} className={style.tab}>
                {tab.label}
              </Tab>
            );
          })}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex direction="column" gap={3}>
              {map(foodItems, (val) => {
                return (
                  <FoodItem
                    key={val.id}
                    id={val.id}
                    image={val.image}
                    title={val.title}
                    description={val.description}
                    rightContent={val.rightContent}
                  />
                );
              })}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction="column" gap={3}>
              {map(foodItems, (val) => {
                return (
                  <FoodItem
                    key={val.id}
                    id={val.id}
                    image={val.image}
                    title={val.title}
                    description={val.description}
                    rightContent={val.rightContent}
                  />
                );
              })}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex direction="column" gap={3}>
              {map(foodItems, (val) => {
                return (
                  <FoodItem
                    key={val.id}
                    id={val.id}
                    image={val.image}
                    title={val.title}
                    description={val.description}
                    rightContent={val.rightContent}
                  />
                );
              })}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Category;
