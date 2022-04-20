import { Center, Heading, HStack, VStack } from "@chakra-ui/react";
import React, { Component } from "react";
import HomeCard from "../components/catagoryCard";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Navbar from "../components/navBar";
import RentCard from "../components/rentCard";
import Search from "../components/search";

class HomePage extends Component {
  render() {
    return <>
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
      <Heading textAlign="center" p={10}>
        Browse Ads
      </Heading>
      <HStack justify="center" pl={200} pr={200} >
        <RentCard
            amount={40000}
            location={"Keraniganj, Dhaka"}
            title={"Brand New Flat for Rent Covering An Area Of 750 Sq Ft In Keraniganj Nearby Marine Shishu Park"}
            bed={2}
            bath={2}
            area={750}
            type={"APARTMENT"}></RentCard>
        <RentCard
          amount={5000}
          location={"Bsansree, Dhaka"}
          title={"Brand New Room for rent Covering An Area Of 750 Sq ft In Keraniganj Nearby Marine Shishu Park"}
          bed={1}
          bath={1}
          area={130}
          type={'Room'}></RentCard>
      </HStack>
      <Footer/>
      <div>
        <script
          src="//code.tidio.co/xm0umtoxjpxqm8yuk9w9hlwypijcj8nz.js"
          async
        ></script>
      </div>
    </>;
  }
}

export default HomePage;
