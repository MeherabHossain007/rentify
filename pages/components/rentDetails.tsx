import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  FaBath,
  FaBed,
  FaBorderAll,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { supabase } from "../../utils/supabaseClient";
import Navbar from "./navBar";

export default function RentDetails() {
  const router = useRouter();
  const id = router.query;
  const querystring = require("querystring");
  const post_id = querystring.stringify(id).replace(/=$|=(?=&)/g, "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  console.log(post_id);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    let { data: posts, error, status } = await supabase
      .from("posts")
      .select("*")
      .eq("post_id", post_id)
      .single();

    if (error) throw error;

    if (posts) {
      setName(posts.name);
      setEmail(posts.email);
      setPhone(posts.number);
      setAddress(posts.address);
      setPrice(posts.price);
      setLocation(posts.location);
      setArea(posts.area);
      setBeds(posts.beds);
      setBaths(posts.baths);
      setDescription(posts.description);
      setType(posts.type);
    }
  };
  return (
    <>
      <Navbar />
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={
                "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/living-room-interior-wall-mockup-warm-tones-with-leather-sofa-which-is-kitchen-3d-rendering.jpg?alt=media&token=27a58497-ecd7-4179-aa00-baa153b85b41"
              }
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Stack direction="row" alignItems="baseline">
                <Text
                  fontSize="20"
                  fontWeight="bold"
                  textAlign={"match-parent"}
                >
                  BDT
                </Text>
                <Text fontSize="45" fontWeight="bold">
                  {price}
                </Text>
              </Stack>
              <Text fontSize="18">Bsansree, Dhaka</Text>
              <Badge pt={1} fontSize="1em">
                {type}
              </Badge>
              <Heading
                fontSize={20}
                overflow={"hidden"}
                orientation={"horizontal"}
              >
                {name}
              </Heading>
              <HStack spacing={7} pt={3} alignItems={"baseline"}>
                <HStack>
                  <FaBed size={20} />
                  <Text>{beds}</Text>
                </HStack>
                <HStack>
                  <FaBath size={20} />
                  <Text>{baths}</Text>
                </HStack>
                <HStack>
                  <FaBorderAll size={20} />
                  <Text>{area}</Text>
                </HStack>
              </HStack>
            </Box>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack
                spacing={{ base: 4, sm: 6 }}
                justifyContent={"flex-start"}
              >
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  Description
                </Text>
                <Text fontSize={"lg"}>
                  {description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("green.500", "green.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Property Information
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Type</ListItem>
                    <ListItem>Completion</ListItem>{" "}
                    <ListItem>Furnishing</ListItem>
                    <ListItem>Last Updated</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem fontWeight="bold">{type}</ListItem>
                    <ListItem fontWeight="bold">Ready</ListItem>
                    <ListItem fontWeight="bold">Furnished</ListItem>
                    <ListItem fontWeight="bold">19 April 2022</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("green.500", "green.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features / Amenities
                </Text>
              </Box>
            </Stack>

            <Flex justifyContent={"flex-end"} flexDirection={"column"} flex={1}>
              <VStack py={4} justifyContent={"start"}>
                <Button
                  as={"a"}
                  w={"100%"}
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
                  w={"100%"}
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
              </VStack>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
