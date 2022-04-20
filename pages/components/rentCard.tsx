import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBed, FaBath, FaBorderAll } from "react-icons/fa";

export default function RentCard() {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={"100%"}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200" borderRadius={"lg"}>
          <Image
            objectFit="cover"
            boxSize="100%"
            borderRadius={"lg"}
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          p={1}
          pl={10}
        >
          <Stack direction="row" alignItems="baseline">
            <Text fontSize="18" fontWeight="bold" textAlign={"match-parent"}>
              BDT
            </Text>
            <Text fontSize="40" fontWeight="bold">
              40000
            </Text>
          </Stack>
          <Text>Keraniganj, Dhaka</Text>
          <Badge>Apartment</Badge>
          <Heading
            fontSize={20}
            overflow={"hidden"}
            orientation={"horizontal"}
            display={"-webkit-flex"}
            noOfLines={1}
          >
            Visit This Brand New Apartment For Sale In Ati Bazar Near Marine
            Shishu Park
          </Heading>
          <HStack spacing={7} pt={3} alignItems={"baseline"}>
            <HStack>
              <FaBed size={20} />
              <Text>2</Text>
            </HStack>
            <HStack>
              <FaBath size={20} />
              <Text>2</Text>
            </HStack>
            <HStack>
              <FaBorderAll size={20} />
              <Text>1700 sqrt</Text>
            </HStack>
          </HStack>
          <Flex justifyContent={"flex-end"} flexDirection={"column"} flex={1}>
            <HStack py={4} justifyContent={"start"}>
              <Button
                as={"a"}
                w={100}
                fontSize={"sm"}
                fontWeight={400}
                color="white"
                variant={"solid"}
                bg="green.400"
                _hover={{
                  bg: "green.400",
                }}
                href={"/signUp"}
              >
                Call
              </Button>
              <Button
                as={"a"}
                w={100}
                fontSize={"sm"}
                fontWeight={400}
                color="white"
                variant={"solid"}
                bg="green.400"
                _hover={{
                  bg: "green.400",
                }}
                href={"/signUp"}
              >
                Email
              </Button>
            </HStack>
          </Flex>
        </Stack>
      </Stack>
    </Center>
  );
}
