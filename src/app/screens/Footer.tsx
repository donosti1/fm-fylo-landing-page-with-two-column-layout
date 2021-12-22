import React from "react";
import {Button, Container, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

import Logo from "./components/Logo";

const productMenuItems = ["About Us", "Jobs", "Press", "Blog"];
const companyMenuItems = ["Contact Us", "Terms", "Privacy"];

const CustomMenuItem = (props: any) => {
  const productMenuList = props.menuItems.map((mi: string) => (
    <Button key={mi} fontSize="sm" variant="footer-link">
      {mi}
    </Button>
  ));

  return (
    <Stack alignItems={["flex-start", "flex-start"]} spacing={[0, 4]} width={["inherit", 24]}>
      <Stack alignItems={["flex-start", "flex-start"]} spacing={2}>
        {productMenuList}
      </Stack>
    </Stack>
  );
};
const SocialNetworks = () => {
  const item = [
    {id: 0, icon: FaFacebookF},
    {id: 1, icon: FaTwitter},
    {id: 2, icon: FaInstagram},
  ];
  const icons = item.map((it) => (
    <Icon
      key={it.id}
      _hover={{
        color: "secondary.900",
        cursor: "pointer",
        borderColor: "secondary.900",
      }}
      as={it.icon}
      borderRadius="50%"
      borderWidth={1}
      color="white"
      height={8}
      padding={2}
      width={8}
    />
  ));

  return <>{icons}</>;
};

const Footer = () => {
  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="primary.400"
      paddingBottom={[16, 16]}
      paddingTop={[16, 24]}
      role="contentinfo"
    >
      <Container maxWidth="container.xl">
        <motion.div
          initial="hidden"
          transition={{duration: 0.3}}
          variants={{
            visible: {opacity: 1, scale: 1},
            hidden: {opacity: 0, scale: 0},
          }}
          viewport={{once: true}}
          whileInView="visible"
        >
          <Stack alignItems="flex-start" spacing={8}>
            <Logo isoColor="white" logoColor="white" />
            <Stack
              direction={["column", "row"]}
              justifyContent="space-between"
              spacing={[12, 2]}
              width="100%"
            >
              <Stack color="white">
                <Stack direction="row" spacing={6}>
                  <Image alt="phone" height={5} src="/assets/icon-phone.svg" width={5} />
                  <Text>Phone: +1-543-123-4567</Text>
                </Stack>
                <Stack direction="row" spacing={6}>
                  <Image alt="location" height={5} src="/assets/icon-email.svg" width={5} />
                  <Text>example@fylo.com</Text>
                </Stack>
              </Stack>
              <CustomMenuItem menuItems={productMenuItems} />
              <CustomMenuItem menuItems={companyMenuItems} />
              <Stack direction="row" justifyContent={["center", "inherit"]}>
                <SocialNetworks />
              </Stack>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Stack>
  );
};

export default Footer;
