import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { map } from 'lodash-es';
import React from 'react';

import style from './category.module.scss';

const Category: React.FC = () => {
  const tabs = [{ label: 'New Taste' }, { label: 'Popular' }, { label: 'Recommended' }];

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
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Category;
