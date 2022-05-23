import React from "react";
import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Box,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Textarea } from "@chakra-ui/react";
import axios from "axios";
import { supabase } from "../../utils/supabaseClient";

export default function ReviewSubmit({ post_id }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [error, setError] = useState(false);

  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Box
      bgImage="url('https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/226559-P2SO3Y-87.jpg?alt=media&token=a4dfe367-e139-4e59-814d-a2329278ad91')"
      bgSize={"800px"}
      minH={"10vh"}
      m={4}
    >
      <Container
        maxW={"lg"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          How was your experience?
        </Heading>
        <Stack
          direction={"column"}
          as={"form"}
          spacing={"12px"}
          onSubmit={async (e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState("submitting");
            const { data, error } = await supabase
              .from("reviewlist")
              .insert([
                { post_id: post_id, name: name , title: title , review: value },
              ]);
            if(data){
                setState('success');
            }
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"text"}
              type={"text"}
              required
              placeholder={"Your Name"}
              aria-label={"Your Name"}
              value={name}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </FormControl>
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"text"}
              type={"text"}
              required
              placeholder={"Your title"}
              aria-label={"Your title"}
              value={title}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </FormControl>
          <Textarea
            placeholder="Here is a sample placeholder"
            onChange={handleInputChange}
            value={value}
          />
          <FormControl w={"full"}>
            <Button
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "Your opinion matters! ✌️"}
        </Text>
      </Container>
    </Box>
  );
}
