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
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FC, Props, useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import Navbar from "../components/navBar";
import RentCard from "../components/rentCard";

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

export default function SearchScreen() {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [area, setArea] = useState(0);
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [posts, setPosts] = useState([]);


  const handleSearch = async (
    location: any,
    price: any,
    area: any,
    beds: any,
    baths: any
  ) => {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .eq("location", location);

    if (error) throw error;

    if (posts) {
      setPosts(posts);
    }
  };

  const Post = ({ posts }) => {
    console.log(posts);
    return (
      <Flex flex={1} flexDirection={"row"}>
        <Wrap>
          {posts.map((posts) =>
            (posts.price <= price && posts.area <= area) ? (
              <WrapItem>
                <RentCard
                  amount={posts.price}
                  location={posts.location}
                  type={posts.type}
                  title={posts.name}
                  bed={posts.beds}
                  bath={posts.baths}
                  area={posts.area}
                  phone={posts.number}
                  image={
                    "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/colonial-style-house-night-scene.jpg?alt=media&token=6bfee092-54bc-4c68-904b-5d7af87a78c0"
                  }
                  post_id={posts.post_id}
                >

                </RentCard>
              </WrapItem>
            ) : (posts.price <= price) ? (
              <WrapItem>
                <RentCard
                  amount={posts.price}
                  location={posts.location}
                  type={posts.type}
                  title={posts.name}
                  bed={posts.beds}
                  bath={posts.baths}
                  area={posts.area}
                  phone={posts.number}
                  image={
                    "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/colonial-style-house-night-scene.jpg?alt=media&token=6bfee092-54bc-4c68-904b-5d7af87a78c0"
                  }
                  post_id={posts.post_id}
                >

                </RentCard>
              </WrapItem>
            ) :  (posts.area <= area) ? (
              <WrapItem>
                <RentCard
                  amount={posts.price}
                  location={posts.location}
                  type={posts.type}
                  title={posts.name}
                  bed={posts.beds}
                  bath={posts.baths}
                  area={posts.area}
                  phone={posts.number}
                  image={
                    "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/colonial-style-house-night-scene.jpg?alt=media&token=6bfee092-54bc-4c68-904b-5d7af87a78c0"
                  }
                  post_id={posts.post_id}
                >

                </RentCard>
              </WrapItem>
            ) : (price === 0 || area === 0 || area === undefined || price === undefined) ? (
              <WrapItem>
              <RentCard
                amount={posts.price}
                location={posts.location}
                type={posts.type}
                title={posts.name}
                bed={posts.beds}
                bath={posts.baths}
                area={posts.area}
                phone={posts.number}
                image={
                  "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/colonial-style-house-night-scene.jpg?alt=media&token=6bfee092-54bc-4c68-904b-5d7af87a78c0"
                }
                post_id={posts.post_id}
              >

              </RentCard>
            </WrapItem>
            ) : (
              " "
            )
          )}
        </Wrap>
      </Flex>
    );
  };
  return (
    <>
      <Navbar />
      <Center>
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
                  <Flex
                    alignContent={"center"}
                    direction={"row"}
                    flex={1}
                    gap={2}
                  >
                    <FormControl>
                      <Input
                        id="location"
                        type="text"
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </FormControl>
                    <IconButton
                      w={20}
                      colorScheme="green"
                      aria-label="Search database"
                      icon={<SearchIcon />}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSearch(location, price, area, beds, baths);
                      }}
                    />
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
                  <FormControl>
                    <Input
                      id="beds"
                      onChange={(e) => setBeds(e.target.value)}
                    />
                  </FormControl>
                </Card>
                <Card>
                  <Text>Bath</Text>
                  <FormControl>
                    <Input
                      id="baths"
                      onChange={(e) => setBaths(e.target.value)}
                    />
                  </FormControl>
                </Card>
                <Card>
                  <FormControl>
                    <FormLabel htmlFor="amount">Price</FormLabel>
                    <Input
                      id="price"
                      onChange={(e) => setPrice(parseInt(e.target.value))} 
                    />
                  </FormControl>
                </Card>
                <Card>
                  <FormControl>
                    <FormLabel htmlFor="area">Area(Sqft)</FormLabel>
                    <Input
                      id="area"
                      onChange={(e) => setArea(parseInt(e.target.value))}
                    />
                  </FormControl>
                </Card>
              </HStack>
            </Box>
          </VStack>
        </Flex>
      </Center>
      <VStack justify="center" pl={170} pr={170}>
        <Post posts={posts} />
      </VStack>
    </>
  );
}
