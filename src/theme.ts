import {extendTheme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "primary.500",
      },
    },
  },
  colors: {
    primary: {
      200: "hsl(224, 93%, 58%)",
      400: "hsl(243, 87%, 12%)",
      500: "hsl(170, 45%, 43%)",
    },
    secondary: {
      100: "hsl(240, 75%, 98%)",
      500: "hsl(0, 0%, 75%)",
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
            borderRadius: "full",
            fontSize: ["xs", "inherit"],
            _focus: {
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
        "outline-darkBg": {
          color: "white",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 0,
          px: 6,
          /* h: 8,
          letterSpacing: "1.2px", */
          _hover: {
            color: "primary.500",
            bg: "white",
          },
        },
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
          bg: "transparent",
          color: "secondary.500",
          fontFamily: "Raleway",
          fontSize: ["sm", "lg"],
          paddingInlineStart: [0, "inherit"],
          paddingInlineEnd: [0, "inherit"],
          _hover: {
            bg: "white",
            color: "primary.500",
          },
        },
        solid: {
          bg: "primary.400",
          color: "white",
          fontFamily: "Raleway",
          fontSize: "sm",
          fontWeight: "700",
          w: "auto",
          px: [12],
          _hover: {
            bg: "primary.300",
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
