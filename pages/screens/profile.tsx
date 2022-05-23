import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  HStack,
  Wrap,
  WrapItem,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import AdPost from "../components/adPost";
import ProfileNav from "../components/profileNav";
import RentCard from "../components/rentCard";
import { useEffect } from "react";
import ProRentCard from "../components/proCard";

export const getStaticProps = async () => {
  const { data: posts, error } = await supabase.from("posts").select("*");

  return {
    props: {
      posts,
    },
  };
};
function profile({ posts }) {
  const router = useRouter();
  const id = router.query;
  const querystring = require("querystring");
  const u_id = querystring.stringify(id).replace(/=$|=(?=&)/g, "");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getEmail();
  });

  const getEmail = async () => {
    let { data, error, status } = await supabase
      .from("profiles")
      .select("email")
      .eq("user_id", u_id)
      .single();
    if (error) throw error;

    if (data) {
      setEmail(data.email);
    }
  };
  return (
    <>
      <ProfileNav id={id} />
      <Box p={12}>
        <HStack p={10} justifyContent={"space-between"}>
          <Heading textAlign="center">My Post</Heading>
          <AdPost />
        </HStack>
        <Flex flex={1} px={40}>
          <Wrap>
            {posts.map((posts) =>
              posts.email === email ? (
                <WrapItem>
                  <ProRentCard
                    amount={posts.price}
                    location={posts.location}
                    type={posts.type}
                    title={posts.name}
                    bed={posts.beds}
                    bath={posts.baths}
                    area={posts.area}
                    phone={posts.number}
                    email={posts.email}
                    image={
                      `https://fahabcdzxgcwuzrpykgn.supabase.co/storage/v1/object/public/avatars/${posts.image}`
                    }
                    post_id={posts.post_id}
                  >
                    <Button
                      w={100}
                      fontSize={"sm"}
                      fontWeight={400}
                      color="white"
                      variant={"solid"}
                      bg="green.400"
                      _hover={{
                        bg: "green.400",
                      }}
                    >
                      Book Now
                    </Button>
                  </ProRentCard>
                </WrapItem>
              ) : (
                ""
              )
            )}
          </Wrap>
        </Flex>
      </Box>
    </>
  );
}

export default profile;
