import {
  Center,
  Flex,
  Heading,
  HStack,
  VStack,
  Wrap,
  WrapItem,
  Text,
  Stack,
  Container,
} from "@chakra-ui/react";
import router from "next/router";
import React, { Component, useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import HomeCard from "../components/catagoryCard";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Navbar from "../components/navBar";
import RentCard from "../components/rentCard";
import Search from "../components/search";

export default function HomePage() {
  const [type, setType] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);
  const handleClick = (title: string) => {
    setType(title);
    router.push('/screens/searchScreen')
  };
  const getPosts = async () => {
    let { data: posts, error } = await supabase.from("posts").select("*");

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
            posts.type === type ? (
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
                ></RentCard>
              </WrapItem>
            ) : (
              ""
            )
          )}
        </Wrap>
      </Flex>
    );
  };
  return (
    <>
      <Navbar />
      <Hero />
      <Center>
        <VStack flex={1}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading
              fontSize={"4xl"}
              bgGradient={"linear(to-r, #22c1c3, #fdbb2d)"}
              bgClip="text"
            >
              Search Your desire Rent
            </Heading>
            <Text color={"gray.600"} fontSize={"xl"}>
              Easy access and fast way of finding rent through Internet and
              giving user friendly services to everyone.
            </Text>
          </Stack>
          <Search />
        </VStack>
      </Center>

      <Heading
        textAlign="center"
        pt={10}
        pb={5}
        bgGradient={"linear(to-r, #22c1c3, #fdbb2d)"}
        bgClip="text"
      >
        Category
      </Heading>
      <Text color={"gray.600"} fontSize={"xl"} textAlign="center" pb={5}>
        East way of finding rent through our Category by choosing your desired
        category.
      </Text>
      <HStack flex={1} justify="center" mb={5}>
        <div onClick={() => handleClick("Hostel")}>
          <HomeCard Title={"Hostel"} />
        </div>
        <div onClick={() => handleClick("Apartment")}>
          <HomeCard Title={"Apartment"} />
        </div>
        <div onClick={() => handleClick("Roommate")}>
          <HomeCard Title={"Roommate"} />
        </div>
        <div onClick={() => handleClick("Sublet")}>
          <HomeCard Title={"Sublet"} />
        </div>
      </HStack>
      <Footer />
      <div>
        <script
          src="//code.tidio.co/xm0umtoxjpxqm8yuk9w9hlwypijcj8nz.js"
          async
        ></script>
      </div>
    </>
  );
}
