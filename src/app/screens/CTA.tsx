import React, {FunctionComponent, useState} from "react";
import {Button, Container, FormControl, Input, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";

import "./components/floatLabel.css";
import IconArrow from "./components/IconArrow";

interface RegisterProps {}

const CTA: FunctionComponent<RegisterProps> = () => {
  const [hover, setHover] = useState(false);

  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="secondary.100"
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
          <SimpleGrid columns={[1, 2]} spacing={[8, 32]}>
            <Stack>
              <Button
                _hover={{
                  backgroundColor: "transparent",
                }}
                alignSelf="flex-start"
                backgroundColor="transparent"
                borderBottom="solid"
                borderBottomColor="primary.500"
                borderBottomWidth={1}
                borderRadius={0}
                color="primary.500"
                fontSize={["sm", "xl"]}
                px={0}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                See how Fylo works
                <Stack
                  as="span"
                  display="inline-block"
                  height={6}
                  justifyContent="center"
                  paddingLeft={4}
                >
                  <IconArrow
                    fill={
                      hover
                        ? "var(--chakra-colors-primary-500)"
                        : "var(--chakra-colors-primary-500)"
                    }
                  />
                </Stack>
              </Button>
            </Stack>

            <Stack />
          </SimpleGrid>
        </motion.div>
      </Container>
    </Stack>
  );
};

export default CTA;
