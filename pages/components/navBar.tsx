import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Link,
  Image,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Login from "../screens/login";
import SignUp from "../screens/signUp";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: islogOpen,
    onOpen: onlogOpen,
    onClose: onlogClose,
  } = useDisclosure();
  const {
    isOpen: isSignOpen,
    onOpen: onSignOpen,
    onClose: onSignClose,
  } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        pr={200}
        pl={200}
        minH={"60px"}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            alt={"Logo"}
            objectFit={"contain"}
            h={10}
            w={100}
            src={
              "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/Asset%208.png?alt=media&token=0b442e59-df26-485a-acf2-87930906e0d0"
            }
          />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            onClick={onlogOpen}
          >
            Sign in
          </Button>
          <Modal
            isOpen={islogOpen}
            onClose={onlogClose}
            size={"xl"}
            id={"Login"}
          >
            <ModalOverlay backdropFilter="blur(10px)" />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Login />
              </ModalBody>
            </ModalContent>
          </Modal>
          <Button
            fontSize={"sm"}
            fontWeight={400}
            color="white"
            variant={"solid"}
            bg="green.400"
            _hover={{
              bg: "green.300",
            }}
            onClick={onSignOpen}
          >
            Sign Up
          </Button>
          <Modal
            isOpen={isSignOpen}
            onClose={onSignClose}
            size={"xl"}
            id={"SignUp"}
          >
            <ModalOverlay backdropFilter='blur(10px)' />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <SignUp />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Stack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} align="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Search",
    href: "/screens/searchScreen",
  },
  {
    label: "About",
    href: "/about",
  },
];
