import React, {FunctionComponent} from "react";
import {Button, FormControl, FormErrorMessage, Input, Stack, Text} from "@chakra-ui/react";

interface RegisterProps {}

function validateEmail(value: string) {
  let error;

  if (!value) {
    error = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Please enter a valid email address";
  }

  return error;
}

const Register: FunctionComponent<RegisterProps> = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="secondary.400"
      borderRadius="lg"
      boxShadow=" rgba(0, 0, 0, 0.6) 4px 4px 6px"
      className="Register"
      height={[80, 80]}
      justifyContent="center"
      paddingX={[4, 16]}
      paddingY={[6, 8]}
      position="relative"
      spacing={[2, 8]}
      top={[32, 40]}
      width={["90%", "4xl"]}
    >
      <Text fontSize={["md", "3xl"]} fontWeight="700" paddingBottom={2}>
        Get early access today
      </Text>
      <Text fontSize={["xs", "md"]} paddingBottom={4} textAlign="center">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </Text>

      <Stack direction={["column", "row"]} spacing={[4, 2]}>
        <FormControl>
          <Input id="email" placeholder="email@example.com" variant="filled" />
          <FormErrorMessage fontSize="xs" marginStart={8}>
            {/* form.errors.email */}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" variant="solid">
          Get Started For Free
        </Button>
      </Stack>
    </Stack>
  );
};

export default Register;
