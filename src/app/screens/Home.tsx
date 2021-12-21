import React from "react";
import {Stack, Text} from "@chakra-ui/react";

const HomeScreen: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="secondary.400"
      backgroundImage={[
        "url('/assets/bg-curve-mobile.svg')",
        "url('/assets/bg-curve-desktop.svg')",
      ]}
      backgroundPosition={["center bottom", "center bottom"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["contain", "contain"]}
      minHeight="100vh"
      paddingBottom={[0, 32]}
      paddingTop={[0, 16]}
      spacing={0}
      width="100%"
    >
      {/* <Header /> */}
    </Stack>
  );
};

export default HomeScreen;
