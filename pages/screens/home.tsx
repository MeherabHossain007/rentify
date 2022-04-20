import { Center, Heading, HStack, VStack } from "@chakra-ui/react";
import React, { Component } from "react";
import HomeCard from "../components/catagoryCard";
import Hero from "../components/Hero";
import Navbar from "../components/navBar";
import RentCard from "../components/rentCard";
import Search from "../components/search";

class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Center>
          <VStack flex={1}>
            <Search />
          </VStack>
        </Center>
        <Heading textAlign="center" p={10}>
          Catagory
        </Heading>
        <HStack flex={1} justify="center" mb={5}>
          <HomeCard Title={"Hostel"} />
          <HomeCard Title={"Aparment"} />
          <HomeCard Title={"Room"} />
          <HomeCard Title={"Sublet"} />
        </HStack>
        <HStack pr={200} pl={200}>
          <RentCard />
          <RentCard />
        </HStack>
        <div>
          <script
            src="//code.tidio.co/xm0umtoxjpxqm8yuk9w9hlwypijcj8nz.js"
            async
          ></script>
        </div>
      </>
    );
  }
}

export default HomePage;
