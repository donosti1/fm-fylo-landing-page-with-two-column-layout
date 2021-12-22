import React, {useState} from "react";
import {Button, Container, Heading, Stack, Text} from "@chakra-ui/react";

import Logo from "./components/Logo";
import CTA from "./CTA";
import CustomInput from "./components/CustomInput";
const navItems = ["Features", "Team", "Sign In"];
const navBar = navItems.map((ni) => (
  <Button key={ni} variant="header-link">
    {ni}
  </Button>
));
const HomeScreen: React.FC = () => {
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
  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {
      setIsActive(true);
      setErrorMsg("");
    } else {
      setIsActive(false);
    }
  };

  return (
    <Stack
      alignItems="center"
      backgroundColor="secondary.400"
      backgroundImage={[
        "url('/assets/bg-curve-mobile.svg'), url('/assets/illustration-1.svg')",
        "url('/assets/bg-curve-desktop.svg'), url('/assets/illustration-1.svg')",
      ]}
      backgroundPosition={["center bottom, center 20%", "center bottom, 90% center"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["contain, 90%", "contain, 45%"]}
      height={["145vh", "120vh"]}
      minHeight="100vh"
      paddingTop={[4, 16]}
      spacing={0}
    >
      <Container maxWidth="container.xl">
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <Stack width={["16", "auto"]}>
            <Logo isoColor="var(--chakra-colors-secondary-900)" logoColor="black" />
          </Stack>
          <Stack direction="row" spacing={[2, 8]}>
            {navBar}
          </Stack>
        </Stack>
        <Stack
          alignItems={["center", "flex-start"]}
          paddingBottom={[64, 32]}
          spacing={[8, 4]}
          textAlign={["center", "left"]}
          width={["100%", "50%"]}
        >
          <Heading
            as="h1"
            fontSize={["xl", "4xl"]}
            letterSpacing={["1px", "inherit"]}
            lineHeight={["1.6", "1.6"]}
            paddingTop={[72, 32]}
          >
            All your files in one secure location, accessible anywhere.
          </Heading>
          <Stack fontSize={["sm", "lg"]}>
            <Text letterSpacing={["-.3px", "-.5px"]}>
              Fylo stores your most important files in one secure location. Access them wherever you
              need, share and collaborate with friends, family, and co-workers.
            </Text>
          </Stack>
          <form style={{width: "100%"}} onSubmit={validateEmail}>
            <Stack alignItems={["center", "flex-start"]} width="100%">
              <Stack direction={["column", "row"]} spacing={[4, 2]} width={["100%", "100%"]}>
                <CustomInput
                  errorMsg={errorMsg}
                  handleTextChange={(e) => handleTextChange(e)}
                  isActive={isActive}
                  position="top"
                />

                <Button h={12} type="submit" variant="solid" w={["100%", "auto"]}>
                  Get Started
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Container>
      {/* <Header /> */}
    </Stack>
  );
};

export default HomeScreen;
