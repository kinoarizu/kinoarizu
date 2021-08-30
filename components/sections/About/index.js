import { Box, Center, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box px={[8, 10, 20, 24]} py={[8, 10]}>
      <Center minHeight={320}>
        <Text
          fontSize={["3xl", "4xl"]}
          fontWeight="extrabold"
          letterSpacing="widest"
        >
          About
        </Text>
      </Center>
    </Box>
  );
}
