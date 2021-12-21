import React, {FunctionComponent, useState} from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {motion} from "framer-motion";

import "./components/floatLabel.css";
import IconArrow from "./components/IconArrow";

interface RegisterProps {}
const Testimonial = () => {
  return (
    <Stack
      backgroundColor="white"
      borderColor="rgba(0, 0, 0, 0.2)"
      borderRadius="lg"
      borderWidth={1}
      boxShadow="rgba(0, 0, 0, 0.1) 2px 2px 4px, rgba(0, 0, 0, 0.1) -2px -2px 4px, rgba(0, 0, 0, 0.1) 2px -2px 4px, rgba(0, 0, 0, 0.1) -2px 2px 4px"
      paddingX={[4, 8]}
      paddingY={[6, 6]}
      spacing={[4, 4]}
      width={["90%", 96]}
    >
      <Image alt="icon-quotes" src="/assets/icon-quotes.svg" w={5} />
      <Text fontSize={["md", "md"]} lineHeight={["1.8", "inherit"]}>
        Fylo has improved our team productivity by an order of magnitude. Since making the switch
        our team has become a well-oiled collaboration machine.
      </Text>
      <Stack direction="row" spacing={4}>
        <Avatar name="Kyle Burton" size="md" src="/assets/avatar-testimonial.jpg" />
        <Stack justifyContent="space-around" spacing={0}>
          <Text fontSize={["sm", "inherit"]} fontWeight="700">
            Kyle Burton
          </Text>
          <Text fontSize={["sm", "sm"]}>Founder & CEO, Huddle</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
const CTA: FunctionComponent<RegisterProps> = () => {
  const [hover, setHover] = useState(false);

  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="secondary.50"
      backgroundImage="url('/assets/illustration-2.svg')"
      backgroundPosition={["center top", "90% center"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["80%", "40%"]}
      color="primary.400"
      overflowX="hidden"
      paddingBottom={[16, 16]}
      paddingTop={[72, 24]}
      role="contentinfo"
    >
      <Container maxWidth="container.xl">
        <motion.div
          initial="hidden"
          transition={{duration: 1}}
          variants={{
            visible: {x: 0},
            hidden: {x: ["100%", "130%"]},
          }}
          viewport={{once: true}}
          whileInView="visible"
        >
          <Grid gap={8} templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)"]}>
            <GridItem colSpan={3}>
              <Stack alignItems={["center", "flex-start"]} spacing={12}>
                <Heading as="h2" fontSize={["xl", "4xl"]}>
                  Stay productive, wherever you are
                </Heading>
                <Stack color="secondary.700" fontSize={["sm", "md"]} paddingRight={[0, 32]}>
                  <Text>
                    Never let location be an issue when accessing your files. Fylo has you covered
                    for all of your file storage needs.
                  </Text>
                  <Text>
                    Securely share files and folders with friends, family and colleagues for live
                    collaboration. No email attachments required!
                  </Text>
                </Stack>
                <Button
                  _hover={{
                    backgroundColor: "transparent",
                  }}
                  backgroundColor="transparent"
                  borderBottom="solid"
                  borderBottomColor="primary.500"
                  borderBottomWidth={1}
                  borderRadius={0}
                  color="primary.500"
                  fontSize={["md", "xl"]}
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
                <Testimonial />
              </Stack>
            </GridItem>
          </Grid>
        </motion.div>
      </Container>
    </Stack>
  );
};

export default CTA;
