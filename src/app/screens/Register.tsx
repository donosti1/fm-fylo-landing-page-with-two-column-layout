import React, {FunctionComponent, useState} from "react";
import {Button, Container, FormControl, Input, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

import "./components/floatLabel.css";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [isActive, setIsActive] = useState(false);

  function validateEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = event.currentTarget.email.value;

    if (value == "") {
      setErrorMsg("Email is required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      setErrorMsg("Please enter a valid email address");
    } else {
      setErrorMsg("");
    }
  }
  function handleTextChange(text: string) {
    if (text !== "") {
      setIsActive(true);
      setErrorMsg("");
    } else {
      setIsActive(false);
    }
  }

  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="secondary.900"
      color="white"
      paddingBottom={[16, 16]}
      paddingTop={[16, 24]}
      role="contentinfo"
    >
      <Container maxWidth="container.xl">
        <motion.div
          initial="hidden"
          transition={{duration: 1}}
          variants={{
            visible: {x: 0},
            hidden: {x: "-100%"},
          }}
          viewport={{once: true}}
          whileInView="visible"
        >
          <SimpleGrid columns={[1, 2]} spacing={[8, 28]}>
            <Stack>
              <Text fontSize={["md", "3xl"]} fontWeight="700" paddingBottom={2}>
                Get early access today
              </Text>
              <Text fontSize={["sm", "md"]} paddingBottom={4}>
                It only takes a minute to sign up and our free starter tier is extremely generous.
                If you have any questions, our support team would be happy to help you.
              </Text>
            </Stack>

            <form onSubmit={validateEmail}>
              <Stack alignItems={["center", "flex-start"]} width="100%">
                <Stack spacing={[4, 2]} width={["80%", "100%"]}>
                  <FormControl className="floatLabel" display="flex" isInvalid={errorMsg != ""}>
                    <Input
                      h={12}
                      name="email"
                      variant="filled"
                      onChange={(e) => handleTextChange(e.target.value)}
                    />
                    <label className={isActive ? "Active" : ""}>email@example.com</label>

                    {errorMsg}
                  </FormControl>

                  <Button type="submit" variant="solid" width="auto">
                    Get Started For Free
                  </Button>
                </Stack>
              </Stack>
            </form>
          </SimpleGrid>
        </motion.div>
      </Container>
    </Stack>
  );
};

export default Register;
