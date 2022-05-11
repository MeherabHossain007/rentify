import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var islogin: boolean;
  const isError = islogin === false;
  const handleLogin = async (email: string, password: string) => {
    let { data, error, status } = await supabase
      .from("profiles")
      .select("email,password,user_id")
      .match({ email: email, password: password })
      .single();

    if (error && status !== 406) {
      throw error;
    }
    if (data) {
      islogin = true;
      router.push({
        pathname: "/screens/profile",
        query: data.user_id,
      });
    } else {
      islogin = false;
    }
  };
  
  return (
    <Flex
      minH={"50vh"}
      minW={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"green.400"}>features</Link>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={isError}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              {!isError ? (
                <FormErrorMessage>
                  Password or email is invalid
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <FormControl id="password" isInvalid={isError}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isError ? (
                <FormErrorMessage>
                  Password or email is invalid
                </FormErrorMessage>
              ) : (
                ""
              )}
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"green.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email, password);
                  if (islogin === false) {
                    alert("Password or email is invalid");
                  }
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
