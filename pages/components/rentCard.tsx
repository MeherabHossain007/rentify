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
  useBoolean,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBed, FaBath, FaBorderAll } from "react-icons/fa";
import React, { Component, Props, ReactDOM, useEffect, useState } from "react";
import router from "next/router";
import AlertMassage from "./alert";
import { supabase } from "../../utils/supabaseClient";
export default function RentCard({
  amount,
  location,
  type,
  title,
  bed,
  bath,
  area,
  image,
  post_id,
  phone,
}) {
  var isBooked: boolean;
  const [bookId, setId] = useState("");

  useEffect(() => {
    bookInfo();
  }, []);

  const bookInfo = async () => {
    let { data, error } = await supabase
      .from("booking_info")
      .select("*")
      .eq("book_id", post_id)
      .single();
    if (error) throw error;
    if (data) {
      console.log(data);
      setId(data.book_id);
      isBooked = true;
    } else {
      isBooked = false;
    }
  };
  return (
    <div>
      <Center
        py={6}
        as={"button"}
        onClick={() => {
          router.push({
            pathname: "/components/rentDetails",
            query: post_id,
          });
        }}
      >
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={"70%"}
          height={"45vh"}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"lg"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200" borderRadius={"lg"}>
            <Image
              objectFit="cover"
              boxSize="100%"
              borderRadius={"lg"}
              src={image}
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
                {amount}
              </Text>
            </Stack>
            <Text>{location}</Text>
            <Badge>{type}</Badge>
            <Heading
              fontSize={20}
              overflow={"hidden"}
              orientation={"horizontal"}
              noOfLines={1}
            >
              {title}
            </Heading>
            <HStack spacing={7} pt={3} alignItems={"baseline"}>
              <HStack>
                <FaBed size={20} />
                <Text>{bed}</Text>
              </HStack>
              <HStack>
                <FaBath size={20} />
                <Text>{bath}</Text>
              </HStack>
              <HStack>
                <FaBorderAll size={20} />
                <Text>{area}</Text>
              </HStack>
            </HStack>
            <Flex justifyContent={"flex-end"} flexDirection={"column"} flex={1}>
              <HStack py={4} justifyContent={"start"}>
                <AlertMassage
                  bname={"Call"}
                  text={phone}
                  header={"Phone Number"}
                />
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
          {bookId === post_id ? (
            <Badge colorScheme="green" h={5}>
              Booked
            </Badge>
          ) : (
            ""
          )}
        </Stack>
      </Center>
    </div>
  );
}
