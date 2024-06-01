import { Container, Box, VStack, HStack, Text, Heading, Button, Link, IconButton, Image, Flex, Spacer } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" py={4} px={8} bg="gray.800" color="white">
        <Heading size="lg">GPT Engineer</Heading>
        <Spacer />
        <HStack spacing={4}>
          <IconButton as={Link} href="https://github.com/your-repo" aria-label="GitHub" icon={<FaGithub />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
          <IconButton as={Link} href="https://twitter.com/your-profile" aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
          <IconButton as={Link} href="https://linkedin.com/in/your-profile" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" variant="ghost" colorScheme="whiteAlpha" />
        </HStack>
      </Flex>

      {/* Hero Section */}
      <VStack spacing={8} py={16} textAlign="center" bg="gray.100" px={8}>
        <Heading size="2xl" color="teal.500">
          Build with AI
        </Heading>
        <Text fontSize="xl" color="gray.700">
          GPT Engineer helps you build software faster and more efficiently using AI.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>

      {/* Features Section */}
      <VStack spacing={8} py={16} bg="white" px={8}>
        <Heading size="xl" color="teal.500">
          Features
        </Heading>
        <HStack spacing={8} wrap="wrap" justifyContent="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="gray.50">
            <Image src="https://images.unsplash.com/photo-1699910618950-ed0b871c7fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMXxlbnwwfHx8fDE3MTcyMTE4Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 1" />
            <Heading size="md" mt={4} color="gray.700">
              Feature 1
            </Heading>
            <Text mt={2} color="gray.500">
              Description of feature 1.
            </Text>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="gray.50">
            <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMnxlbnwwfHx8fDE3MTcyMTE4Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 2" />
            <Heading size="md" mt={4} color="gray.700">
              Feature 2
            </Heading>
            <Text mt={2} color="gray.500">
              Description of feature 2.
            </Text>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="gray.50">
            <Image src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwM3xlbnwwfHx8fDE3MTcyMTE4Njl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 3" />
            <Heading size="md" mt={4} color="gray.700">
              Feature 3
            </Heading>
            <Text mt={2} color="gray.500">
              Description of feature 3.
            </Text>
          </Box>
        </HStack>
      </VStack>

      {/* Footer */}
      <Box as="footer" py={8} textAlign="center" bg="gray.800" color="white">
        <Text>&copy; {new Date().getFullYear()} GPT Engineer. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
