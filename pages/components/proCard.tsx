import {
  Badge,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useBoolean,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBed, FaBath, FaBorderAll } from "react-icons/fa";
import React, { Component, Props, ReactDOM, useEffect, useState } from "react";
import router from "next/router";
import AlertMassage from "./alert";
import { supabase } from "../../utils/supabaseClient";
export default function ProRentCard({
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
  children,
  email,
}) {
  var isBooked: boolean;
  const [bookId, setId] = useState("");
  const [Uname, setName] = useState("");
  const [Uemail, setEmail] = useState("");
  const [Uphone, setPhone] = useState("");
  const [Ulocation, setLocation] = useState("");
  const [Uaddress, setAddress] = useState("");
  const [Uprice, setPrice] = useState("");
  const [Uarea, setArea] = useState("");
  const [Ubeds, setBeds] = useState("");
  const [Ubaths, setBaths] = useState("");
  const [Udescription, setDescription] = useState("");
  const [Utype, setType] = useState("");
  const [Ucstatus, setCstatus] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    bookInfo();
  }, []);

  const PostDelete = async (post_id: any) => {
    const { data, error } = await supabase
      .from("posts")
      .delete()
      .eq("post_id", post_id);
  };
  const PostUpdate = async (
    post_id: any,
    name: string,
    email: string,
    phone: string,
    location: string,
    address: string,
    price: any,
    area: any,
    beds: string,
    baths: string,
    description: string,
    type: string,
    status: string
  ) => {
    const { data, error } = await supabase
      .from("posts")
      .update([
        {
          name: name,
          email: email,
          price: price,
          area: area,
          beds: beds,
          baths: baths,
          description: description,
          location: location,
          address: address,
          number: phone,
          type: type,
          status: status,
        },
      ])
      .eq("post_id", post_id);
    if (error) throw error;
  };
  const bookInfo = async () => {
    let { data, error } = await supabase
      .from("booking_info")
      .select("*")
      .eq("book_id", post_id)
      .single();
    if (error) throw error;
    if (data) {
      console.log(post_id);
      setId(data.book_id);
      isBooked = true;
    } else {
      isBooked = false;
    }
  };
  return (
    <Center>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={"70%"}
        height={"100%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        padding={4}
      >
        <Center
          py={6}
          as={"button"}
          onClick={() => {
            router.push({
              pathname: "/components/ProCardDetails",
              query: post_id,
            });
          }}
        >
          <Stack
            borderWidth="1px"
            borderRadius="lg"
            w={"100%"}
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
                <Text
                  fontSize="18"
                  fontWeight="bold"
                  textAlign={"match-parent"}
                >
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
              <Flex
                justifyContent={"flex-end"}
                flexDirection={"column"}
                flex={1}
              >
                <HStack py={4} justifyContent={"start"}>
                  {children}
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
        <Center>
          <Stack direction={"row"} flex={1}>
            <Button
              w={"100%"}
              fontSize={"sm"}
              fontWeight={400}
              color="white"
              variant={"solid"}
              bg="gray.200"
              textColor={"black"}
              style={{
                fontWeight: "bold",
              }}
              _hover={{
                bg: "green.400",
                textColor: "white",
              }}
              onClick={onOpen}
            >
              Update
            </Button>
            <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submit Request</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired as="button" borderColor={"white"}>
              <FormLabel>Choose Photo</FormLabel>
              <Input
                type={"file"}
                id={"flies"}
                name={"flies"}
                accept="image/png, image/jpeg"
                multiple
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Title</FormLabel>
              <Input
                id="name"
                placeholder=""
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="number">Contact Number</FormLabel>
              <Input
                id="number"
                placeholder="017XXXXXXX"
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email (please enter default mail)</FormLabel>
              <Input
                id="email"
                placeholder="m*****@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input
                id="address"
                placeholder="14/C Street"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Select
                  id="location"
                  placeholder="Select location"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>Badda</option>
                  <option>Gulshan</option>
                  <option>Banani</option>
                  <option>Rampura</option>
                  <option>Baridhara</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="type">Type</FormLabel>
                <Select
                  id="type"
                  placeholder="Select type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Hostel</option>
                  <option>Apartment</option>
                  <option>Roommate</option>
                  <option>Sublet</option>
                </Select>
              </FormControl>
            </HStack>

            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="beds">Beds</FormLabel>
                <Input
                  id="beds"
                  placeholder="3"
                  onChange={(e) => setBeds(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="baths">Baths</FormLabel>
                <Input
                  id="baths"
                  placeholder="2"
                  onChange={(e) => setBaths(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="completion">Completion</FormLabel>
                <Select
                  id="completion"
                  placeholder="Select status"
                  onChange={(e) => setCstatus(e.target.value)}
                >
                  <option>Ready</option>
                  <option>Not Ready</option>
                </Select>
              </FormControl>
            </HStack>
            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="area">Area(Sqft)</FormLabel>
                <Input
                  id="area"
                  placeholder="1234"
                  onChange={(e) => setArea(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="price">Price</FormLabel>
                <Input
                  id="price"
                  placeholder="1000"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
            </HStack>
            <Text mb="8px">Descrption</Text>
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                PostUpdate(
                    post_id,
                    Uname,
                    Uemail,
                    Uphone,
                    Ulocation,
                    Uaddress,
                    Uprice,
                    Uarea,
                    Ubeds,
                    Ubaths,
                    Udescription,
                    Utype,
                    Ucstatus
                );

              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            <Button
              w={"100%"}
              fontSize={"sm"}
              fontWeight={400}
              color="white"
              variant={"solid"}
              bg="gray.200"
              textColor={"black"}
              style={{
                fontWeight: "bold",
              }}
              _hover={{
                bg: "red.400",
                textColor: "white",
              }}
              onClick={() => {
                PostDelete(post_id);
                window.location.reload();
              }}
            >
              Delete
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Center>
  );
}
