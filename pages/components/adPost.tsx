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
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  HStack,
  Text,
  Textarea,
} from "@chakra-ui/react";

function AdPost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <Button onClick={onOpen}>Post Ad</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
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
              <FormLabel htmlFor="first-name">Name</FormLabel>
              <Input id="first-name" placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name">Contact Number</FormLabel>
              <Input id="first-name" placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name">Email</FormLabel>
              <Input id="first-name" placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name">Address</FormLabel>
              <Input id="first-name" placeholder="First name" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="country">Location</FormLabel>
              <Select id="country" placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
            <HStack>
              <FormControl>
                <FormLabel htmlFor="amount">No. of Beds</FormLabel>
                <NumberInput max={50} min={1}>
                  <NumberInputField id="amount" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="amount">No. of Bathes</FormLabel>
                <NumberInput max={50} min={1}>
                  <NumberInputField id="amount" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel htmlFor="first-name">Area(Sqft)</FormLabel>
              <Input id="first-name" placeholder="First name" />
            </FormControl>
            <Text mb="8px">Descrption</Text>
            <Textarea
              value={""}
              onChange={() => {}}
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdPost;
