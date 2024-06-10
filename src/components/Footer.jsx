import { Box, Container, Stack, Text, Link, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      py={4}
      mt={8}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© {new Date().getFullYear()} John Doe. All rights reserved.</Text>
        <Stack direction={"row"} spacing={6}>
          <Link href="https://github.com" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              variant="ghost"
              colorScheme="teal"
            />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              variant="ghost"
              colorScheme="teal"
            />
          </Link>
          <Link href="mailto:email@example.com">
            <IconButton
              aria-label="Email"
              icon={<FaEnvelope />}
              size="lg"
              variant="ghost"
              colorScheme="teal"
            />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;