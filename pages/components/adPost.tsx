import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  HStack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { supabase } from "../../utils/supabaseClient";

function AdPost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const handeleSubmit = async (
    name: string,
    email: string,
    phone: string,
    location: string,
    address: string,
    price: string,
    area: string,
    beds: string,
    baths: string,
    description: string,
    type: string
  ) => {
    const { data, error } = await supabase.from("posts").insert([
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
      },
    ]);
    if (error) throw error;
  };

  return (
    <>
      <Button
        variant={"solid"}
        colorScheme={"teal"}
        size={"sm"}
        mr={4}
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Add post
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
              <FormLabel htmlFor="email">Email</FormLabel>
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
                  onChange={(e) => setType(e.target.value)}
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
                handeleSubmit(
                  name,
                  email,
                  phone,
                  location,
                  address,
                  price,
                  area,
                  beds,
                  baths,
                  description,
                  type
                );
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdPost;
