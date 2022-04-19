import { SearchIcon } from "@chakra-ui/icons";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  HStack,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Select,
  Spacer,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { FC, Props } from "react";

const Card = ({ children , style }: any) => {
  return (
    <Box
      bgColor={"white"}
      borderRadius={10}
      justifyContent={"center"}
      alignItems={"center"}
      h={100}
      p={4}
      {...style}
    >
      {children}
    </Box>
  );
};


export default function Search() {
  return (
    <Flex
      w={"full"}
      h={"50vh"}
      borderRadius={30}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        borderRadius={30}
      >
        <Box
          bgColor={"blackAlpha.700"}
          opacity={50}
          boxSize={"400px"}
          w={"100%"}
          borderRadius={10}
          display={"flex"}
          flexDirection="column"
          justifyContent={"flex-start"}
          p={5}
        >
          <HStack
            display={"flex"}
            flexDirection="row"
            justifyContent={"flex-start"}
          >
            <Card w={"full"}>
              <Stack direction={"column"} spacing={2} alignSelf={"stretch"}>
                <Text>Search</Text>
                <Flex
                  alignContent={"center"}
                  direction={"row"}
                  flex={1}
                  gap={2}
                >
                  <FormControl>
                    <Input id="email" type="email" />
                  </FormControl>
                  <IconButton
                    w={20}
                    colorScheme="green"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                  />
                </Flex>
              </Stack>
            </Card>
            <Card>
              <Text>Bed</Text>
              <FormControl>
                <NumberInput max={50} min={1}>
                  <NumberInputField id="amount" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Card>
            <Card>
              <Text>Bath</Text>
              <FormControl>
                <NumberInput max={50} min={1}>
                  <NumberInputField id="amount" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Card>
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
}
