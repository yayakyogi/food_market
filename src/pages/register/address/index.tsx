import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { ErrorMessage, Field, Formik } from 'formik';
import Header from '@components/ui/header/header.component';
import * as Yup from 'yup';
import { map } from 'lodash-es';

const RegisterAddressPage: React.FC = () => {
  const [city, setCity] = useState('');

  const addressScheme = Yup.object().shape({
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    houseNumber: Yup.string(),
  });

  const cities = [
    { label: 'Jakarta', value: '001' },
    { label: 'Surabaya', value: '002' },
    { label: 'Yogyakarta', value: '003' },
  ];

  return (
    <Flex direction="column" w="full" h="full">
      <Header title="Address" subtitle="Make sure it's valid" backUrl="/register" forceBack />
      <Box flex={1} w="full" bgColor="white" p={6}>
        <Formik
          initialValues={{ phone: '', address: '', houseNumber: '' }}
          validationSchema={addressScheme}
          validateOnMount
          onSubmit={() => {
            // console.log('values ', values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={3} align="flex-start">
                <FormControl>
                  <FormLabel>Phone No.</FormLabel>
                  <Field id="phone" name="phone" type="text" autoFocus>
                    {({ field }: any) => (
                      <Input
                        className={errors.phone && touched.phone ? 'input-error' : null}
                        size="lg"
                        {...field}
                        placeholder="Type your phone number"
                        type="number"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="phone" component="span" className="error-message" />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Field id="address" name="address" type="text" autoFocus>
                    {({ field }: any) => (
                      <Input
                        className={errors.address && touched.address ? 'input-error' : null}
                        size="lg"
                        {...field}
                        placeholder="Type your address"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="address" component="span" className="error-message" />
                </FormControl>
                <FormControl>
                  <FormLabel>House No.</FormLabel>
                  <Field id="houseNumber" name="houseNumber" type="text" autoFocus>
                    {({ field }: any) => (
                      <Input
                        className={errors.houseNumber && touched.houseNumber ? 'input-error' : null}
                        size="lg"
                        {...field}
                        placeholder="Type your house number"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="houseNumber" component="span" className="error-message" />
                </FormControl>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Select
                    useBasicStyles
                    name="city"
                    size="md"
                    variant="outline"
                    placeholder="Select your city"
                    focusBorderColor="primary"
                    options={map(cities, (city) => {
                      return { label: city.label, value: city.value };
                    })}
                    onChange={(val) => {
                      if (val) {
                        setCity(val.value);
                      }
                    }}
                  />
                </FormControl>
              </VStack>
              <Box mt={8} h="full" bg="white">
                <Button
                  type="submit"
                  w="full"
                  colorScheme="primary"
                  isDisabled={!!errors.phone || !!errors.address || city === ''}
                  mb={3}
                >
                  Sign Up Now
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default RegisterAddressPage;
