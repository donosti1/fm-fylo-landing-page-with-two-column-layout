import {extendTheme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "primary.400",
      },
    },
  },
  colors: {
    primary: {
      100: "#6b9bff",
      200: "hsl(224, 93%, 58%)",
      400: "hsl(243, 87%, 12%)",
      500: "hsl(170, 45%, 43%)",
    },
    secondary: {
      50: "#f8f8fe",
      100: "hsl(240, 75%, 98%)",
      500: "hsl(0, 0%, 75%)",
      700: "#5d5a6b",
      900: "hsl(238, 22%, 44%)",
    },
  },
  sizes: {
    container: {
      sm: "375px",
      md: "640px",
      xl: "1120px",
    },
  },
  fonts: {
    body: "Raleway",
    heading: "Open Sans",
  },
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            bg: "white",
            color: "black",
            borderRadius: "sm",
            borderColor: "secondary.700",
            borderWidth: 1,
            fontSize: ["xs", "inherit"],
            _focus: {
              bg: "white",
            },
            _hover: {
              bg: "white",
            },
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: "Raleway",
        height: 12,
      },
      variants: {
        "footer-link": {
          color: "white",
          fontWeight: 400,
          h: 8,
          px: 0,
          letterSpacing: "1.2px",
          _hover: {
            color: "secondary.900",
          },
        },
        "header-link": {
          color: "primary.400",
          fontFamily: "Raleway",
          fontSize: ["xs", "lg"],
          fontWeight: 400,
          paddingInlineStart: [0, "inherit"],
          paddingInlineEnd: [0, "inherit"],
          _hover: {
            textDecoration: "underline",
          },
        },
        solid: {
          bg: "primary.200",
          color: "white",
          fontFamily: "Raleway",
          fontSize: "sm",
          fontWeight: "700",
          px: 12,
          w: "fit-content",
          _hover: {
            bg: "primary.100",
            color: "white",
          },
        },
        outline: {
          borderColor: "primary.500",
          borderWidth: 2,
          borderRadius: 0,
          px: 8,
          _hover: {
            bg: "primary.500",
            color: "white",
          },
        },
      },
      sizes: {
        lg: {
          h: 14,
          minW: 12,
          fontSize: "lg",
          px: 10,
        },
      },
    },
  },
});
