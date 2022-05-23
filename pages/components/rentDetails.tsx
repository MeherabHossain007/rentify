import {
  Box,
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
  List,
  ListItem,
  Badge,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBath, FaBed, FaBorderAll } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { supabase } from "../../utils/supabaseClient";
import Navbar from "./navBar";
import ReviewSubmit from "./review";

export default function RentDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isBOpen,
    onOpen: onBOpen,
    onClose: onBClose,
  } = useDisclosure();
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
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  const [review, setReview] = useState([]);

  console.log(post_id);
  useEffect(() => {
    getPosts();
    getReviews();
  }, []);

  const getReviews = async () => {
    let { data: reviewlist, error } = await supabase
      .from("reviewlist")
      .select("*");
    if (error) throw error;

    if (reviewlist) {
      setReview(reviewlist);
    }
  };
  const getPosts = async () => {
    let {
      data: posts,
      error,
      status,
    } = await supabase
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
      setStatus(posts.status);
      setTime(posts.upload);
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
              <Text fontSize="18" p={1}>
                {address}
              </Text>
              <Badge p={1} fontSize="1em">
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
                <Text fontSize={"lg"}>{description}</Text>
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
                    <ListItem fontWeight="bold">{status}</ListItem>
                    <ListItem fontWeight="bold">Furnished</ListItem>
                    <ListItem fontWeight="bold">{time}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
            </Stack>
            <HStack
              flex={1}
              mx={1}
              as={"button"}
              onClick={() => {
                onBOpen();
              }}
            >
              <Box
                h={"160%"}
                w={"100%"}
                boxShadow={"lg"}
                rounded={"lg"}
                pt={7}
                flex={1}
                _hover={{
                  boxShadow: "2xl",
                }}
                flexDirection="column"
                alignContent={"center"}
              >
                <Text textAlign="center" fontWeight="bold">
                  Give Review
                </Text>
              </Box>
              <Modal isOpen={isBOpen} onClose={onBClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <ReviewSubmit post_id={post_id} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </HStack>
            <Flex justifyContent={"flex-end"} flexDirection={"column"} flex={1}>
              <VStack py={4} justifyContent={"start"}>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      w={"100%"}
                      fontSize={"sm"}
                      fontWeight={400}
                      color="white"
                      variant={"solid"}
                      bg="green.400"
                      _hover={{
                        bg: "green.300",
                      }}
                    >
                      Call
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Phone Number</PopoverHeader>
                    <PopoverBody>{phone}</PopoverBody>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      w={"100%"}
                      fontSize={"sm"}
                      fontWeight={400}
                      color="white"
                      variant={"solid"}
                      bg="green.400"
                      _hover={{
                        bg: "green.300",
                      }}
                    >
                      Email
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Email Address</PopoverHeader>
                    <PopoverBody>{email}</PopoverBody>
                  </PopoverContent>
                </Popover>
              </VStack>
            </Flex>
          </Stack>
        </SimpleGrid>
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={useColorModeValue("green.500", "green.300")}
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Reviews
        </Text>
        <SimpleGrid columns={2} spacing="40px" py={4}>
          {review.map((review) =>
            review.post_id == post_id ? (
              <Box
                boxShadow={"lg"}
                p={4}
                _hover={{
                  boxShadow: "2xl",
                }}
              >
                <FormControl>
                  <FormLabel color={"green.400"}>Name</FormLabel>
                  <Text>{review.name}</Text>
                </FormControl>
                <FormControl>
                  <FormLabel color={"green.400"}>Title</FormLabel>
                  <Text>{review.title}</Text>
                </FormControl>
                <FormControl>
                  <FormLabel color={"green.400"}>Description</FormLabel>
                  <Text>{review.review}</Text>
                </FormControl>
              </Box>
            ) : (
              ""
            )
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}
