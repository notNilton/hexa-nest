import React from "react";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";

const ProfileComp = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
    >
      <Box
        p={8}
        maxWidth="600px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={4}>User Profile</Heading>
        <Box mb={4}>
          <Text fontSize="lg">Name: John Doe</Text>
          <Text fontSize="lg">Email: john.doe@example.com</Text>
          <Text fontSize="lg">Role: Admin</Text>
        </Box>
        <Button
          colorScheme="blue"
          size="md"
          onClick={() => console.log("Edit profile clicked")}
        >
          Edit Profile
        </Button>
      </Box>
    </Flex>
  );
};

export default ProfileComp;
