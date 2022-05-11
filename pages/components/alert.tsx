import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React from "react";
export default function AlertMassage({ bname, text ,header }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Popover>
        <PopoverTrigger>
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
            {bname}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>{header}</PopoverHeader>
          <PopoverBody>
            {text}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
