import React from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack
      minH={"40vh"}
      direction={{ base: "column", md: "row" }}
      justifyContent={"center"}
      pl={200}
      mb={50}
    >
      <Flex flex={1} align={"center"} justify={"space-between"}>
        <Stack spacing={6} w={"full"} maxW={"xl"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "green.400",
                zIndex: -1,
              }}
            >
              Rentify
            </Text>
            <br />{" "}
            <Text color={"green.400"} as={"span"}>
              Rent Service for all catogory.
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for home rent service.
            It's perfect for all types of people.
          </Text>
          <Stack direction={"row"} spacing={4}>
            <Button
              as={"a"}
              href={"/signUp"}
              rounded={"full"}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.500",
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex>
        <Image
          alt={"Login Image"}
          boxSize={"600px"}
          objectFit={"contain"}
          src={
            "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/House%20searching-bro.png?alt=media&token=32527ca7-4958-420a-9d20-d29599db0326"
          }
        />
      </Flex>
    </Stack>
  );
}
