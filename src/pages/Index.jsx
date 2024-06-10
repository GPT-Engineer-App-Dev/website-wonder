import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>John Doe</Heading>
          <Text fontSize="lg" color="gray.600">Full Stack Developer</Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize="md" color="gray.500" maxW="600px">
            Passionate about building scalable web applications and always eager to learn new technologies. Let's connect and create something amazing together!
          </Text>
        </Box>
        <Flex justify="center" spacing={4}>
          <Button as="a" href="https://github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline" mx={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline" mx={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:email@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline" mx={2}>
            Email
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;