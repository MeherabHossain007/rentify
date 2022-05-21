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
  Container,
  keyframes,
  SimpleGrid,
} from "@chakra-ui/react";
import router from "next/router";
import { FC, Props, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const Card = ({ children }: any) => {
  return (
    <Box
      bgColor={"white"}
      borderRadius={10}
      boxShadow={"lg"}
      justifyContent={"center"}
      alignItems={"center"}
      h={100}
      p={4}
    >
      {children}
    </Box>
  );
};

const SearchCard = ({ children }: any) => {
  return (
    <Box
      bgColor={"white"}
      borderRadius={10}
      boxShadow={"lg"}
      justifyContent={"center"}
      alignItems={"center"}
      h={100}
      p={4}
      my={4}
    >
      {children}
    </Box>
  );
};

const pulseRing = keyframes`
0% {
  transform: scale(1.3);
}
40%,
50% {
  opacity: 0;
}
100% {
  opacity: 0;
}
`;

export default function Search() {
  return (
    <Flex
      w={"66%"}
      borderRadius={30}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        borderRadius={30}
        justifyContent={"center"}
      >
        <Box
          bgColor={"white"}
          boxSize={"400px"}
          boxShadow={"2xl"}
          w={"100%"}
          h={"100%"}
          borderRadius={10}
          display={"flex"}
          flexDirection="column"
          justifyContent={"flex-start"}
          p={5}
        >
          <SearchCard>
            <Stack direction={"column"} spacing={2} alignSelf={"stretch"}>
              <Text>Location</Text>
              <Flex alignContent={"center"} direction={"row"} flex={1} gap={2}>
                <FormControl isDisabled>
                  <Input id="location" type="text" />
                </FormControl>
                <SimpleGrid>
                  <IconButton
                  gridColumn={1}
                  gridRow={1}
                    animation={`2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`}
                    w={20}
                    cursor={"pointer"}
                    colorScheme="green"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick={() =>{
                      router.push({
                        pathname: "/screens/searchScreen",
                      })
                    }}
                  />
                  <IconButton
                  gridColumn={1}
                  gridRow={1}
                    
                    w={20}
                    cursor={"pointer"}
                    colorScheme="green"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick={() =>{
                      router.push({
                        pathname: "/screens/searchScreen",
                      })
                    }}
                  />
                </SimpleGrid>
              </Flex>
            </Stack>
          </SearchCard>
          <HStack
            display={"flex"}
            flexDirection="row"
            justifyContent={"center"}
          >
            <Card>
              <Text>Bed</Text>
              <FormControl isDisabled>
                <Input id="beds" />
              </FormControl>
            </Card>
            <Card>
              <Text>Bath</Text>
              <FormControl isDisabled>
                <Input id="baths" />
              </FormControl>
            </Card>
            <Card>
              <Text>Price</Text>
              <FormControl isDisabled>
                <Input id="price" />
              </FormControl>
            </Card>
            <Card>
              <Text>Area(Sqft)</Text>
              <FormControl isDisabled>
                <Input id="area" />
              </FormControl>
            </Card>
          </HStack>
        </Box>
      </VStack>
    </Flex>
  );
}
