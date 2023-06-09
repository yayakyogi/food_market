import { Box, Button, Flex, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import Header from '@components/ui/header/header.component';
import { ErrorMessage, Field, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'minimum 8 character password'),
  });

  return (
    <Flex direction="column" w="full" h="full">
      <Header title="Sign In" subtitle="Find your best ever meal" />
      <Box flex={1} w="full" bgColor="white" p={6}>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={loginSchema}
          validateOnMount
          onSubmit={() => {
            // console.log('values ', values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={3} align="flex-start">
                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Field id="username" name="username" type="text" autoFocus>
                    {({ field }: any) => (
                      <Input
                        className={errors.username && touched.username ? 'input-error' : null}
                        size="lg"
                        {...field}
                        type="email"
                        placeholder="Type your email address"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="username" component="span" className="error-message" />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Field id="password" name="password" type="text" autoFocus>
                    {({ field }: any) => (
                      <Input
                        className={errors.password && touched.password ? 'input-error' : null}
                        size="lg"
                        {...field}
                        type="password"
                        placeholder="Type your password"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="password" component="span" className="error-message" />
                </FormControl>
              </VStack>
              <Box mt={8} h="full" bg="white">
                <Button
                  type="submit"
                  w="full"
                  colorScheme="primary"
                  isDisabled={!!errors.username || !!errors.password}
                  mb={3}
                >
                  Sign In
                </Button>
                <Button w="full" colorScheme="secondary" onClick={() => navigate('/register')}>
                  Create New Account
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default LoginPage;
