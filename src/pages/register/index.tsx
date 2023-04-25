import React from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import Header from '@components/ui/header/header.component';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import UploadPhoto from '@components/ui/upload-photo/upload-photo.component';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const registerSchema = Yup.object().shape({
    photo: Yup.string(),
    fullname: Yup.string().required('Name is required'),
    username: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'minimum 8 character password'),
  });

  return (
    <Flex direction="column" w="full" h="full">
      <Header title="Sign Up" subtitle="Register and eat" backUrl="/" forceBack />
      <Box flex={1} w="full" bgColor="white" p={6}>
        <Formik
          initialValues={{ photo: undefined, fullname: '', username: '', password: '' }}
          validationSchema={registerSchema}
          validateOnMount
          onSubmit={() => {
            navigate('/register/address');
          }}
        >
          {({ handleSubmit, errors, touched, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <VStack alignItems="center" mb={8}>
                <UploadPhoto
                  onChange={(value) => {
                    setFieldValue('photo', value);
                  }}
                />
              </VStack>
              <VStack spacing={3} align="flex-start">
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Field id="fullname" name="fullname" type="text" autoFocus>
                    {({ field }: any) => (
                      <Input
                        className={errors.fullname && touched.fullname ? 'input-error' : null}
                        size="lg"
                        {...field}
                        placeholder="Type your full name"
                      />
                    )}
                  </Field>
                  <ErrorMessage name="fullname" component="span" className="error-message" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email Address</FormLabel>
                  <Field id="username" name="username" type="text" autoFocus>
                    {({ field }: any) => (
                      <Input
                        className={errors.username && touched.username ? 'input-error' : null}
                        size="lg"
                        {...field}
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
                        placeholder="Type your password"
                        type="password"
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
                  isDisabled={!!errors.username || !!errors.password || !!errors.fullname}
                  mb={3}
                >
                  Continue
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default RegisterPage;
